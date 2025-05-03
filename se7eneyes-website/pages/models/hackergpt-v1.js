import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const HackerGPTV1Model = () => {
  const router = useRouter();

  const handleTryModel = () => {
    router.push('/chat/hackergpt-v1');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>HackerGPT-v1 - Green Hat</title>
        <meta name="description" content="HackerGPT-v1 - Basic cybersecurity AI model for beginners and professionals" />
      </Head>

      {/* Hero Section */}
      <section className="py-12 border-b border-gray-800 bg-gradient-to-r from-black to-red-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="relative w-16 h-16 mr-4 border-2 border-red-600 rounded-full overflow-hidden">
                <Image
                  src="/se7eneyes.jpg"
                  alt="HackerGPT-v1 Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">HackerGPT-v1</h1>
                <div className="flex items-center mt-2">
                  <span className="px-3 py-1 text-xs font-bold rounded bg-red-600/20 text-red-400 mr-3">FREE</span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    10 req/day
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg mb-8 text-gray-300">
              The basic model for cybersecurity tasks, suitable for beginners and professionals. HackerGPT-v1 provides essential cybersecurity capabilities with a focus on ethical hacking and penetration testing assistance.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleTryModel}
                className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-md flex items-center transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Try HackerGPT-v1
              </button>
              <Link href="/api-reference" className="border border-gray-700 hover:border-gray-600 text-white px-6 py-3 rounded-md flex items-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                API Reference
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">Key Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-red-900 transition-colors">
              <div className="bg-red-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Vulnerability Analysis</h3>
              <p className="text-gray-400">
                Identify and analyze common security vulnerabilities in web applications, networks, and systems with detailed explanations and remediation advice.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-red-900 transition-colors">
              <div className="bg-red-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Code Generation</h3>
              <p className="text-gray-400">
                Generate security-focused code snippets and scripts for penetration testing, vulnerability scanning, and security automation tasks.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-red-900 transition-colors">
              <div className="bg-red-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Educational Resources</h3>
              <p className="text-gray-400">
                Access comprehensive explanations of cybersecurity concepts, attack methodologies, and defense strategies for learning and skill development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">Use Cases</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-red-900/30 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Security Assessments
              </h3>
              <p className="text-gray-400 mb-4">
                Conduct security assessments of web applications, networks, and systems to identify vulnerabilities and potential attack vectors.
              </p>
              <div className="bg-gray-900 rounded-md p-4 text-sm">
                <p className="text-gray-300 font-mono">"Analyze this web application for common security vulnerabilities"</p>
              </div>
            </div>

            <div className="bg-black border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-red-900/30 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                Tool Development
              </h3>
              <p className="text-gray-400 mb-4">
                Create custom security tools and scripts for specific penetration testing and security assessment tasks.
              </p>
              <div className="bg-gray-900 rounded-md p-4 text-sm">
                <p className="text-gray-300 font-mono">"Write a Python script to scan a network for open ports"</p>
              </div>
            </div>

            <div className="bg-black border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-red-900/30 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                </span>
                Learning & Education
              </h3>
              <p className="text-gray-400 mb-4">
                Learn about cybersecurity concepts, attack techniques, and defense strategies through interactive conversations.
              </p>
              <div className="bg-gray-900 rounded-md p-4 text-sm">
                <p className="text-gray-300 font-mono">"Explain how SQL injection attacks work and how to prevent them"</p>
              </div>
            </div>

            <div className="bg-black border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-red-900/30 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </span>
                Incident Response
              </h3>
              <p className="text-gray-400 mb-4">
                Get guidance on responding to security incidents, analyzing malware, and implementing security controls.
              </p>
              <div className="bg-gray-900 rounded-md p-4 text-sm">
                <p className="text-gray-300 font-mono">"How should I respond to a potential data breach in my organization?"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to start using HackerGPT-v1?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Begin your cybersecurity journey with HackerGPT-v1. Free access with 10 requests per day, no credit card required.
          </p>
          <button
            onClick={handleTryModel}
            className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-md inline-flex items-center transition-colors text-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Try HackerGPT-v1 Now
          </button>
        </div>
      </section>

      {/* Compare Models Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">Compare Models</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="px-6 py-3 text-left">Feature</th>
                  <th className="px-6 py-3 text-center">HackerGPT-v1</th>
                  <th className="px-6 py-3 text-center">HackerGPT-v2</th>
                  <th className="px-6 py-3 text-center">Evil-GPT</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="px-6 py-4">Daily Requests</td>
                  <td className="px-6 py-4 text-center">10</td>
                  <td className="px-6 py-4 text-center">Unlimited</td>
                  <td className="px-6 py-4 text-center">10</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-6 py-4">Vulnerability Analysis</td>
                  <td className="px-6 py-4 text-center">✓</td>
                  <td className="px-6 py-4 text-center">✓</td>
                  <td className="px-6 py-4 text-center">✓</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-6 py-4">Code Generation</td>
                  <td className="px-6 py-4 text-center">✓</td>
                  <td className="px-6 py-4 text-center">✓</td>
                  <td className="px-6 py-4 text-center">✓</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-6 py-4">Advanced Techniques</td>
                  <td className="px-6 py-4 text-center">Limited</td>
                  <td className="px-6 py-4 text-center">✓</td>
                  <td className="px-6 py-4 text-center">✓</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-6 py-4">Unrestricted Responses</td>
                  <td className="px-6 py-4 text-center">✗</td>
                  <td className="px-6 py-4 text-center">Limited</td>
                  <td className="px-6 py-4 text-center">✓</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-6 py-4">Pricing</td>
                  <td className="px-6 py-4 text-center">Free</td>
                  <td className="px-6 py-4 text-center">Subscription</td>
                  <td className="px-6 py-4 text-center">Free</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Link href="/models/hackergpt-v2" className="text-red-500 hover:text-red-400 flex items-center">
              Learn about HackerGPT-v2
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="/models/evil-gpt" className="text-red-500 hover:text-red-400 flex items-center">
              Learn about Evil-GPT
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HackerGPTV1Model;