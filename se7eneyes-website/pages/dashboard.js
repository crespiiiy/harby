import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SecurityTools from '../components/SecurityTools';

const Dashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newApiKey, setNewApiKey] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [apiUsage, setApiUsage] = useState({
    hackergptV1: { used: 3, limit: 10 },
    hackergptV2: { used: 0, limit: 'Unlimited' },
    evilGpt: { used: 2, limit: 10 }
  });
  const [specialOffers, setSpecialOffers] = useState([
    {
      id: 1,
      title: 'Premium Upgrade',
      description: 'Upgrade to HackerGPT-v2 with unlimited requests',
      discount: '30% OFF',
      validUntil: '2025-01-31'
    },
    {
      id: 2,
      title: 'Dark Web Bundle',
      description: 'Access to all models + exclusive dark web tools',
      discount: '25% OFF',
      validUntil: '2025-02-15'
    }
  ]);

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
      return;
    }
    
    setUser(JSON.parse(userData));
    setLoading(false);
    
    // Check if there's a tab parameter in the URL
    if (router.query.tab) {
      setActiveTab(router.query.tab);
    }
  }, [router, router.query.tab]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  const copyApiKey = () => {
    navigator.clipboard.writeText(user?.apiKey || 'sk-7e-v1-622aafb37f01db6e5a937fb97a32047c');
    window.showToast('API key copied to clipboard', 'success');
  };
  
  const generateApiKey = () => {
    // In a real application, this would make an API call to generate a key
    // For this demo, we'll use the provided key
    const apiKey = 'sk-7e-v1-58f3c19a9ca4ac67906144cf4da0e7c2';
    setNewApiKey(apiKey);
    
    // Update user data in localStorage
    if (user) {
      const updatedUser = { ...user, apiKey };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      // We don't update the user state yet to keep showing the copy interface
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="animate-pulse text-accent">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary">
      <Head>
        <title>Dashboard - Green Hat</title>
        <meta name="description" content="Green Hat user dashboard" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">User Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded transition duration-300"
          >
            Logout
          </button>
        </div>
        
        {/* Dashboard Tabs */}
        <div className="flex overflow-x-auto scrollbar-hide mb-8 border-b border-gray-800">
          <button
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'overview' ? 'text-accent border-b-2 border-accent' : 'text-gray-400 hover:text-white'}`}
            onClick={() => {
              setActiveTab('overview');
              router.push('/dashboard', undefined, { shallow: true });
            }}
          >
            Overview
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'security-tools' ? 'text-accent border-b-2 border-accent' : 'text-gray-400 hover:text-white'}`}
            onClick={() => {
              setActiveTab('security-tools');
              router.push('/dashboard?tab=security-tools', undefined, { shallow: true });
            }}
          >
            Security Tools
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'api-keys' ? 'text-accent border-b-2 border-accent' : 'text-gray-400 hover:text-white'}`}
            onClick={() => {
              setActiveTab('api-keys');
              router.push('/dashboard?tab=api-keys', undefined, { shallow: true });
            }}
          >
            API Keys
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'settings' ? 'text-accent border-b-2 border-accent' : 'text-gray-400 hover:text-white'}`}
            onClick={() => {
              setActiveTab('settings');
              router.push('/dashboard?tab=settings', undefined, { shallow: true });
            }}
          >
            Settings
          </button>
        </div>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* User Info Card */}
          <div className="bg-secondary rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Account Information</h2>
            <div className="space-y-3">
              <div>
                <span className="text-gray-400">Email:</span>
                <span className="text-white ml-2">{user?.email || 'user@example.com'}</span>
              </div>
              <div>
                <span className="text-gray-400">Account Type:</span>
                <span className="text-white ml-2">Standard</span>
              </div>
              <div>
                <span className="text-gray-400">Joined:</span>
                <span className="text-white ml-2">{new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* API Key Card */}
          <div className="bg-secondary rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">API Key</h2>
            {user?.apiKey ? (
              <div className="space-y-4">
                <div className="bg-gray-800 p-3 rounded flex justify-between items-center">
                  <code className="text-green-500 text-sm">
                    {user.apiKey.substring(0, 10)}...
                  </code>
                  <button
                    onClick={copyApiKey}
                    className="bg-gray-700 hover:bg-gray-600 text-white text-xs px-2 py-1 rounded transition duration-300"
                  >
                    Copy
                  </button>
                </div>
                <p className="text-gray-400 text-sm">
                  Use this key to authenticate API requests. See the
                  <Link href="/api-reference" className="text-accent hover:underline ml-1">
                    API documentation
                  </Link>
                  .
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-gray-800 p-3 rounded flex justify-between items-center">
                  <input 
                    type="text" 
                    className="bg-transparent text-green-500 text-sm w-full mr-2" 
                    placeholder="No API key generated yet"
                    readOnly
                    value={newApiKey || ''}
                  />
                  {newApiKey ? (
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(newApiKey);
                        window.showToast('API key copied to clipboard', 'success');
                      }}
                      className="bg-gray-700 hover:bg-gray-600 text-white text-xs px-2 py-1 rounded transition duration-300"
                    >
                      Copy
                    </button>
                  ) : (
                    <button
                      onClick={generateApiKey}
                      className="bg-accent hover:bg-accent-dark text-white text-xs px-2 py-1 rounded transition duration-300"
                    >
                      Create Key
                    </button>
                  )}
                </div>
                <p className="text-gray-400 text-sm">
                  {newApiKey ? 
                    'Your new API key has been generated. Make sure to copy it as it won\'t be shown again.' : 
                    'Generate an API key to access our models programmatically.'}
                </p>
              </div>
            )}
          </div>

          {/* Security Section */}
          <div className="bg-secondary rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">Security</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">End-to-End Encryption</h3>
                  <p className="text-gray-400 text-sm">All communications are encrypted with AES-256</p>
                </div>
                <span className="bg-green-900 text-green-500 text-xs px-2 py-1 rounded">Enabled</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">Zero Logs Policy</h3>
                  <p className="text-gray-400 text-sm">We don't store any logs of your activities</p>
                </div>
                <span className="bg-green-900 text-green-500 text-xs px-2 py-1 rounded">Active</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">Two-Factor Authentication</h3>
                  <p className="text-gray-400 text-sm">Add an extra layer of security to your account</p>
                </div>
                <div>
                  {user?.twoFactorEnabled ? (
                    <span className="bg-green-900 text-green-500 text-xs px-2 py-1 rounded">Enabled</span>
                  ) : (
                    <span className="bg-gray-700 text-gray-400 text-xs px-2 py-1 rounded">Disabled</span>
                  )}
                  <Link href="/two-factor-auth" className="ml-2 text-xs bg-accent hover:bg-accent-dark text-white px-2 py-1 rounded transition-colors">
                    {user?.twoFactorEnabled ? 'Manage' : 'Enable'}
                  </Link>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">Security Tools Integration</h3>
                  <p className="text-gray-400 text-sm">Connect with popular security tools</p>
                </div>
                <Link href="/dashboard?tab=security-tools" className="text-xs bg-accent hover:bg-accent-dark text-white px-2 py-1 rounded transition-colors">
                  Configure
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* API Usage Section */}
        <div className="bg-secondary rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">API Usage</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 text-gray-400">Model</th>
                  <th className="text-left py-3 text-gray-400">Requests Used</th>
                  <th className="text-left py-3 text-gray-400">Daily Limit</th>
                  <th className="text-left py-3 text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-3 text-white">HackerGPT-v1</td>
                  <td className="py-3 text-white">{apiUsage.hackergptV1.used}</td>
                  <td className="py-3 text-white">{apiUsage.hackergptV1.limit}</td>
                  <td className="py-3">
                    <span className="bg-green-900 text-green-500 text-xs px-2 py-1 rounded">
                      Active
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 text-white">HackerGPT-v2</td>
                  <td className="py-3 text-white">{apiUsage.hackergptV2.used}</td>
                  <td className="py-3 text-white">{apiUsage.hackergptV2.limit}</td>
                  <td className="py-3">
                    <span className="bg-yellow-900 text-yellow-500 text-xs px-2 py-1 rounded">
                      Premium
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 text-white">Evil-GPT</td>
                  <td className="py-3 text-white">{apiUsage.evilGpt.used}</td>
                  <td className="py-3 text-white">{apiUsage.evilGpt.limit}</td>
                  <td className="py-3">
                    <span className="bg-green-900 text-green-500 text-xs px-2 py-1 rounded">
                      Active
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Special Offers Section */}
        <div className="bg-secondary rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {specialOffers.map(offer => (
              <div key={offer.id} className="border border-gray-700 rounded-lg p-4 bg-gray-800">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white">{offer.title}</h3>
                  <span className="bg-accent text-white text-xs px-2 py-1 rounded">
                    {offer.discount}
                  </span>
                </div>
                <p className="text-gray-400 mb-3">{offer.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Valid until: {offer.validUntil}</span>
                  <button className="bg-accent hover:bg-accent-dark text-white text-sm px-3 py-1 rounded transition duration-300">
                    Claim Offer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Partner Store Section */}
        <div className="bg-secondary rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 w-6 h-6 mr-2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <h2 className="text-xl font-bold text-white">Verified Partner Store</h2>
          </div>
          <div className="flex items-center bg-gray-800 p-4 rounded-lg mb-4">
            <div className="mr-4">
              <div className="bg-green-900 text-green-500 text-xs px-2 py-1 rounded-full inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Verified
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-medium">Green Hat Platform</h3>
              <p className="text-gray-400 text-sm">Official partner store with secure encryption and privacy features</p>
            </div>
            <a 
              href="https://greenhats.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-dark text-white text-sm px-3 py-1 rounded transition duration-300"
            >
              Visit Store
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            This store is officially verified and endorsed by our team. All transactions are secure and protected by our encryption standards.  
          </p>
        </div>
        )}
        
        {activeTab === 'security-tools' && (
          <div className="mb-8">
            <SecurityTools />
          </div>
        )}
        
        {activeTab === 'api-keys' && (
          <div className="bg-secondary rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">API Keys</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Your API Key</h3>
                <p className="text-gray-400 mb-4">Use this key to authenticate your requests to our API.</p>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-accent text-white font-mono text-sm"
                    value={newApiKey || user?.apiKey || ''}
                    readOnly
                  />
                  {newApiKey ? (
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(newApiKey);
                        window.showToast('API key copied to clipboard', 'success');
                      }}
                      className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors whitespace-nowrap"
                    >
                      Copy
                    </button>
                  ) : (
                    <button
                      onClick={generateApiKey}
                      className="bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded transition-colors whitespace-nowrap"
                    >
                      Create Key
                    </button>
                  )}
                </div>
                
                {newApiKey && (
                  <p className="mt-2 text-yellow-500 text-sm">
                    Make sure to copy your API key now. For security reasons, you won't be able to see it again.
                  </p>
                )}
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">API Documentation</h3>
                <p className="text-gray-400 mb-4">Learn how to use our API to integrate with your applications.</p>
                
                <Link href="/api-reference" className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors inline-block">
                  View API Documentation
                </Link>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'settings' && (
          <div className="bg-secondary rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Account Settings</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Profile Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      value={user?.email || ''}
                      readOnly
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-accent text-white"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Security</h3>
                <Link href="/two-factor-auth" className="bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded transition-colors inline-block">
                  Manage Two-Factor Authentication
                </Link>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Danger Zone</h3>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Dark Web Access Section */}
        <div className="bg-black border border-purple-900 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500 w-6 h-6 mr-2">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>
              <path d="M12 8v8M8 12h8"/>
            </svg>
            <h2 className="text-xl font-bold text-white">Dark Web Access</h2>
          </div>
          <p className="text-gray-400 mb-4">
            For enhanced privacy, access our services through the Tor network using our onion address.
          </p>
          <div className="bg-gray-900 p-3 rounded flex justify-between items-center">
            <code className="text-purple-500">http://dreadytofatroptsdj6io7l3xptbet6onoyno2yv7jicoxknyazubrad.onion/</code>
            <button
              onClick={() => navigator.clipboard.writeText('http://dreadytofatroptsdj6io7l3xptbet6onoyno2yv7jicoxknyazubrad.onion/')}
              className="bg-gray-800 hover:bg-gray-700 text-white text-xs px-2 py-1 rounded transition duration-300"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;