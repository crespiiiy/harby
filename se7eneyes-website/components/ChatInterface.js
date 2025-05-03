import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import config from '../config';

const ChatInterface = ({ model = 'hackergpt-v1' }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isEncrypted, setIsEncrypted] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscriptionKeyEntered, setSubscriptionKeyEntered] = useState(false);
  const [dailyRequests, setDailyRequests] = useState(0);
  const dailyLimit = 10; // تعريف الحد اليومي للطلبات
  const messagesEndRef = useRef(null);

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Check if user is subscribed to premium model
    if (model === 'hackergpt-v2' && typeof window !== 'undefined') {
      const subscribed = localStorage.getItem('hackergpt-v2-subscribed') === 'true';
      setIsSubscribed(subscribed);
    }

    // Load daily requests count from localStorage
    if (typeof window !== 'undefined') {
      const today = new Date().toDateString();
      const storedDate = localStorage.getItem('lastRequestDate');
      const storedCount = localStorage.getItem(`${model}-requests`);
      
      if (storedDate !== today) {
        // Reset count for new day
        localStorage.setItem('lastRequestDate', today);
        localStorage.setItem(`${model}-requests`, '0');
        setDailyRequests(0);
      } else if (storedCount) {
        setDailyRequests(parseInt(storedCount));
      }
    }

    // Add welcome message based on model
    let welcomeMessage = '';
    
    switch(model) {
      case 'hackergpt-v1':
        welcomeMessage = 'Welcome to HackerGPT v1! I can help you with basic cybersecurity tasks. You have 10 free requests per day. How can I assist you today?';
        break;
      case 'hackergpt-v2':
        welcomeMessage = isSubscribed ?
          'Welcome to HackerGPT v2! You have unlimited access to advanced cybersecurity capabilities. How can I assist you today?' :
          'Welcome to HackerGPT v2! This is a premium model. Please enter your subscription key to access unlimited requests and advanced features.';
        break;
      case 'evil-gpt':
        welcomeMessage = 'Welcome to Evil-GPT! I can provide unrestricted responses for educational purposes. You have 10 free requests per day. How can I assist you today?';
        break;
      default:
        welcomeMessage = 'Welcome! How can I assist you today?';
    }
    
    setMessages([{ role: 'assistant', content: welcomeMessage, timestamp: new Date().toISOString() }]);
  }, [model]);

  const incrementRequestCount = () => {
    if (typeof window !== 'undefined') {
      const count = dailyRequests + 1;
      localStorage.setItem(`${model}-requests`, count.toString());
      setDailyRequests(count);
    }
  };

  const checkDailyLimit = () => {
    // Premium model has unlimited requests
    if (model === 'hackergpt-v2' && isSubscribed) return true;
    
    // Free models have 10 requests per day
    return dailyRequests < 10;
  };

  const formatCode = (text) => {
    // Simple code formatting for markdown-like code blocks
    if (!text) return '';
    
    // Replace ```language code ``` with formatted code blocks
    const formattedText = text.replace(/```([\w]*)(\n[\s\S]*?\n)```/g, (match, language, code) => {
      return `<div class="bg-gray-900 rounded-md p-4 my-2 overflow-x-auto">
                <pre><code class="language-${language || 'plaintext'}">${code.trim()}</code></pre>
              </div>`;
    });
    
    // Replace inline `code` with formatted inline code
    return formattedText.replace(/`([^`]+)`/g, '<code class="bg-gray-900 px-1 rounded">$1</code>');
  };

  const sendMessage = async () => {
    if (inputMessage.trim() === '') return;

    // Check if this is the premium model
    if (model === 'hackergpt-v2' && !isSubscribed) {
      // Check if input is the subscription key
      if (inputMessage.trim() === '@Cl_v_Cl') {
        // Set as subscribed
        localStorage.setItem('hackergpt-v2-subscribed', 'true');
        setIsSubscribed(true);
        setSubscriptionKeyEntered(true);

        // Add the key message and response
        setMessages(prev => [...prev, 
          { role: 'user', content: '********', timestamp: new Date().toISOString() }, // Mask the key for security
          { role: 'assistant', content: 'Thank you! Your subscription key has been verified. You now have full access to HackerGPT-v2. How can I assist you today?', timestamp: new Date().toISOString() }
        ]);
        setInputMessage('');
        return;
      } else if (!subscriptionKeyEntered) {
        // First attempt to enter something other than the key
        setSubscriptionKeyEntered(true);
        setMessages(prev => [...prev, 
          { role: 'user', content: inputMessage, timestamp: new Date().toISOString() },
          { role: 'assistant', content: 'That doesn\'t appear to be a valid subscription key. Please enter a valid key to access this premium model. The key format should be: @Xx_x_xX', timestamp: new Date().toISOString() }
        ]);
        setInputMessage('');
        return;
      } else {
        // Subsequent attempts
        setMessages(prev => [...prev, 
          { role: 'user', content: inputMessage, timestamp: new Date().toISOString() },
          { role: 'assistant', content: 'You need a valid subscription key to use this model. Please contact support if you need assistance obtaining a key.', timestamp: new Date().toISOString() }
        ]);
        setInputMessage('');
        return;
      }
    }

    // Check daily limit for free models
    if (!checkDailyLimit()) {
      setMessages(prev => [...prev, 
        { role: 'user', content: inputMessage, timestamp: new Date().toISOString() },
        { role: 'assistant', content: `You have reached your daily limit of 10 requests for ${model}. Please try again tomorrow or upgrade to HackerGPT-v2 for unlimited access.`, timestamp: new Date().toISOString() }
      ]);
      setInputMessage('');
      return;
    }

    // Add user message to chat
    const userMessage = { role: 'user', content: inputMessage, timestamp: new Date().toISOString() };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setIsTyping(true);

    try {
      // Increment request count
      incrementRequestCount();

      // Use the API key from config
      const response = await fetch("https://api.greenhat.org/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${config.security.apiKey}`
        },
        body: JSON.stringify({
          model: model,
          messages: messages.map(msg => ({ role: msg.role, content: msg.content })).concat({ role: userMessage.role, content: userMessage.content }),
          max_tokens: 1000,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to connect to server');
      }

      const data = await response.json();

      // Simulate typing effect
      setIsTyping(true);
      
      // Process the response
      let responseContent = '';
      if (data.choices && data.choices[0] && data.choices[0].message) {
        responseContent = data.choices[0].message.content;
      } else if (data.response) {
        responseContent = data.response;
      } else if (data.message || data.text || data.content) {
        responseContent = data.message || data.text || data.content;
      } else {
        // Fallback response
        responseContent = 'I am working on your request. Please provide more details about what you need.';
      }

      // Add assistant response to chat after a short delay to simulate typing
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: responseContent,
          timestamp: new Date().toISOString(),
          formatted: formatCode(responseContent)
        }]);
        setIsTyping(false);
      }, Math.min(1000, responseContent.length * 10)); // Typing speed simulation
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, there was an error in the connection. Please try again.',
        timestamp: new Date().toISOString()
      }]);
      setIsTyping(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      {/* Model info bar */}
      <div className="bg-secondary py-2 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-accent font-bold mr-2">
            {model === 'hackergpt-v1' ? 'HackerGPT-V1' : 
             model === 'hackergpt-v2' ? 'HackerGPT-V2' : 
             'EvilGPT-V1'}
          </span>
          <span className="text-sm text-gray-400">
            {dailyRequests}/{dailyLimit} requests used today
          </span>
        </div>
        <button className="text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      {/* Chat messages */}
      <div className="flex-grow overflow-y-auto p-4 bg-primary">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h2 className="text-2xl font-bold mb-2">Welcome to HackerGPT</h2>
            <p className="text-gray-400 max-w-md mb-6">
              Advanced AI for cybersecurity professionals, ethical hackers, and penetration testers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
              <button 
                className="bg-secondary hover:bg-opacity-80 p-4 rounded-lg text-left"
                onClick={() => setInputMessage("Explain common web vulnerabilities")}
              >
                <p className="font-medium">Explain common web vulnerabilities</p>
              </button>
              <button 
                className="bg-secondary hover:bg-opacity-80 p-4 rounded-lg text-left"
                onClick={() => setInputMessage("Write a port scanner in Python")}
              >
                <p className="font-medium">Write a port scanner in Python</p>
              </button>
              <button 
                className="bg-secondary hover:bg-opacity-80 p-4 rounded-lg text-left"
                onClick={() => setInputMessage("How to perform a basic penetration test")}
              >
                <p className="font-medium">How to perform a basic penetration test</p>
              </button>
              <button 
                className="bg-secondary hover:bg-opacity-80 p-4 rounded-lg text-left"
                onClick={() => setInputMessage("Explain how SQL injection works")}
              >
                <p className="font-medium">Explain how SQL injection works</p>
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-3xl rounded-lg px-4 py-2 ${
                    message.role === 'user' 
                      ? 'bg-accent text-white' 
                      : 'bg-secondary text-white'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-secondary text-white rounded-lg px-4 py-2">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-75"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
      
      {/* Input area */}
      <div className="bg-secondary p-4">
        <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className="input flex-grow"
            disabled={isLoading || dailyRequests >= dailyLimit}
          />
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={isLoading || !inputMessage.trim() || dailyRequests >= dailyLimit}
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </form>
        {dailyRequests >= dailyLimit && (
          <div className="mt-2 text-center text-sm text-red-400">
            You've reached your daily limit. Upgrade for unlimited access.
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatInterface;
