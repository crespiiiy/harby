import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import TwoFactorAuth from '../components/TwoFactorAuth';

const TwoFactorAuthPage = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
      return;
    }

    const parsedUser = JSON.parse(userData);
    setUser(parsedUser);
    setIsLoggedIn(true);
    
    // Check if 2FA is already enabled
    setIs2FAEnabled(!!parsedUser.twoFactorEnabled);
  }, [router]);

  const handleEnable2FA = (secret) => {
    // In a real implementation, this would call an API to enable 2FA
    // For demo purposes, we'll just update localStorage
    
    if (user) {
      const updatedUser = {
        ...user,
        twoFactorEnabled: true,
        twoFactorSecret: secret
      };
      
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      setIs2FAEnabled(true);
    }
  };

  const handleDisable2FA = () => {
    // In a real implementation, this would call an API to disable 2FA
    // For demo purposes, we'll just update localStorage
    
    if (user) {
      const updatedUser = {
        ...user,
        twoFactorEnabled: false,
        twoFactorSecret: null
      };
      
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      setIs2FAEnabled(false);
      
      window.showToast('Two-factor authentication has been disabled', 'info');
    }
  };

  const handleVerifyComplete = () => {
    router.push('/dashboard');
  };

  if (!isLoggedIn) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-primary">
      <Head>
        <title>Two-Factor Authentication - Green Hat</title>
        <meta name="description" content="Set up two-factor authentication for your Green Hat account" />
      </Head>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-white mb-2">Account Security</h1>
            <p className="text-gray-400">Enhance your account security with two-factor authentication</p>
          </div>

          <TwoFactorAuth 
            isEnabled={is2FAEnabled}
            onEnable={handleEnable2FA}
            onDisable={handleDisable2FA}
            onVerify={handleVerifyComplete}
          />

          <div className="mt-8 bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Security Recommendations</h3>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-white">Use a strong, unique password</p>
                  <p className="text-sm text-gray-400">Your password should be at least 12 characters long and include a mix of letters, numbers, and symbols.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-white">Keep your recovery codes safe</p>
                  <p className="text-sm text-gray-400">Store your 2FA recovery codes in a secure location separate from your password manager.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-white">Use a reputable authenticator app</p>
                  <p className="text-sm text-gray-400">We recommend Google Authenticator, Authy, or Microsoft Authenticator for generating 2FA codes.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <Link href="/dashboard" className="text-accent hover:underline">
              Return to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoFactorAuthPage;