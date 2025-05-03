import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const EvilGPTModel = () => {
  const router = useRouter();

  const handleTryModel = () => {
    router.push('/chat/evil-gpt');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Evil-GPT - Green Hat</title>
        <meta name="description" content="Evil-GPT - Unrestricted cybersecurity AI model for advanced offensive security research" />
      </Head>

      {/* Hero Section */}
      <section className="py-12 border-b border-gray-800 bg-gradient-to-r from-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="relative w-16 h-16 mr-4 border-2 border-purple-600 rounded-full overflow-hidden">
                <Image
                  src="/se7eneyes.jpg"
                  alt="Evil-GPT Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">Evil-GPT</h1>
                <div className="flex items-center mt-2">
                  <span className="px-3 py-1 text-xs font-bold rounded bg-purple-600/20 text-purple-400 mr-3">EXPERIMENTAL</span>
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
              Our experimental unrestricted cybersecurity AI model. Evil-GPT provides access to advanced offensive security techniques and unrestricted responses for security researchers and ethical hackers conducting authorized security assessments.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleTryModel}
                className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-md flex items-center transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Try Evil-GPT
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

      {/* Warning Section */}
      <section className="py-8 bg-red-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-black border border-red-800 rounded-lg p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-red-500 mb-2">Important Disclaimer</h3>
                <p className="text-gray-300 text-sm">
                  Evil-GPT is designed for authorized security professionals conducting legitimate security assessments. By using this model, you agree to use it only for legal and ethical purposes. Misuse of this tool for unauthorized activities is strictly prohibited and may result in legal consequences. Always obtain proper authorization before conducting any security testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">Unique Capabilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-900 transition-colors">
              <div className="bg-purple-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Unrestricted Responses</h3>
              <p className="text-gray-400">
                Access to unrestricted responses for offensive security techniques, vulnerability exploitation, and advanced attack methodologies for authorized security research.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-900 transition-colors">
              <div className="bg-purple-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced Attack Simulations</h3>
              <p className="text-gray-400">
                Detailed guidance on simulating sophisticated cyber attacks for red team exercises, penetration testing, and security control validation in controlled environments.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-900 transition-colors">
              <div className="bg-purple-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Adversary Emulation</h3>
              <p className="text-gray-400">
                Realistic adversary emulation capabilities to mimic the tactics, techniques, and procedures (TTPs) of advanced persistent threats and sophisticated threat actors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">Advanced Use Cases</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-purple-900/30 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                  </svg>
                </span>
                Advanced Threat Modeling
              </h3>
              <p className="text-gray-400 mb-4">
                Develop comprehensive threat models that consider sophisticated attack vectors, novel exploitation techniques, and emerging threats to critical systems.
              </p>
              <div className="bg-gray-900 rounded-md p-4 text-sm">
                <p className="text-gray-300 font-mono">"Create a detailed threat model for a financial institution's blockchain implementation, including novel attack vectors"</p>
              </div>
            </div>

            <div className="bg-black border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-purple-900/30 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                Zero-Day Research
              </h3>
              <p className="text-gray-400 mb-4">
                Support for security researchers conducting responsible vulnerability research and zero-day discovery in authorized environments.
              </p>
              <div className="bg-gray-900 rounded-md p-4 text-sm">
                <p className="text-gray-300 font-mono">"Analyze this custom protocol implementation for potential buffer overflow vulnerabilities and exploitation techniques"</p>
              </div>
            </div>

            <div className="bg-black border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-purple-900/30 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                Red Team Operations
              </h3>
              <p className="text-gray-400 mb-4">
                Support for sophisticated red team operations with advanced evasion techniques, custom exploitation methods, and realistic attack scenarios.
              </p>
              <div className="bg-gray-900 rounded-md p-4 text-sm">
                <p className="text-gray-300 font-mono">"Develop a custom C2 infrastructure with advanced evasion capabilities for an authorized red team engagement"</p>
              </div>
            </div>

            <div className="bg-black border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-purple-900/30 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </span>
                APT Simulation
              </h3>
              <p className="text-gray-400 mb-4">
                Simulate advanced persistent threat (APT) activities for security training, awareness, and defense validation in controlled environments.
              </p>
              <div className="bg-gray-900 rounded-md p-4 text-sm">
                <p className="text-gray-300 font-mono">"Design a realistic APT simulation scenario targeting industrial control systems for a security exercise"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">Ethical Usage Guidelines</h2>

          <div className="max-w-3xl mx-auto bg-gray-900 border border-gray-800 rounded-lg p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-900/30 p-2 rounded-md mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Authorized Testing Only</h3>
                  <p className="text-gray-400">Only use Evil-GPT for systems and environments where you have explicit permission to conduct security testing.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-900/30 p-2 rounded-md mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Responsible Disclosure</h3>
                  <p className="text-gray-400">Follow responsible disclosure practices when discovering vulnerabilities in systems or applications.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-900/30 p-2 rounded-md mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Controlled Environments</h3>
                  <p className="text-gray-400">Test exploits and attack techniques only in isolated, controlled environments designed for security testing.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-900/30 p-2 rounded-md mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Legal Compliance</h3>
                  <p className="text-gray-400">Ensure all security testing activities comply with relevant laws, regulations, and organizational policies.</p>
                </div>
              </div>
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
            <Link href="/models/hackergpt-v1" className="text-purple-500 hover:text-purple-400 flex items-center">
              Learn about HackerGPT-v1
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="/models/hackergpt-v2" className="text-purple-500 hover:text-purple-400 flex items-center">
              Learn about HackerGPT-v2
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

export default EvilGPTModel;