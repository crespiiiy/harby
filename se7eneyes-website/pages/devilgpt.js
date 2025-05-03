import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const DevilGPT = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Welcome to DevilGPT - the advanced tool generation engine. How can I assist you today?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // تمرير تلقائي إلى آخر رسالة
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // إرسال رسالة إلى API
  const sendMessage = async () => {
    if (inputMessage.trim() === '') return;

    // إضافة رسالة المستخدم إلى المحادثة
    const userMessage = { role: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // استخدام مفتاح API المقدم
      const response = await fetch("https://api.greenhat.org/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer sk-7e-v1-622aafb37f01db6e5a937fb97a32047c"
        },
        body: JSON.stringify({
          model: "devilgpt",
          messages: [...messages, userMessage],
          max_tokens: 1000,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to connect to server');
      }

      const data = await response.json();

      // التعامل مع الاستجابة
      if (data.choices && data.choices[0] && data.choices[0].message) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.choices[0].message.content }]);
      } else if (data.response) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
      } else if (data.message || data.text || data.content) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.message || data.text || data.content }]);
      } else {
        // في حالة عدم وجود استجابة مناسبة
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: 'I am working on your request. Please provide more details about the tool you want to create.'
        }]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, there was an error in the connection. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
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
        <title>DevilGPT - Green Hat</title>
        <meta name="description" content="DevilGPT - Advanced Tool Generation Engine for Cybersecurity" />
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
            <Link href="/devilgpt" className="text-white font-bold">
              DevilGPT
            </Link>
          </div>
        </div>
      </nav>

      {/* رأس الصفحة */}
      <header className="py-6 bg-gradient-to-r from-black to-red-900/20 border-b border-red-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-red-600">DevilGPT</h1>
            <div className="flex items-center text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              3 req/day
            </div>
          </div>
        </div>
      </header>

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
                {index === messages.length - 1 && message.role === 'assistant' && isLoading ? (
                  <TypewriterEffect text={message.content} />
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
          <div className="flex">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message here..."
              className="flex-1 bg-gray-900 text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
              rows="3"
              dir="rtl"
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || inputMessage.trim() === ''}
              className={`ml-3 bg-red-700 hover:bg-red-800 text-white p-3 rounded-lg transition-colors ${
                isLoading || inputMessage.trim() === '' ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Send"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <div className="text-xs text-gray-500 mt-2 text-center">
            DevilGPT - Advanced Tool Generation Engine | For ethical use only
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

export default DevilGPT;
