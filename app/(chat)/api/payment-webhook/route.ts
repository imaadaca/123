import { NextResponse } from 'next/server';
import { updateUserType } from '@/lib/db/queries';
import crypto from 'crypto';

const WEBHOOK_SECRET = 'MindFire@123';

// Verify Razorpay webhook signature
function verifyWebhookSignature(body: string, signature: string): boolean {
  const expectedSignature = crypto
    .createHmac('sha256', WEBHOOK_SECRET)
    .update(body)
    .digest('hex');
  
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}

// This is a simple example. In production, verify the webhook signature!
export async function POST(request: Request) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-razorpay-signature');
    
    if (!signature) {
      return NextResponse.json({ error: 'Missing signature' }, { status: 401 });
    }
    
    // Verify webhook signature
    if (!verifyWebhookSignature(body, signature)) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }
    
    const payload = JSON.parse(body);
    
    // Razorpay sends event type in 'event' and payload in 'payload'
    if (payload.event === 'payment.link.paid') {
      // You need to extract the user's email or ID from the payment payload
      const email = payload.payload?.payment_link?.customer?.email;
      if (!email) {
        return NextResponse.json({ error: 'No email found in webhook' }, { status: 400 });
      }
      // Find user by email and upgrade to pro
      // You may want to add a getUserByEmail function if not present
      const users = await (await import('@/lib/db/queries')).getUser(email);
      if (!users.length) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }
      const user = users[0];
      await updateUserType({ userId: user.id, type: 'pro' });
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ ignored: true });
  } catch (error) {
    return NextResponse.json({ error: 'Webhook error', details: String(error) }, { status: 500 });
  }
} 