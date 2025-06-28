'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckIcon } from '@/components/icons';

export default function UpgradePage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = () => {
    setIsLoading(true);
    // This will redirect to Razorpay payment page
    // You'll need to implement Razorpay integration here
    window.location.href = 'https://razorpay.me/@numlink';
  };

  const features = [
    {
      title: 'Reasoning Plus AI Model',
      description: 'Access to advanced AI reasoning capabilities with enhanced problem-solving',
      icon: <CheckIcon className="h-5 w-5 text-green-500" />
    },
    {
      title: 'Prompt Enhancement BETA',
      description: 'Intelligent prompt optimization for better AI responses',
      icon: <CheckIcon className="h-5 w-5 text-green-500" />
    },
    {
      title: 'Priority Server BETA',
      description: 'Faster response times with priority access to our servers',
      icon: <CheckIcon className="h-5 w-5 text-green-500" />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Upgrade to brAn Pro</h1>
        <p className="text-xl text-muted-foreground">
          Unlock advanced AI features and get priority access
        </p>
      </div>

      <div className="grid gap-6 mb-12">
        {features.map((feature, index) => (
          <Card key={index} className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                {feature.icon}
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to upgrade?</CardTitle>
            <CardDescription>
              Get access to all premium features with secure payment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={handleContinue}
              disabled={isLoading}
              className="w-full text-lg py-6"
              size="lg"
            >
              {isLoading ? 'Redirecting...' : 'Continue to Payment'}
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Secure payment powered by Razorpay
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
