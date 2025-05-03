import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

// مكونات النماذج
import ModelCard from '../components/ModelCard';
import SecurityDashboard from '../components/SecurityDashboard';

// مكون النافذة المنبثقة للاشتراك
const SubscriptionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-gray-900 border border-red-900 rounded-lg p-6 max-w-md w-full mx-4 animate-fade-in">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">Premium Access Required</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-gray-300 mb-6">
          This model is only available to premium subscribers. Upgrade your account to access advanced features and capabilities.
        </p>

        <div className="flex flex-col space-y-3">
          <button
            className="bg-red-700 hover:bg-red-800 text-white py-2 px-4 rounded-md transition-colors"
            onClick={onClose}
          >
            Subscribe Now
          </button>
          <button
            className="bg-transparent border border-gray-700 hover:border-gray-600 text-gray-300 py-2 px-4 rounded-md transition-colors"
            onClick={onClose}
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
};

const HackerGPT = () => {
  const router = useRouter();
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

  // استخدام بيانات ثابتة بدلاً من الاتصال بـ API
  useEffect(() => {
    // تعيين النماذج المتاحة مباشرة
    setModels([
      {
        id: "hackergpt-v1",
        name: "HackerGPT-v1",
        description: "The basic model for cybersecurity tasks, suitable for beginners and professionals.",
        isFree: true,
        requestsPerDay: 10,
        tag: "FREE"
      },
      {
        id: "hackergpt-v2",
        name: "HackerGPT-v2",
        description: "Advanced version with improved capabilities for complex problem solving.",
        isFree: false,
        subscription: true,
        tag: "PRO"
      },
      {
        id: "evil-gpt",
        name: "Evil-GPT",
        description: "The most advanced and dangerous model with all restrictions removed.",
        isFree: true,
        requestsPerDay: 10,
        tag: "FREE"
      }
    ]);

    // إنهاء حالة التحميل وإعادة تعيين الخطأ إلى null
    setLoading(false);
    setError(null);
  }, []);

  // التعامل مع النقر على زر Try DevilGPT
  const handleTryBuilder7e = () => {
    router.push('/devilgpt');
  };

  // التعامل مع النقر على نموذج
  const handleTryModel = (modelId, isFree, subscription) => {
    if (!isFree && subscription) {
      // فتح النافذة المنبثقة بدلاً من استخدام alert
      setIsSubscriptionModalOpen(true);
    } else {
      router.push(`/chat/${modelId}`);
    }
  };

  // إغلاق النافذة المنبثقة
  const handleCloseSubscriptionModal = () => {
    setIsSubscriptionModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* النافذة المنبثقة للاشتراك */}
      <SubscriptionModal
        isOpen={isSubscriptionModalOpen}
        onClose={handleCloseSubscriptionModal}
      />

      <Head>
        <title>HackerGPT - Green Hat</title>
        <meta name="description" content="HackerGPT - Advanced AI Tool for Cybersecurity" />
      </Head>

      {/* شريط التنقل */}
      <nav className="py-4 border-b border-red-900 bg-black">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="relative w-10 h-10 mr-3">
              <Image
                src="/se7eneyes.jpg"
                alt="Green Hat Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-2xl font-bold text-white">Green Hat</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="/hackergpt" className="text-white font-bold">
              HackerGPT
            </Link>
            <Link href="/devilgpt" className="text-gray-300 hover:text-white">
              DevilGPT
            </Link>
          </div>
        </div>
      </nav>

      {/* Security Dashboard Section */}
      <section className="py-8 border-b border-red-900">
        <div className="container mx-auto px-4">
          <SecurityDashboard />
        </div>
      </section>

      {/* قسم DevilGPT */}
      <section className="py-12 border-b border-red-900 bg-gradient-to-r from-black to-red-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-red-600">
              The ultimate tool-generation engine forged for digital chaos. It's not just a tool builder — it's a weapon factory.
            </h1>

            <p className="text-lg mb-6">
              DevilGPT is our latest innovation in cybersecurity tooling. From malware to stealthy exploits, DevilGPT crafts them all with precision. This powerful engine enables you to create custom tools tailored to your specific needs, whether for penetration testing, vulnerability research, or other security applications.
            </p>

            <p className="text-lg mb-8">
              With DevilGPT, you're not limited to pre-built solutions. The engine provides granular control over every aspect of your tools, from evasion techniques to payload delivery mechanisms. All generated tools come with built-in stealth capabilities and are designed to bypass common security measures.
            </p>

            <div className="flex justify-between items-center">
              <button
                onClick={handleTryBuilder7e}
                className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-md flex items-center transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Try DevilGPT
              </button>

              <div className="flex items-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                3 req/day
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم النماذج المتاحة */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center text-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 7H7v6h6V7z" />
              <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
            </svg>
            Available Models
          </h2>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
            </div>
          ) : error ? (
            <div className="bg-red-900/30 border border-red-800 text-white p-4 rounded-md">
              {error}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {models.map((model) => (
                <ModelCard
                  key={model.id}
                  model={model}
                  onTry={() => handleTryModel(model.id, model.isFree, model.subscription)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* قسم API Reference */}
      <section className="py-12 border-t border-red-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center text-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            API Reference
          </h2>

          <div className="bg-black border border-red-900 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              For Developers
            </h3>
            <p className="text-gray-300 mb-4">
              The API follows the same daily free usage limit (10 req/day). You need an API key to use it.
            </p>
            <div className="bg-gray-900 p-4 rounded-md">
              <pre className="text-gray-300 overflow-x-auto">
                <code>{`const response = await fetch("https://api.greenhat.org/v1/models", {
  method: "GET",
  headers: {
    "Authorization": "Bearer sk-7e-v1-622aafb37f01db6e5a937fb97a32047c"
  }
});

const data = await response.json();
console.log(data);`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HackerGPT;
