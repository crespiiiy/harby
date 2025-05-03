import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const TwoFactorAuth = ({ isEnabled, onEnable, onDisable, onVerify }) => {
  const [qrCode, setQrCode] = useState('');
  const [secret, setSecret] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [step, setStep] = useState('initial'); // initial, setup, verify, success
  const [error, setError] = useState('');

  // Simulate generating a 2FA secret and QR code
  const generateSecret = async () => {
    // In a real implementation, this would call an API to generate a secret
    // and create a QR code for the authenticator app
    
    // Simulate API call
    setTimeout(() => {
      // Example secret (in a real app, this would be generated securely)
      const newSecret = 'ABCDEFGHIJKLMNOP';
      setSecret(newSecret);
      
      // In a real app, this would be a QR code URL from the server
      // For demo, we'll just use a placeholder
      setQrCode('/se7eneyes.jpg'); // Placeholder image
      
      setStep('setup');
    }, 1000);
  };

  const handleEnable = () => {
    setError('');
    generateSecret();
  };

  const handleVerify = () => {
    setError('');
    
    if (!verificationCode.trim()) {
      setError('Verification code is required');
      return;
    }
    
    // In a real implementation, this would verify the code against the secret
    // For demo purposes, we'll accept any 6-digit code
    if (verificationCode.length === 6 && /^\d+$/.test(verificationCode)) {
      setStep('success');
      if (onEnable) onEnable(secret);
    } else {
      setError('Invalid verification code. Please try again.');
    }
  };

  const handleDisable = () => {
    if (onDisable) onDisable();
    setStep('initial');
    setSecret('');
    setQrCode('');
    setVerificationCode('');
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      <h3 className="text-xl font-bold text-white mb-4">Two-Factor Authentication (2FA)</h3>
      
      {isEnabled ? (
        <div>
          <p className="text-green-400 mb-4">Two-factor authentication is enabled for your account.</p>
          <p className="text-gray-400 mb-4">2FA adds an extra layer of security to your account by requiring a verification code from your authenticator app in addition to your password.</p>
          
          <button
            onClick={handleDisable}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
          >
            Disable 2FA
          </button>
        </div>
      ) : (
        <div>
          {step === 'initial' && (
            <div>
              <p className="text-gray-400 mb-4">Enhance your account security by enabling two-factor authentication. This requires a verification code from your authenticator app when signing in.</p>
              
              <button
                onClick={handleEnable}
                className="bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded transition-colors"
              >
                Enable 2FA
              </button>
            </div>
          )}
          
          {step === 'setup' && (
            <div>
              <p className="text-gray-400 mb-4">Scan this QR code with your authenticator app (like Google Authenticator, Authy, or Microsoft Authenticator).</p>
              
              <div className="mb-6 bg-white p-4 inline-block rounded">
                {qrCode && (
                  <div className="relative w-48 h-48">
                    <Image src={qrCode} alt="2FA QR Code" fill className="object-contain" />
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <p className="text-gray-400 mb-2">Or enter this code manually in your app:</p>
                <code className="bg-gray-800 px-3 py-1 rounded text-yellow-400">{secret}</code>
              </div>
              
              <div className="mb-4">
                <label htmlFor="verification-code" className="block text-gray-300 mb-2">Enter the 6-digit verification code from your app:</label>
                <input
                  type="text"
                  id="verification-code"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-accent text-white"
                  placeholder="000000"
                  maxLength={6}
                />
              </div>
              
              {error && (
                <div className="bg-red-900 bg-opacity-20 border border-red-500 text-red-500 px-4 py-3 rounded mb-4">
                  {error}
                </div>
              )}
              
              <div className="flex space-x-4">
                <button
                  onClick={handleVerify}
                  className="bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded transition-colors"
                >
                  Verify and Enable
                </button>
                
                <button
                  onClick={() => setStep('initial')}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
          
          {step === 'success' && (
            <div>
              <div className="bg-green-900 bg-opacity-20 border border-green-500 text-green-500 px-4 py-3 rounded mb-4">
                Two-factor authentication has been successfully enabled for your account.
              </div>
              
              <p className="text-gray-400 mb-4">
                From now on, you'll need to enter a verification code from your authenticator app when signing in.
                Make sure to keep your recovery codes in a safe place in case you lose access to your authenticator app.
              </p>
              
              <button
                onClick={() => {
                  if (onVerify) onVerify();
                }}
                className="bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded transition-colors"
              >
                Continue to Dashboard
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TwoFactorAuth;