import React, { useState, useEffect } from 'react';

const StealthMode = () => {
  // استخدام قيمة افتراضية ثابتة للتوافق بين الخادم والعميل
  const [isStealthMode, setIsStealthMode] = useState(false);

  // تحقق من وضع التخفي المحفوظ - فقط في جانب العميل
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('stealth-mode');
      if (savedMode === 'true') {
        setIsStealthMode(true);
        document.body.classList.add('stealth-mode');
      }
    }
  }, []);

  // تبديل وضع التخفي
  const toggleStealthMode = () => {
    const newMode = !isStealthMode;
    setIsStealthMode(newMode);

    if (typeof window !== 'undefined') {
      localStorage.setItem('stealth-mode', newMode.toString());

      if (newMode) {
        document.body.classList.add('stealth-mode');
      } else {
        document.body.classList.remove('stealth-mode');
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleStealthMode}
        className={`flex items-center space-x-2 rounded-md px-3 py-2 transition-colors ${
          isStealthMode
            ? 'bg-blue-600 hover:bg-blue-700 text-white'
            : 'bg-gray-900 hover:bg-gray-800 text-white border border-gray-700'
        }`}
        title={isStealthMode ? 'Disable Stealth Mode' : 'Enable Stealth Mode'}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          {isStealthMode ? (
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          ) : (
            <path d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" />
          )}
          <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
        </svg>
        <span className="text-xs">{isStealthMode ? 'Exit Stealth' : 'Stealth Mode'}</span>
      </button>

      {/* أنماط CSS لوضع التخفي */}
      <style jsx global>{`
        body.stealth-mode {
          background-color: white !important;
          color: black !important;
        }

        body.stealth-mode nav,
        body.stealth-mode footer,
        body.stealth-mode .bg-black,
        body.stealth-mode .bg-gray-900 {
          background-color: white !important;
          border-color: #e5e7eb !important;
          color: black !important;
        }

        body.stealth-mode h1,
        body.stealth-mode h2,
        body.stealth-mode h3,
        body.stealth-mode p,
        body.stealth-mode a {
          color: black !important;
        }

        body.stealth-mode .text-white,
        body.stealth-mode .text-gray-300,
        body.stealth-mode .text-gray-400 {
          color: #374151 !important;
        }

        body.stealth-mode .border-red-900,
        body.stealth-mode .border-gray-800 {
          border-color: #e5e7eb !important;
        }

        body.stealth-mode .bg-red-900\\/30,
        body.stealth-mode .bg-green-900\\/30,
        body.stealth-mode .bg-purple-900\\/30 {
          background-color: #f3f4f6 !important;
        }

        body.stealth-mode .text-red-600,
        body.stealth-mode .text-red-500 {
          color: #1f2937 !important;
        }

        body.stealth-mode .terminal-bg {
          background-image: none !important;
          background-color: #f9fafb !important;
        }

        body.stealth-mode textarea,
        body.stealth-mode input {
          background-color: white !important;
          border-color: #d1d5db !important;
          color: black !important;
        }

        body.stealth-mode button {
          background-color: #f3f4f6 !important;
          color: black !important;
          border-color: #d1d5db !important;
        }

        body.stealth-mode .bg-gradient-to-r {
          background-image: none !important;
          background-color: #f3f4f6 !important;
        }
      `}</style>
    </div>
  );
};

export default StealthMode;
