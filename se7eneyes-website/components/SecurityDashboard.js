import React, { useState, useEffect } from 'react';

const SecurityDashboard = () => {
  // حالة البيانات الأمنية - استخدام قيم ثابتة للتوافق بين الخادم والعميل
  const [securityData, setSecurityData] = useState({
    attacksBlocked: 0,
    encryptionLevel: 'AES-256',
    securityStatus: 'Secure',
    lastScan: '',
    darknetActivity: 50,
  });

  // محاكاة تحديث البيانات الأمنية - فقط في جانب العميل
  useEffect(() => {
    // تعيين القيم الأولية بعد التحميل في جانب العميل
    if (typeof window !== 'undefined') {
      setSecurityData({
        attacksBlocked: 0,
        encryptionLevel: 'AES-256',
        securityStatus: 'Secure',
        lastScan: new Date().toISOString(),
        darknetActivity: 50,
      });

      // بدء التحديث الدوري
      const interval = setInterval(() => {
        setSecurityData(prev => ({
          ...prev,
          attacksBlocked: prev.attacksBlocked + Math.floor(Math.random() * 5),
          darknetActivity: Math.floor(Math.random() * 100),
          lastScan: new Date().toISOString()
        }));
      }, 5000);

      return () => clearInterval(interval);
    }
  }, []);

  // تنسيق التاريخ
  const formatDate = (dateString) => {
    if (!dateString) return 'Initializing...';
    try {
      const date = new Date(dateString);
      return date.toLocaleTimeString();
    } catch (e) {
      return 'Updating...';
    }
  };

  return (
    <div className="bg-gray-900 border border-red-900 rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-black to-red-900/20 px-4 py-3 border-b border-red-900">
        <h2 className="text-lg font-bold text-white flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Security Dashboard
        </h2>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* عدد الهجمات المحظورة */}
          <div className="bg-black border border-gray-800 rounded-md p-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xs text-gray-400 mb-1">Attacks Blocked</h3>
                <p className="text-xl font-bold text-white">{securityData.attacksBlocked}</p>
              </div>
              <div className="bg-red-900/30 p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              <span className="text-green-500">↑ 24%</span> from last hour
            </div>
          </div>

          {/* مستوى التشفير */}
          <div className="bg-black border border-gray-800 rounded-md p-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xs text-gray-400 mb-1">Encryption Level</h3>
                <p className="text-xl font-bold text-white">{securityData.encryptionLevel}</p>
              </div>
              <div className="bg-green-900/30 p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Military-grade security
            </div>
          </div>

          {/* حالة الأمان */}
          <div className="bg-black border border-gray-800 rounded-md p-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xs text-gray-400 mb-1">Security Status</h3>
                <p className="text-xl font-bold text-green-500">{securityData.securityStatus}</p>
              </div>
              <div className="bg-green-900/30 p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              All systems operational
            </div>
          </div>

          {/* نشاط الشبكة المظلمة */}
          <div className="bg-black border border-gray-800 rounded-md p-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xs text-gray-400 mb-1">Darknet Activity</h3>
                <p className="text-xl font-bold text-white">{securityData.darknetActivity}%</p>
              </div>
              <div className="bg-purple-900/30 p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Last updated: {formatDate(securityData.lastScan)}
            </div>
          </div>
        </div>

        {/* شريط التقدم للنشاط */}
        <div className="mt-4">
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-xs text-gray-400">Network Activity</h3>
            <span className="text-xs text-gray-400">Real-time</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-green-500 to-red-500 h-2 rounded-full"
              style={{ width: `${securityData.darknetActivity}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityDashboard;
