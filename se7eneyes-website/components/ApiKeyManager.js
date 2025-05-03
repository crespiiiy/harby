import React, { useState } from 'react';

const ApiKeyManager = () => {
  const [apiKeys, setApiKeys] = useState([
    { id: 1, name: 'Default Key', key: 'sk_7e_1234567890abcdef', created: '2023-12-01', lastUsed: '2023-12-15' }
  ]);
  const [isCreatingKey, setIsCreatingKey] = useState(false);
  const [newKeyName, setNewKeyName] = useState('');
  const [deleteKeyId, setDeleteKeyId] = useState(null);
  const [copiedKeyId, setCopiedKeyId] = useState(null);

  const handleCreateKey = () => {
    if (!newKeyName.trim()) return;

    // Generate a mock API key
    const newKey = {
      id: apiKeys.length + 1,
      name: newKeyName,
      key: `sk_7e_${Math.random().toString(36).substring(2, 15)}`,
      created: new Date().toISOString().split('T')[0],
      lastUsed: '-'
    };

    setApiKeys([...apiKeys, newKey]);
    setNewKeyName('');
    setIsCreatingKey(false);
  };

  const handleDeleteKey = (id) => {
    setApiKeys(apiKeys.filter(key => key.id !== id));
    setDeleteKeyId(null);
  };

  const handleCopyKey = (id, key) => {
    navigator.clipboard.writeText(key);
    setCopiedKeyId(id);

    // Reset copied status after 2 seconds
    setTimeout(() => {
      setCopiedKeyId(null);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">API Keys</h1>
        <button
          onClick={() => setIsCreatingKey(true)}
          className="btn btn-primary"
        >
          Create Key
        </button>
      </div>

      <p className="text-gray-300 mb-8">
        Manage your API keys to access HackerGPT models from Green Hat.
      </p>

      {isCreatingKey && (
        <div className="bg-secondary p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4">Create New API Key</h2>
          <div className="mb-4">
            <label htmlFor="keyName" className="block text-gray-300 mb-2">Key Name</label>
            <input
              type="text"
              id="keyName"
              value={newKeyName}
              onChange={(e) => setNewKeyName(e.target.value)}
              className="input w-full"
              placeholder="My API Key"
            />
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleCreateKey}
              className="btn btn-primary"
              disabled={!newKeyName.trim()}
            >
              Create
            </button>
            <button
              onClick={() => setIsCreatingKey(false)}
              className="btn btn-secondary"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {apiKeys.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">API Key</th>
                <th className="px-4 py-2 text-left">Created</th>
                <th className="px-4 py-2 text-left">Last Used</th>
                <th className="px-4 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {apiKeys.map(key => (
                <tr key={key.id} className="border-b border-gray-700">
                  <td className="px-4 py-3">{key.name}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <span className="mr-2">
                        {key.key.substring(0, 8)}...{key.key.substring(key.key.length - 4)}
                      </span>
                      <button
                        onClick={() => handleCopyKey(key.id, key.key)}
                        className="text-gray-400 hover:text-white"
                      >
                        {copiedKeyId === key.id ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-3">{key.created}</td>
                  <td className="px-4 py-3">{key.lastUsed}</td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => setDeleteKeyId(key.id)}
                      className="text-red-500 hover:text-red-400"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-secondary p-6 rounded-lg text-center">
          <p className="text-gray-300">You don't have any API keys yet.</p>
        </div>
      )}

      {/* Delete confirmation modal */}
      {deleteKeyId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-secondary rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Are you sure you want to delete this API Key?</h3>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => handleDeleteKey(deleteKeyId)}
                className="btn bg-red-600 hover:bg-red-700 text-white"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setDeleteKeyId(null)}
                className="btn btn-secondary"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApiKeyManager;
