import React, { useState } from 'react';

const SecurityTools = () => {
  const [activeTab, setActiveTab] = useState('metasploit');
  const [isConnected, setIsConnected] = useState({
    metasploit: false,
    burpsuite: false,
    nmap: false,
    wireshark: false,
    osint: false
  });
  const [connectionDetails, setConnectionDetails] = useState({
    metasploit: { host: 'localhost', port: '55553', apiKey: '' },
    burpsuite: { host: 'localhost', port: '8080', apiKey: '' },
    nmap: { path: '/usr/bin/nmap' },
    wireshark: { path: '/usr/bin/wireshark' },
    osint: { apiKey: '' }
  });

  const handleConnect = (tool) => {
    // In a real implementation, this would attempt to connect to the tool's API
    // For demo purposes, we'll just simulate a connection
    
    window.showToast(`Connecting to ${getToolName(tool)}...`, 'info');
    
    setTimeout(() => {
      setIsConnected(prev => ({
        ...prev,
        [tool]: true
      }));
      window.showToast(`Successfully connected to ${getToolName(tool)}`, 'success');
    }, 1500);
  };

  const handleDisconnect = (tool) => {
    // In a real implementation, this would disconnect from the tool's API
    // For demo purposes, we'll just simulate a disconnection
    
    setIsConnected(prev => ({
      ...prev,
      [tool]: false
    }));
    window.showToast(`Disconnected from ${getToolName(tool)}`, 'info');
  };

  const handleInputChange = (tool, field, value) => {
    setConnectionDetails(prev => ({
      ...prev,
      [tool]: {
        ...prev[tool],
        [field]: value
      }
    }));
  };

  const getToolName = (tool) => {
    switch (tool) {
      case 'metasploit': return 'Metasploit';
      case 'burpsuite': return 'Burp Suite';
      case 'nmap': return 'Nmap';
      case 'wireshark': return 'Wireshark';
      case 'osint': return 'OSINT Tools';
      default: return tool;
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
      <div className="flex overflow-x-auto scrollbar-hide border-b border-gray-800">
        {['metasploit', 'burpsuite', 'nmap', 'wireshark', 'osint'].map(tool => (
          <button
            key={tool}
            className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${activeTab === tool ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'}`}
            onClick={() => setActiveTab(tool)}
          >
            <div className="flex items-center">
              {isConnected[tool] && (
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              )}
              {getToolName(tool)}
            </div>
          </button>
        ))}
      </div>

      <div className="p-6">
        {activeTab === 'metasploit' && (
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Metasploit Integration</h3>
            <p className="text-gray-400 mb-6">
              Connect to a running Metasploit RPC server to execute modules, manage sessions, and automate penetration testing tasks.
            </p>
            
            {!isConnected.metasploit ? (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Host</label>
                    <input
                      type="text"
                      value={connectionDetails.metasploit.host}
                      onChange={(e) => handleInputChange('metasploit', 'host', e.target.value)}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-accent text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Port</label>
                    <input
                      type="text"
                      value={connectionDetails.metasploit.port}
                      onChange={(e) => handleInputChange('metasploit', 'port', e.target.value)}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-accent text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">API Key (if enabled)</label>
                  <input
                    type="password"
                    value={connectionDetails.metasploit.apiKey}
                    onChange={(e) => handleInputChange('metasploit', 'apiKey', e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-accent text-white"
                  />
                </div>
                
                <button
                  onClick={() => handleConnect('metasploit')}
                  className="bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded transition-colors"
                >
                  Connect to Metasploit
                </button>
              </div>
            ) : (
              <div>
                <div className="bg-green-900/20 border border-green-700 rounded-md p-4 mb-6">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    <span className="text-green-400">Connected to Metasploit RPC server at {connectionDetails.metasploit.host}:{connectionDetails.metasploit.port}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-800 p-4 rounded-md">
                    <h4 className="text-white font-bold mb-2">Active Sessions</h4>
                    <p className="text-gray-400 text-sm">0 active sessions</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-md">
                    <h4 className="text-white font-bold mb-2">Available Modules</h4>
                    <p className="text-gray-400 text-sm">2,184 modules available</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-md">
                    <h4 className="text-white font-bold mb-2">Recent Jobs</h4>
                    <p className="text-gray-400 text-sm">No recent jobs</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <button
                    className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors"
                  >
                    Launch Console
                  </button>
                  
                  <button
                    onClick={() => handleDisconnect('metasploit')}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
                  >
                    Disconnect
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'burpsuite' && (
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Burp Suite Integration</h3>
            <p className="text-gray-400 mb-6">
              Connect to Burp Suite's REST API to automate web application security testing and integrate findings into your workflow.
            </p>
            
            {!isConnected.burpsuite ? (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Host</label>
                    <input
                      type="text"
                      value={connectionDetails.burpsuite.host}
                      onChange={(e) => handleInputChange('burpsuite', 'host', e.target.value)}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-accent text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Port</label>
                    <input
                      type="text"
                      value={connectionDetails.burpsuite.port}
                      onChange={(e) => handleInputChange('burpsuite', 'port', e.target.value)}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-accent text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">API Key</label>
                  <input
                    type="password"
                    value={connectionDetails.burpsuite.apiKey}
                    onChange={(e) => handleInputChange('burpsuite', 'apiKey', e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-accent text-white"
                  />
                </div>
                
                <button
                  onClick={() => handleConnect('burpsuite')}
                  className="bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded transition-colors"
                >
                  Connect to Burp Suite
                </button>
              </div>
            ) : (
              <div>
                <div className="bg-green-900/20 border border-green-700 rounded-md p-4 mb-6">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    <span className="text-green-400">Connected to Burp Suite at {connectionDetails.burpsuite.host}:{connectionDetails.burpsuite.port}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-800 p-4 rounded-md">
                    <h4 className="text-white font-bold mb-2">Scan Status</h4>
                    <p className="text-gray-400 text-sm">No active scans</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-md">
                    <h4 className="text-white font-bold mb-2">Issues Found</h4>
                    <p className="text-gray-400 text-sm">0 issues detected</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-md">
                    <h4 className="text-white font-bold mb-2">Proxy Status</h4>
                    <p className="text-gray-400 text-sm">Proxy running</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <button
                    className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors"
                  >
                    Start New Scan
                  </button>
                  
                  <button
                    onClick={() => handleDisconnect('burpsuite')}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
                  >
                    Disconnect
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'nmap' && (
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Nmap Integration</h3>
            <p className="text-gray-400 mb-6">
              Integrate with Nmap to perform network discovery and security auditing from within the platform.
            </p>
            
            {!isConnected.nmap ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Nmap Executable Path</label>
                  <input
                    type="text"
                    value={connectionDetails.nmap.path}
                    onChange={(e) => handleInputChange('nmap', 'path', e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-accent text-white"
                    placeholder="/usr/bin/nmap"
                  />
                </div>
                
                <button
                  onClick={() => handleConnect('nmap')}
                  className="bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded transition-colors"
                >
                  Connect to Nmap
                </button>
              </div>
            ) : (
              <div>
                <div className="bg-green-900/20 border border-green-700 rounded-md p-4 mb-6">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    <span className="text-green-400">Connected to Nmap at {connectionDetails.nmap.path}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-300 mb-2">Quick Scan</label>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Enter target (IP, hostname, or network range)"
                      className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l focus:outline-none focus:border-accent text-white"
                    />
                    <button className="bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-r border-l-0 border border-accent transition-colors">
                      Scan
                    </button>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-4 rounded-md mb-6">
                  <h4 className="text-white font-bold mb-2">Recent Scans</h4>
                  <p className="text-gray-400 text-sm">No recent scans</p>
                </div>
                
                <button
                  onClick={() => handleDisconnect('nmap')}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
                >
                  Disconnect
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'wireshark' && (
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Wireshark Integration</h3>
            <p className="text-gray-400 mb-6">
              Integrate with Wireshark for packet capture and analysis capabilities directly from the platform.
            </p>
            
            {!isConnected.wireshark ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Wireshark Executable Path</label>
                  <input
                    type="text"
                    value={connectionDetails.wireshark.path}
                    onChange={(e) => handleInputChange('wireshark', 'path', e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-accent text-white"
                    placeholder="/usr/bin/wireshark"
                  />
                </div>
                
                <button
                  onClick={() => handleConnect('wireshark')}
                  className="bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded transition-colors"
                >
                  Connect to Wireshark
                </button>
              </div>
            ) : (
              <div>
                <div className="bg-green-900/20 border border-green-700 rounded-md p-4 mb-6">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    <span className="text-green-400">Connected to Wireshark at {connectionDetails.wireshark.path}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Interface</label>
                    <select className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-accent text-white">
                      <option value="">Select network interface</option>
                      <option value="eth0">eth0</option>
                      <option value="wlan0">wlan0</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Capture Filter</label>
                    <input
                      type="text"
                      placeholder="e.g., port 80 or host 192.168.1.1"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-accent text-white"
                    />
                  </div>
                </div>
                
                <div className="flex space-x-4 mb-6">
                  <button className="bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded transition-colors">
                    Start Capture
                  </button>
                  
                  <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors">
                    Launch Wireshark
                  </button>
                </div>
                
                <button
                  onClick={() => handleDisconnect('wireshark')}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
                >
                  Disconnect
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'osint' && (
          <div>
            <h3 className="text-xl font-bold text-white mb-4">OSINT Tools Integration</h3>
            <p className="text-gray-400 mb-6">
              Connect to various Open Source Intelligence (OSINT) APIs to gather information from public sources.
            </p>
            
            {!isConnected.osint ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">OSINT API Key</label>
                  <input
                    type="password"
                    value={connectionDetails.osint.apiKey}
                    onChange={(e) => handleInputChange('osint', 'apiKey', e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-accent text-white"
                  />
                </div>
                
                <button
                  onClick={() => handleConnect('osint')}
                  className="bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded transition-colors"
                >
                  Connect to OSINT Tools
                </button>
              </div>
            ) : (
              <div>
                <div className="bg-green-900/20 border border-green-700 rounded-md p-4 mb-6">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    <span className="text-green-400">Connected to OSINT Tools API</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-300 mb-2">Target</label>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Enter domain, email, username, or IP"
                      className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l focus:outline-none focus:border-accent text-white"
                    />
                    <button className="bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-r border-l-0 border border-accent transition-colors">
                      Search
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-800 p-4 rounded-md">
                    <h4 className="text-white font-bold mb-2">Domain Information</h4>
                    <button className="text-xs bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded transition-colors">
                      Run Scan
                    </button>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-md">
                    <h4 className="text-white font-bold mb-2">Email Verification</h4>
                    <button className="text-xs bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded transition-colors">
                      Run Scan
                    </button>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-md">
                    <h4 className="text-white font-bold mb-2">Social Media</h4>
                    <button className="text-xs bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded transition-colors">
                      Run Scan
                    </button>
                  </div>
                </div>
                
                <button
                  onClick={() => handleDisconnect('osint')}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
                >
                  Disconnect
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SecurityTools;