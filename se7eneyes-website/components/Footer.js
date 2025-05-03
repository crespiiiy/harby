import React from 'react';
import Link from 'next/link';
import config from '../config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 mt-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400 mb-4">
            © {currentYear} Green Hat. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <Link href={`${config.externalLinks.hackerGPT}/privacy-policy`} className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <span className="text-gray-700">|</span>
            <Link href={`${config.externalLinks.hackerGPT}/terms-and-conditions`} className="text-gray-400 hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
