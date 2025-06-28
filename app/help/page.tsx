import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Help | brAn',
  description: 'Information about brAn and Numlink.Net policies',
};

export default function HelpPage() {
  return (
    <div className="container py-8 md:py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">brAn Help & Legal Information</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About brAn</h2>
        <p className="mb-4">
          brAn is a product of Numlink.Net, a group dedicated to creating innovative digital solutions. 
          We operate under strict ethical standards to protect user privacy and provide transparent services.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
        <p className="mb-4">
          For ethical practices, we take only the minimum necessary information from users:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Age</li>
          <li>Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
        </ul>
        <p>
          This collection applies to all users, whether signed in or not. We believe in transparency 
          and ethical data handling practices.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Refund Policy</h2>
        <p className="mb-4">
          Please note that for our services, there are no refunds. This policy applies universally to all 
          users regardless of their usage status. We recommend reviewing the services you opt for carefully 
          as they are final sale.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
        <p className="mb-4">
          Your privacy is important to us. All information collected is used solely for the operation 
          of our services and will never be shared with third parties without explicit consent. 
          You can find more detailed information about our data handling practices in our complete 
          privacy policy documentation.
        </p>
      </section>
    </div>
  );
}
