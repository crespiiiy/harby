import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import config from '../../config';
import SecurityDashboard from '../../components/SecurityDashboard';

const ChatPage = () => {
  const router = useRouter();
  const { modelId } = router.query;
  const [modelName, setModelName] = useState('');
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [attemptsLeft, setAttemptsLeft] = useState(3); // Default 3 attempts for paid model - used in UI
  const [isSubscribed, setIsSubscribed] = useState(false); // Track if user has entered subscription key
  const [subscriptionKeyEntered, setSubscriptionKeyEntered] = useState(false); // Track if user has attempted to enter key
  const messagesEndRef = useRef(null);

  // تمرير تلقائي إلى آخر رسالة
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // تحديد اسم النموذج عند تحميل الصفحة
  useEffect(() => {
    if (modelId) {
      let name = '';
      switch (modelId) {
        case 'hackergpt-v1':
          name = 'HackerGPT-v1';
          break;
        case 'hackergpt-v2':
          name = 'HackerGPT-v2';
          break;
        case 'evil-gpt':
          name = 'Evil-GPT';
          break;
        default:
          name = modelId;
      }
      setModelName(name);

      // إضافة رسالة ترحيبية (default case)
      if (messages.length === 0) {
        // Check if this is the paid model
        if (modelId === 'hackergpt-v2') {
          // Check if user is already subscribed (from localStorage)
          if (typeof window !== 'undefined') {
            const storedSubscription = localStorage.getItem('hackergpt-v2-subscribed');
            if (storedSubscription === 'true') {
              setIsSubscribed(true);
              setMessages([{
                role: 'assistant',
                content: `Welcome back to ${name}. How can I assist you today in the field of cybersecurity?`
              }]);
            } else {
              setMessages([{
                role: 'assistant',
                content: `Welcome to ${name}. This is a premium model that requires a subscription key. Please enter your subscription key to continue.`
              }]);
            }
          } else {
            setMessages([{
              role: 'assistant',
              content: `Welcome to ${name}. This is a premium model that requires a subscription key. Please enter your subscription key to continue.`
            }]);
          }
        } else {
          // For free models
          setMessages([{
            role: 'assistant',
            content: `Welcome to ${name}. How can I assist you today in the field of cybersecurity?`
          }]);
        }
      }
    }
  }, [modelId, messages.length]);

  // التعامل مع حالة DevilGPT (يتم تنفيذه فقط في جانب العميل)
  useEffect(() => {
    // تأكد من أننا في بيئة المتصفح
    if (typeof window !== 'undefined' && modelId === 'hackergpt-v2') {
      // Check if we're coming from DevilGPT link
      const isFromDevilGPT = window.location.search.includes('from=devilgpt') ||
                             (document.referrer && document.referrer.includes('devilgpt'));

      if (isFromDevilGPT) {
        // Load attempts from localStorage or use default
        const storedAttempts = localStorage.getItem('devilgpt-attempts');
        const remainingAttempts = storedAttempts ? parseInt(storedAttempts) : config.limits.devilgpt;
        setAttemptsLeft(remainingAttempts);

        if (remainingAttempts <= 0) {
          setMessages([{
            role: 'assistant',
            content: `You have used all your free attempts for DevilGPT. Please subscribe to continue using this premium feature.`
          }]);
        } else {
          // Save the updated attempts count
          localStorage.setItem('devilgpt-attempts', (remainingAttempts - 1).toString());
          setAttemptsLeft(remainingAttempts - 1);

          setMessages([{
            role: 'assistant',
            content: `Welcome to DevilGPT (${modelName}). You have ${remainingAttempts - 1} attempts left. How can I assist you today?`
          }]);
        }
      }
    }
  }, [modelId, modelName]);

  // إرسال رسالة إلى API
  const sendMessage = async () => {
    if (inputMessage.trim() === '') return;

    // Check if user is logged in
    if (typeof window !== 'undefined' && !localStorage.getItem('user')) {
      router.push('/login?redirect=' + encodeURIComponent(router.asPath));
      return;
    }

    // Check if this is the paid model
    if (modelId === 'hackergpt-v2' && typeof window !== 'undefined') {
      // Check if user is already subscribed
      if (!isSubscribed) {
        // Check if the input is the subscription key
        if (inputMessage.trim() === '@Cl_v_Cl') {
          // Set as subscribed
          localStorage.setItem('hackergpt-v2-subscribed', 'true');
          setIsSubscribed(true);
          setSubscriptionKeyEntered(true);

          // Add the key message and response
          setMessages(prev => [...prev, {
            role: 'user',
            content: '********', // Mask the key for security
            timestamp: new Date().toISOString()
          }, {
            role: 'assistant',
            content: 'Thank you! Your subscription key has been verified. You now have full access to HackerGPT-v2. How can I assist you today?',
            timestamp: new Date().toISOString()
          }]);
          setInputMessage('');
          return;
        } else if (!subscriptionKeyEntered) {
          // First attempt to enter something other than the key
          setSubscriptionKeyEntered(true);
          setMessages(prev => [...prev, {
            role: 'user',
            content: inputMessage,
            timestamp: new Date().toISOString()
          }, {
            role: 'assistant',
            content: 'That doesn\'t appear to be a valid subscription key. Please enter a valid key to access this premium model. The key format should be: @Xx_x_xX',
            timestamp: new Date().toISOString()
          }]);
          setInputMessage('');
          return;
        } else {
          // Subsequent attempts
          setMessages(prev => [...prev, {
            role: 'user',
            content: inputMessage,
            timestamp: new Date().toISOString()
          }, {
            role: 'assistant',
            content: 'You need a valid subscription key to use this model. Please contact support if you need assistance obtaining a key.',
            timestamp: new Date().toISOString()
          }]);
          setInputMessage('');
          return;
        }
      }

      // Check if this is from DevilGPT with limited attempts
      const isFromDevilGPT = window.location.search.includes('from=devilgpt') ||
                             (document.referrer && document.referrer.includes('devilgpt'));

      if (isFromDevilGPT) {
        const storedAttempts = localStorage.getItem('devilgpt-attempts');
        const remainingAttempts = storedAttempts ? parseInt(storedAttempts) : 0;

        if (remainingAttempts <= 0) {
          setMessages(prev => [...prev, {
            role: 'user',
            content: inputMessage,
            timestamp: new Date().toISOString()
          }, {
            role: 'assistant',
            content: 'You have used all your free attempts for DevilGPT. Please subscribe to continue using this premium feature.',
            timestamp: new Date().toISOString()
          }]);
          setInputMessage('');
          return;
        }
      }
    }

    // Check daily limit for free models
    if (modelId !== 'hackergpt-v2' || !isSubscribed) {
      const today = new Date().toDateString();
      const storedDate = localStorage.getItem('lastRequestDate');
      const storedCount = localStorage.getItem(`${modelId}-requests`) || '0';
      let dailyRequests = parseInt(storedCount);
      
      if (storedDate !== today) {
        // Reset count for new day
        localStorage.setItem('lastRequestDate', today);
        localStorage.setItem(`${modelId}-requests`, '0');
        dailyRequests = 0;
      }
      
      if (dailyRequests >= 10) {
        setMessages(prev => [...prev, {
          role: 'user',
          content: inputMessage,
          timestamp: new Date().toISOString()
        }, {
          role: 'assistant',
          content: `You have reached your daily limit of 10 requests for ${modelId}. Please try again tomorrow or upgrade to HackerGPT-v2 for unlimited access.`,
          timestamp: new Date().toISOString()
        }]);
        setInputMessage('');
        return;
      }
      
      // Increment request count
      localStorage.setItem(`${modelId}-requests`, (dailyRequests + 1).toString());
    }

    // Add user message to chat
    const userMessage = { 
      role: 'user', 
      content: inputMessage,
      timestamp: new Date().toISOString() 
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setIsTyping(true);

    try {
      // Use the API key from config
      const response = await fetch("https://api.greenhat.org/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer sk-7e-v1-622aafb37f01db6e5a937fb97a32047c"
        },
        body: JSON.stringify({
          model: modelId,
          messages: messages.map(msg => ({ role: msg.role, content: msg.content })).concat({ role: userMessage.role, content: userMessage.content }),
          max_tokens: 1000,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to connect to server');
      }

      const data = await response.json();

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

      // Format code blocks in the response
      const formattedContent = formatCode(responseContent);

      // Add assistant response to chat after a short delay to simulate typing
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: responseContent,
          formatted: formattedContent,
          timestamp: new Date().toISOString()
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

  // Format code blocks in messages
  const formatCode = (text) => {
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

  // معالجة ضغط Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // تأثير الكتابة للرسائل
  const TypewriterEffect = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + text[currentIndex]);
          setCurrentIndex(currentIndex + 1);
        }, 15); // سرعة الكتابة

        return () => clearTimeout(timeout);
      }
    }, [currentIndex, text]);

    return <span>{displayedText}<span className="cursor">|</span></span>;
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Head>
        <title>{modelName} - Green Hat</title>
        <meta name="description" content={`${modelName} - Advanced AI Tool for Cybersecurity`} />
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
            <Link href="/hackergpt" className="text-gray-300 hover:text-white">
              HackerGPT
            </Link>
            <Link href="/devilgpt" className="text-gray-300 hover:text-white">
              DevilGPT
            </Link>
          </div>
        </div>
      </nav>

      {/* رأس الصفحة */}
      <header className="py-6 bg-gradient-to-r from-black to-red-900/20 border-b border-red-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-red-600">{modelName}</h1>
            <div className="flex items-center text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              {modelId === 'hackergpt-v2' ? 'Unlimited' : '10 req/day'}
            </div>
          </div>
        </div>
      </header>

      {/* Security Dashboard */}
      <div className="p-4 bg-black border-b border-red-900">
        <div className="container mx-auto max-w-4xl">
          <SecurityDashboard />
        </div>
      </div>

      {/* محتوى المحادثة */}
      <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-black to-gray-900 terminal-bg">
        <div className="container mx-auto max-w-4xl">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-6 ${message.role === 'user' ? 'text-left' : 'text-right'}`}
            >
              <div
                className={`inline-block p-4 rounded-lg max-w-[80%] ${
                  message.role === 'user'
                    ? 'bg-gray-800 text-white'
                    : 'bg-red-900/50 text-white border border-red-700'
                }`}
              >
                {message.timestamp && (
                  <div className="text-xs text-gray-500 mb-1 text-left">
                    {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                )}
                {index === messages.length - 1 && message.role === 'assistant' && isLoading ? (
                  <TypewriterEffect text={message.content} />
                ) : message.formatted ? (
                  <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: message.formatted }}></div>
                ) : (
                  <div className="whitespace-pre-wrap">{message.content}</div>
                )}
              </div>
            </div>
          ))}
          {isLoading && messages[messages.length - 1].role === 'user' && (
            <div className="text-right mb-6">
              <div className="inline-block p-4 rounded-lg bg-red-900/50 text-white border border-red-700">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* مدخل الرسالة */}
      <div className="p-4 border-t border-red-900 bg-black">
        <div className="container mx-auto max-w-4xl">
          {modelId === 'hackergpt-v2' && !isSubscribed ? (
            <div className="mb-4 bg-red-900/30 border border-red-800 rounded-lg p-4 text-center">
              <p className="text-white mb-2">
                This is a premium model that requires a subscription key.
              </p>
              <p className="text-gray-300 text-sm">
                Please enter your subscription key in the chat to continue.
              </p>
            </div>
          ) : null}

          <div className="flex">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={modelId === 'hackergpt-v2' && !isSubscribed ? "Enter your subscription key..." : "Type your message here..."}
              className="flex-1 bg-gray-900 text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
              rows="3"
              dir="ltr"
              disabled={isTyping}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || isTyping || inputMessage.trim() === ''}
              className={`ml-3 bg-red-700 hover:bg-red-800 text-white p-3 rounded-lg transition-colors ${
                isLoading || isTyping || inputMessage.trim() === '' ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Send"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <div className="text-xs text-gray-500 mt-2 text-center">
            {modelName} - For ethical use only | Green Hat
          </div>
        </div>
      </div>

      {/* أنماط CSS للتأثيرات */}
      <style jsx>{`
        .terminal-bg {
          background-image:
            linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
            repeating-linear-gradient(
              0deg,
              rgba(255, 0, 0, 0.11) 0px,
              rgba(255, 0, 0, 0.11) 1px,
              transparent 1px,
              transparent 2px
            );
          background-size: 100% 100%, 100% 4px;
        }

        .cursor {
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default ChatPage;
