import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SecurityFooter = () => {
  return (
    <footer className="bg-black border-t border-red-900 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Security Badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 md:mb-0">
            <div className="flex items-center bg-gray-900 border border-gray-800 rounded-md px-3 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-300">End-to-End Encrypted</span>
            </div>

            <div className="flex items-center bg-gray-900 border border-gray-800 rounded-md px-3 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
              </svg>
              <span className="text-sm text-gray-300">Zero Logs Policy</span>
            </div>

            <div className="flex items-center bg-gray-900 border border-gray-800 rounded-md px-3 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-300">Anonymous Access</span>
            </div>
          </div>

          {/* Tor Badge */}
          <div className="flex items-center">
            <a href="http://dreadytofatroptsdj6io7l3xptbet6onoyno2yv7jicoxknyazubrad.onion/" target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-900 border border-gray-800 rounded-md px-3 py-2 hover:bg-gray-800 transition-colors">
              <div className="relative w-5 h-5 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>
                  <path d="M12 8v8M8 12h8"/>
                </svg>
              </div>
              <span className="text-sm text-gray-300">Available on Tor Network</span>
            </a>
          </div>
        </div>

        {/* Encryption Certificates */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <h3 className="text-sm font-semibold text-gray-400 mb-3">Encryption Certificates</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-900 border border-gray-800 rounded-md p-3">
              <h4 className="text-xs font-semibold text-green-500 mb-1">AES-256 Encryption</h4>
              <p className="text-xs text-gray-400">All communications are encrypted with military-grade AES-256 encryption.</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-md p-3">
              <h4 className="text-xs font-semibold text-green-500 mb-1">RSA-4096 Key Exchange</h4>
              <p className="text-xs text-gray-400">Secure key exchange using RSA-4096 ensures perfect forward secrecy.</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-md p-3">
              <h4 className="text-xs font-semibold text-green-500 mb-1">SHA-256 Verification</h4>
              <p className="text-xs text-gray-400">Message integrity verified using SHA-256 cryptographic hash algorithm.</p>
            </div>
          </div>
        </div>

        {/* Dark Web Access */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <div className="flex items-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500 w-4 h-4 mr-2">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>
              <path d="M12 8v8M8 12h8"/>
            </svg>
            <h3 className="text-sm font-semibold text-gray-400">Dark Web Access</h3>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-md p-3 flex justify-between items-center">
            <code className="text-xs text-purple-500">http://dreadytofatroptsdj6io7l3xptbet6onoyno2yv7jicoxknyazubrad.onion/</code>
            <button 
              onClick={() => {
                navigator.clipboard.writeText('http://dreadytofatroptsdj6io7l3xptbet6onoyno2yv7jicoxknyazubrad.onion/');
                window.showToast('Onion address copied to clipboard', 'success');
              }}
              className="text-xs bg-gray-800 hover:bg-gray-700 text-white px-2 py-1 rounded transition-colors"
            >
              Copy
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <h3 className="text-sm font-semibold text-gray-400 mb-3">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900 border border-gray-800 rounded-md p-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-xs text-gray-400">Email: darkmod@onionmail.org</span>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-md p-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm-2.5 13.5l7.5-3.5-7.5-3.5v2.5l4.5 1-4.5 1v2.5z"/>
              </svg>
              <span className="text-xs text-gray-400">Telegram: @Cl_v_Cl</span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Green Hat. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default SecurityFooter;
