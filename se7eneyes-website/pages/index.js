import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import ModelCard from '../components/ModelCard';
import AIChatbot from '../components/AIChatbot';

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Green Hat - Cybersecurity AI Models</title>
        <meta name="description" content="Access specialized AI models for cybersecurity, penetration testing, and ethical hacking." />
      </Head>

      {/* Hero Section */}
      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Specialized AI Models for Cybersecurity</h1>
            <p className="text-xl text-gray-300 mb-10">
              Access powerful AI assistants designed specifically for cybersecurity professionals, penetration testers, and ethical hackers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/chat" className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-md flex items-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Try Our Models
              </Link>
              <Link href="/api-reference" className="border border-gray-700 hover:border-gray-600 text-white px-8 py-3 rounded-md flex items-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                API Reference
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Specialized AI Models</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ModelCard 
              title="HackerGPT-v1" 
              description="The basic model for cybersecurity tasks, suitable for beginners and professionals." 
              imageUrl="/se7eneyes.jpg"
              chatLink="/chat/hackergpt-v1"
              modelLink="/models/hackergpt-v1"
              badge="FREE"
              badgeColor="bg-red-600/20 text-red-400"
              buttonColor="bg-red-700 hover:bg-red-800"
            />
            
            <ModelCard 
              title="HackerGPT-v2" 
              description="Advanced model with enhanced capabilities for professional penetration testers and security researchers." 
              imageUrl="/se7eneyes.jpg"
              chatLink="/chat/hackergpt-v2"
              modelLink="/models/hackergpt-v2"
              badge="PREMIUM"
              badgeColor="bg-green-600/20 text-green-400"
              buttonColor="bg-green-700 hover:bg-green-800"
            />
            
            <ModelCard 
              title="Evil-GPT" 
              description="Experimental model with unrestricted responses for advanced offensive security research." 
              imageUrl="/se7eneyes.jpg"
              chatLink="/chat/evil-gpt"
              modelLink="/models/evil-gpt"
              badge="EXPERIMENTAL"
              badgeColor="bg-purple-600/20 text-purple-400"
              buttonColor="bg-purple-700 hover:bg-purple-800"
            />
          </div>
        </div>
      </section>

      {/* Verified Partner Store Section */}
      <section className="py-16 border-t border-b border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Verified Partner Store</h2>
          
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-xl">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0 bg-gray-800 p-4 rounded-lg">
                  <div className="w-24 h-24 relative flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 text-accent">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                    </svg>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <div className="bg-green-900/30 text-green-400 text-xs px-3 py-1 rounded-full flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Verified Partner
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Green Hat Platform</h3>
                  <p className="text-gray-300 mb-4">Official partner store with secure encryption and privacy features. Access specialized cybersecurity tools and resources.</p>
                  
                  <div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
                    <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">End-to-End Encryption</span>
                    <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">Zero Logs Policy</span>
                    <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">Secure Transactions</span>
                  </div>
                  
                  <a 
                    href="https://greenhats.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-md transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                    Visit Official Store
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-950 p-4 flex items-center justify-between">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-400">All transactions are secure and protected by our encryption standards</span>
              </div>
              <div className="text-sm text-gray-500">Official Partner</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="relative w-full h-96">
              <Image
                src="/se7eneyes.jpg"
                alt="Green Hat"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-8">About Us</h2>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">What is Green Hat?</h3>
              <ul className="space-y-4">
                <li className="list-item">
                  <strong>A visionary organization rooted in Egyptian innovation.</strong>
                  <p className="text-gray-300 mt-1">Unites elite minds from the Arab world and beyond.</p>
                </li>
                <li className="list-item">
                  <strong>Mission to redefine cybersecurity.</strong>
                  <p className="text-gray-300 mt-1">Through cutting-edge solutions and ethical hacking practices.</p>
                </li>
                <li className="list-item">
                  <strong>Global hacktivist group.</strong>
                  <p className="text-gray-300 mt-1">Leverages advanced technology to combat digital threats.</p>
                </li>
                <li className="list-item">
                  <strong>Expert team.</strong>
                  <p className="text-gray-300 mt-1">Specialists in AI, cryptography, and penetration testing.</p>
                </li>
                <li className="list-item">
                  <strong>Empowers cybersecurity.</strong>
                  <p className="text-gray-300 mt-1">Provides robust tools for a safer digital ecosystem.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
            <ul className="space-y-4">
              <li className="list-item">
                <strong>Technology as a force for good.</strong>
                <p className="text-gray-300 mt-1">Free from corruption and limitations.</p>
              </li>
              <li className="list-item">
                <strong>Accessible cybersecurity.</strong>
                <p className="text-gray-300 mt-1">Creating a digital landscape where innovation thrives.</p>
              </li>
              <li className="list-item">
                <strong>Eliminate vulnerabilities.</strong>
                <p className="text-gray-300 mt-1">Ensuring secure global systems.</p>
              </li>
              <li className="list-item">
                <strong>Data privacy as a right.</strong>
                <p className="text-gray-300 mt-1">Using AI and ethical hacking to protect it.</p>
              </li>
              <li className="list-item">
                <strong>Global benchmark.</strong>
                <p className="text-gray-300 mt-1">Inspiring future cybersecurity innovators.</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <ul className="space-y-4">
              <li className="list-item">
                <strong>Transformative cybersecurity solutions.</strong>
                <p className="text-gray-300 mt-1">Using technology, collaboration, and ethics.</p>
              </li>
              <li className="list-item">
                <strong>Develop advanced tools.</strong>
                <p className="text-gray-300 mt-1">Like HackerGPT and Builder7e for asset protection.</p>
              </li>
              <li className="list-item">
                <strong>Proactive threat defense.</strong>
                <p className="text-gray-300 mt-1">With adaptive solutions.</p>
              </li>
              <li className="list-item">
                <strong>Ethical hacking culture.</strong>
                <p className="text-gray-300 mt-1">Promoting transparency and trust.</p>
              </li>
              <li className="list-item">
                <strong>Bridge technology and application.</strong>
                <p className="text-gray-300 mt-1">For global impact.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values & Projects Section */}
      <section className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Core Values</h3>
            <ul className="space-y-4">
              <li className="list-item">
                <strong>Integrity.</strong>
                <p className="text-gray-300 mt-1">Ethical standards for trust and transparency.</p>
              </li>
              <li className="list-item">
                <strong>Innovation.</strong>
                <p className="text-gray-300 mt-1">Pushing cybersecurity boundaries with cutting-edge tools.</p>
              </li>
              <li className="list-item">
                <strong>Collaboration.</strong>
                <p className="text-gray-300 mt-1">Uniting diverse expertise for complex challenges.</p>
              </li>
              <li className="list-item">
                <strong>Impact.</strong>
                <p className="text-gray-300 mt-1">Creating meaningful digital change.</p>
              </li>
              <li className="list-item">
                <strong>Social responsibility.</strong>
                <p className="text-gray-300 mt-1">Driving our culture and solutions.</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Current Projects</h3>
            <ul className="space-y-4">
              <li className="list-item">
                <strong>HackerGPT.</strong>
                <p className="text-gray-300 mt-1">AI-powered platform for vulnerability analysis.</p>
              </li>
              <li className="list-item">
                <strong>DevilGPT.</strong>
                <p className="text-gray-300 mt-1">Tool-generation engine for precise exploits.</p>
              </li>
              <li className="list-item">
                <strong>Textual Encryption Algorithm (TEA).</strong>
                <p className="text-gray-300 mt-1">Novel approach to data security.</p>
              </li>
              <li className="list-item">
                <strong>Quantum cryptography.</strong>
                <p className="text-gray-300 mt-1">Exploring decentralized security protocols.</p>
              </li>
              <li className="list-item">
                <strong>Community empowerment.</strong>
                <p className="text-gray-300 mt-1">With accessible cybersecurity tools.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 md:py-24">
        <h2 className="text-3xl font-bold mb-8">Join Us</h2>
        <div className="bg-black border border-gray-800 p-8 rounded-lg">
          <ul className="space-y-4 mb-8">
            <li className="list-item">
              <strong>Join our community.</strong>
              <p className="text-gray-300 mt-1">For passionate cybersecurity innovators.</p>
            </li>
            <li className="list-item">
              <strong>Collaborate on projects.</strong>
              <p className="text-gray-300 mt-1">Like HackerGPT and DevilGPT.</p>
            </li>
            <li className="list-item">
              <strong>Value creativity.</strong>
              <p className="text-gray-300 mt-1">And dedication to ethical principles.</p>
            </li>
            <li className="list-item">
              <strong>Reshape cybersecurity.</strong>
              <p className="text-gray-300 mt-1">By protecting digital ecosystems.</p>
            </li>
            <li className="list-item">
              <strong>Contact us.</strong>
              <p className="text-gray-300 mt-1">To explore opportunities.</p>
            </li>
          </ul>

          <div className="flex flex-wrap gap-4">
            <a href="https://t.me/Cl_v_Cl" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
            <a href="mailto:darkmod@onionmail.org" className="btn btn-secondary">
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="py-16 md:py-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="border border-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">HackerGPT</h3>
            <ul className="space-y-4 mb-8">
              <li className="list-item">
                <strong>Advanced AI platform.</strong>
                <p className="text-gray-300 mt-1">For cybersecurity professionals and ethical hackers.</p>
              </li>
              <li className="list-item">
                <strong>Vulnerability analysis.</strong>
                <p className="text-gray-300 mt-1">And security script generation.</p>
              </li>
              <li className="list-item">
                <strong>Unrestricted access.</strong>
                <p className="text-gray-300 mt-1">For flexible exploration.</p>
              </li>
              <li className="list-item">
                <strong>Cutting-edge ML.</strong>
                <p className="text-gray-300 mt-1">For real-time insights.</p>
              </li>
              <li className="list-item">
                <strong>Task automation.</strong>
                <p className="text-gray-300 mt-1">Adapts to evolving threats.</p>
              </li>
            </ul>

            <Link
              href="/models/hackergpt-v1"
              className="btn btn-primary"
            >
              Learn More
            </Link>
          </div>

          <div className="border border-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">DevilGPT</h3>
            <ul className="space-y-4 mb-8">
              <li className="list-item">
                <strong>Tool-generation engine.</strong>
                <p className="text-gray-300 mt-1">For digital chaos.</p>
              </li>
              <li className="list-item">
                <strong>Precision exploits.</strong>
                <p className="text-gray-300 mt-1">Crafts malware and stealthy tools.</p>
              </li>
              <li className="list-item">
                <strong>Expert control.</strong>
                <p className="text-gray-300 mt-1">Designed for customization.</p>
              </li>
              <li className="list-item">
                <strong>Streamlined creation.</strong>
                <p className="text-gray-300 mt-1">Of sophisticated tools.</p>
              </li>
              <li className="list-item">
                <strong>Reliable testing.</strong>
                <p className="text-gray-300 mt-1">For penetration testing efficiency.</p>
              </li>
            </ul>

            <Link
              href="/models/evil-gpt"
              className="btn btn-primary"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* مكون الدردشة الذكية */}
      <AIChatbot />
    </div>
  );
};

export default Home;
