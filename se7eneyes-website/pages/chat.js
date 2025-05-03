import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import ChatInterface from '../components/ChatInterface';

const Chat = () => {
  const router = useRouter();
  const [model, setModel] = useState('hackergpt-v1');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock authentication state
  
  useEffect(() => {
    // Check if user is logged in
    // For demo purposes, we'll just show the login modal
    if (!isLoggedIn) {
      setIsLoginModalOpen(true);
    }
    
    // Set model based on URL query parameter
    if (router.query.v) {
      switch (router.query.v) {
        case 'v1':
          setModel('hackergpt-v1');
          break;
        case 'v2':
          setModel('hackergpt-v2');
          break;
        case 'evil':
          setModel('evil-gpt');
          break;
        default:
          setModel('hackergpt-v1');
      }
    }
  }, [router.query, isLoggedIn]);
  
  const handleCloseLoginModal = () => {
    // For demo purposes, we'll just set isLoggedIn to true
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };
  
  return (
    <>
      <Head>
        <title>HackerGPT Chat</title>
        <meta name="description" content="Chat with HackerGPT - Advanced AI for cybersecurity" />
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
        <div className="flex flex-col h-screen">
          <div className="flex-1">
            <ChatInterface model={model} />
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
