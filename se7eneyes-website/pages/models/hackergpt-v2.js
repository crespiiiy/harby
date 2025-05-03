import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const HackerGPTV2Model = () => {
  const router = useRouter();

  const handleTryModel = () => {
    router.push('/chat/hackergpt-v2');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>HackerGPT-v2 - Green Hat</title>
        <meta name="description" content="HackerGPT-v2 - Advanced cybersecurity AI model with premium features" />
      </Head>

      {/* Hero Section */}
      <section className="py-12 border-b border-gray-800 bg-gradient-to-r from-black to-green-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="relative w-16 h-16 mr-4 border-2 border-green-600 rounded-full overflow-hidden">
                <Image
                  src="/se7eneyes.jpg"
                  alt="HackerGPT-v2 Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">HackerGPT-v2</h1>
                <div className="flex items-center mt-2">
                  <span className="px-3 py-1 text-xs font-bold rounded bg-green-600/20 text-green-400 mr-3">PREMIUM</span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Unlimited
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg mb-8 text-gray-300">
              Our advanced cybersecurity AI model with premium features. HackerGPT-v2 provides comprehensive cybersecurity capabilities with enhanced performance, unlimited requests, and access to advanced techniques for professional penetration testers and security researchers.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleTryModel}
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md flex items-center transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Try HackerGPT-v2
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
          <h2 className="text-2xl font-bold mb-12 text-center">Premium Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-900 transition-colors">
              <div className="bg-green-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced Vulnerability Analysis</h3>
              <p className="text-gray-400">
                Comprehensive vulnerability analysis with detailed exploitation techniques, custom payloads, and advanced remediation strategies for complex security issues.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-900 transition-colors">
              <div className="bg-green-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Unlimited Access</h3>
              <p className="text-gray-400">
                No daily request limits, allowing continuous usage for extensive security assessments, penetration tests, and research projects without interruption.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-900 transition-colors">
              <div className="bg-green-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced Code Generation</h3>
              <p className="text-gray-400">
                Generate sophisticated security tools, exploit code, and custom scripts with optimized performance and advanced functionality for professional security operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">Professional Use Cases</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-green-900/30 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                Enterprise Security Assessments
              </h3>
              <p className="text-gray-400 mb-4">
                Conduct comprehensive security assessments for enterprise environments, including network infrastructure, cloud deployments, and custom applications.
              </p>
              <div className="bg-gray-900 rounded-md p-4 text-sm">
                <p className="text-gray-300 font-mono">"Perform a detailed security assessment of our AWS infrastructure with focus on S3 bucket configurations and IAM policies"</p>
              </div>
            </div>

            <div className="bg-black border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-green-900/30 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                  </svg>
                </span>
                Advanced Exploit Development
              </h3>
              <p className="text-gray-400 mb-4">
                Develop sophisticated exploits and proof-of-concept code for newly discovered vulnerabilities or custom security research projects.
              </p>
              <div className="bg-gray-900 rounded-md p-4 text-sm">
                <p className="text-gray-300 font-mono">"Help me develop a proof-of-concept exploit for the recently disclosed CVE-2023-XXXX vulnerability in Apache Struts"</p>
              </div>
            </div>

            <div className="bg-black border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-green-900/30 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                Security Automation
              </h3>
              <p className="text-gray-400 mb-4">
                Create advanced security automation workflows, custom security tools, and integration scripts for security operations centers and DevSecOps pipelines.
              </p>
              <div className="bg-gray-900 rounded-md p-4 text-sm">
                <p className="text-gray-300 font-mono">"Develop a Python script that integrates with our CI/CD pipeline to automatically scan Docker images for vulnerabilities before deployment"</p>
              </div>
            </div>

            <div className="bg-black border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-green-900/30 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </span>
                Red Team Operations
              </h3>
              <p className="text-gray-400 mb-4">
                Support red team operations with advanced tactics, techniques, and procedures (TTPs) for realistic adversary emulation and security control validation.
              </p>
              <div className="bg-gray-900 rounded-md p-4 text-sm">
                <p className="text-gray-300 font-mono">"Suggest advanced persistence techniques that could evade EDR solutions in a Windows enterprise environment"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">Premium Subscription</h2>

          <div className="max-w-md mx-auto bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
            <div className="bg-green-900/20 p-6 text-center">
              <h3 className="text-2xl font-bold">HackerGPT-v2</h3>
              <div className="mt-4 flex justify-center items-baseline">
                <span className="text-5xl font-extrabold">$19.99</span>
                <span className="text-gray-400 ml-1">/month</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Unlimited requests</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Advanced vulnerability analysis</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Professional-grade code generation</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Advanced security techniques</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Priority support</span>
                </li>
              </ul>
              <button
                onClick={handleTryModel}
                className="mt-8 w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-md transition-colors"
              >
                Subscribe Now
              </button>
            </div>
          </div>
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
            <Link href="/models/hackergpt-v1" className="text-green-500 hover:text-green-400 flex items-center">
              Learn about HackerGPT-v1
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="/models/evil-gpt" className="text-green-500 hover:text-green-400 flex items-center">
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

export default HackerGPTV2Model;