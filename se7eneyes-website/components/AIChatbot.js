import React from 'react';
import { useRouter } from 'next/router';
import config from '../config';

const AIChatbot = () => {
  const router = useRouter();

  // توجيه المستخدم إلى نموذج HackerGPT-v1
  const redirectToHackerGPT = () => {
    router.push('/chat/hackergpt-v1');
  };

  return (
    <>
      {/* زر الدردشة الذي يوجه إلى موقع HackerGPT */}
      <button
        onClick={redirectToHackerGPT}
        className="fixed bottom-6 right-6 bg-black border-2 border-red-600 text-white p-4 rounded-full shadow-lg hover:bg-gray-900 transition-all z-50 flex items-center justify-center group"
        aria-label="فتح HackerGPT"
      >
        <div className="absolute inset-0 bg-red-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <span className="absolute -top-10 right-0 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Use HackerGPT AI
        </span>
      </button>

      {/* أنماط CSS للتأثيرات */}
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        button:hover svg {
          animation: pulse 1.5s infinite;
        }
      `}</style>
    </>
  );
};

export default AIChatbot;
