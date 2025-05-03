import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const Marketing = () => {
  // Dummy counters for users and queries
  const userCount = 12500;
  const queryCount = 1250000;

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Green Hat - Marketing & Branding</title>
        <meta name="description" content="Green Hat cybersecurity solutions - Marketing and branding information" />
      </Head>

      {/* Hero Section */}
      <section className="py-16 border-b border-gray-800 bg-gradient-to-r from-black to-green-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative w-32 h-32 mx-auto mb-8 animate-pulse">
              <Image
                src="/se7eneyes.jpg"
                alt="Green Hat Logo"
                fill
                className="object-cover rounded-full border-2 border-green-500"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-tech">Green Hat</h1>
            <p className="text-xl text-gray-300 mb-10">
              Pioneering Cybersecurity Solutions for a Secure Digital Future
            </p>
          </div>
        </div>
      </section>

      {/* Brand Identity Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center font-tech">Our Brand Identity</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-900 transition-colors">
              <div className="bg-green-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-tech">Animated Logo</h3>
              <p className="text-gray-400">
                Design an animated version of the Green Hat logo for the homepage, reflecting the dynamic and evolving nature of our security solutions and capturing visitors' attention as soon as they arrive at the site.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-900 transition-colors">
              <div className="bg-green-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-tech">Unified Colors</h3>
              <p className="text-gray-400">
                Use a unified color system throughout the entire website, focusing on shades of green and black that reflect Green Hat's identity and create a cohesive and distinctive visual experience for users.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-900 transition-colors">
              <div className="bg-green-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-tech">Distinctive Font</h3>
              <p className="text-gray-400">
                Use a distinctive font for headings that reflects the brand identity, inspired by the world of technology and cybersecurity, adding a unique character to the site and enhancing brand recognition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center font-tech">Marketing Strategies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black border border-gray-800 rounded-lg p-6 hover:border-green-900 transition-colors">
              <div className="bg-green-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-tech">Certifications</h3>
              <p className="text-gray-400 mb-4">
                Display certifications and partnerships with prestigious cybersecurity organizations, enhancing Green Hat's credibility and building trust with potential clients.
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="bg-gray-800 p-2 rounded-md text-xs font-bold">ISO 27001</div>
                <div className="bg-gray-800 p-2 rounded-md text-xs font-bold">NIST</div>
                <div className="bg-gray-800 p-2 rounded-md text-xs font-bold">OWASP Partner</div>
                <div className="bg-gray-800 p-2 rounded-md text-xs font-bold">SOC 2</div>
              </div>
            </div>

            <div className="bg-black border border-gray-800 rounded-lg p-6 hover:border-green-900 transition-colors">
              <div className="bg-green-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-tech">User Counter</h3>
              <p className="text-gray-400 mb-4">
                Add a counter displaying the number of users or processed queries, providing visual evidence of the scope and effectiveness of our services.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-md text-center">
                  <div className="text-3xl font-bold text-green-500">{userCount.toLocaleString()}</div>
                  <div className="text-sm text-gray-400 mt-2">Active Users</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-md text-center">
                  <div className="text-3xl font-bold text-green-500">{queryCount.toLocaleString()}</div>
                  <div className="text-sm text-gray-400 mt-2">Processed Queries</div>
                </div>
              </div>
            </div>

            <div className="bg-black border border-gray-800 rounded-lg p-6 hover:border-green-900 transition-colors">
              <div className="bg-green-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-tech">Special Offers</h3>
              <p className="text-gray-400 mb-4">
                Add a section for special offers and discounts for new users, encouraging them to try our services and increasing conversion rates.
              </p>
              <div className="bg-gradient-to-r from-green-900/50 to-black p-4 rounded-md border border-green-800">
                <div className="text-lg font-bold text-white mb-2">Special Offer for New Users</div>
                <div className="text-sm text-gray-300 mb-3">Get 30% off on HackerGPT-v2 subscription for 3 months</div>
                <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md transition-colors w-full">
                  Get the Offer Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-tech">Join the Green Hat Community Today</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Benefit from our advanced cybersecurity solutions and be part of a safer future for the digital world.
          </p>
          <Link href="/chat" className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-md inline-flex items-center transition-colors text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Start Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Marketing;