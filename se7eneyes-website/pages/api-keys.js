import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import ApiKeyManager from '../components/ApiKeyManager';

const ApiKeysPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock authentication state
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  useEffect(() => {
    // Check if user is logged in
    // For demo purposes, we'll just show the login modal
    if (!isLoggedIn) {
      setIsLoginModalOpen(true);
    }
  }, [isLoggedIn]);
  
  const handleCloseLoginModal = () => {
    // For demo purposes, we'll just set isLoggedIn to true
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };
  
  return (
    <>
      <Head>
        <title>API Key Manager - HackerGPT</title>
        <meta name="description" content="Manage your HackerGPT API keys" />
      </Head>
      
      {isLoginModalOpen ? (
        <div className="flex items-center justify-center min-h-screen bg-primary">
          <div className="bg-secondary p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6">Login Required</h2>
            <p className="text-gray-300 mb-6">
              To continue, please sign in to your account or create a new one.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={handleCloseLoginModal} 
                className="btn btn-secondary flex-1"
              >
                Login
              </button>
              <button 
                onClick={handleCloseLoginModal}
                className="btn btn-primary flex-1"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      ) : (
        <ApiKeyManager />
      )}
    </>
  );
};

export default ApiKeysPage;
