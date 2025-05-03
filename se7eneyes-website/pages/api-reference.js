import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ApiReference = () => {
  const [activeTab, setActiveTab] = useState('curl');

  const codeExamples = {
    curl: `curl -X POST "https://api.greenhat.org/v1/chat/completions" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
  "model": "hackergpt-v1",
  "temperature": 0.7,
  "max_tokens": 1024,
  "messages": [
    {"role": "user", "content": "Write a python code."}
  ]
}'`,
    python: `import requests

url = "https://api.greenhat.org/v1/chat/completions"
headers = {
  "Authorization": "Bearer YOUR_API_KEY",
  "Content-Type": "application/json"
}

data = {
  "model": "hackergpt-v1",
  "temperature": 0.7,
  "max_tokens": 1024,
  "messages": [
    {"role": "user", "content": "Write a python code."}
  ]
}

response = requests.post(url, headers=headers, json=data)
print(response.json())`,
    javascript: `const response = await fetch("https://api.greenhat.org/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "hackergpt-v1",
    temperature: 0.7,
    max_tokens: 1024,
    messages: [{
      role: "user",
      content: "Write a python code."
    }]
  })
});

const data = await response.json();
console.log(data);`
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>API Reference - HackerGPT</title>
        <meta name="description" content="HackerGPT API documentation and reference" />
      </Head>

      <h1 className="text-3xl font-bold mb-6">API Reference</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <div className="bg-secondary rounded-lg p-4 sticky top-4">
            <h2 className="text-xl font-bold mb-4">Contents</h2>
            <ul className="space-y-2">
              <li>
                <a href="#introduction" className="text-accent hover:underline">Introduction</a>
              </li>
              <li>
                <a href="#authentication" className="text-accent hover:underline">Authentication</a>
              </li>
              <li>
                <a href="#models" className="text-accent hover:underline">Available Models</a>
              </li>
              <li>
                <a href="#chat-completions" className="text-accent hover:underline">Chat Completions</a>
              </li>
              <li>
                <a href="#parameters" className="text-accent hover:underline">Parameters</a>
              </li>
              <li>
                <a href="#rate-limits" className="text-accent hover:underline">Rate Limits</a>
              </li>
              <li>
                <a href="#errors" className="text-accent hover:underline">Error Handling</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-3">
          <section id="introduction" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <div className="bg-secondary rounded-lg p-6">
              <p className="text-gray-300 mb-4">
                The HackerGPT API provides access to our specialized AI models for cybersecurity.
                You can use these models to generate code, analyze vulnerabilities, and assist with
                various cybersecurity tasks.
              </p>
              <p className="text-gray-300">
                The API follows the same daily free usage limit (10 req/day) as the web interface.
                You need an API key to use it, which you can generate in your account settings.
              </p>
            </div>
          </section>

          <section id="authentication" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Authentication</h2>
            <div className="bg-secondary rounded-lg p-6">
              <p className="text-gray-300 mb-4">
                All API requests require authentication using an API key. You can obtain an API key
                from your <Link href="/api-keys" className="text-accent hover:underline">API Keys</Link> page.
              </p>
              <p className="text-gray-300 mb-4">
                To authenticate your requests, include your API key in the Authorization header:
              </p>
              <div className="bg-dark p-4 rounded-md overflow-x-auto">
                <pre className="text-gray-300">
                  <code>Authorization: Bearer YOUR_API_KEY</code>
                </pre>
              </div>
            </div>
          </section>

          <section id="models" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Available Models</h2>
            <div className="bg-secondary rounded-lg p-6">
              <p className="text-gray-300 mb-4">
                The following models are available through the API:
              </p>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2">Model ID</th>
                    <th className="text-left py-2">Description</th>
                    <th className="text-left py-2">Access</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="py-3">hackergpt-v1</td>
                    <td className="py-3">Basic cybersecurity model</td>
                    <td className="py-3">Free (10 req/day)</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3">hackergpt-v2</td>
                    <td className="py-3">Advanced cybersecurity model</td>
                    <td className="py-3">Paid subscription</td>
                  </tr>
                  <tr>
                    <td className="py-3">evil-gpt</td>
                    <td className="py-3">Unrestricted model</td>
                    <td className="py-3">Free (10 req/day)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="chat-completions" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Chat Completions</h2>
            <div className="bg-secondary rounded-lg p-6">
              <p className="text-gray-300 mb-4">
                The chat completions endpoint allows you to have conversations with the HackerGPT models.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Endpoint:</strong> <code className="bg-dark px-2 py-1 rounded">https://api.greenhat.org/v1/chat/completions</code>
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Method:</strong> <code className="bg-dark px-2 py-1 rounded">POST</code>
              </p>

              <div className="mt-6">
                <div className="flex border-b border-gray-700">
                  <button
                    className={`px-4 py-2 ${activeTab === 'curl' ? 'bg-dark text-white' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('curl')}
                  >
                    cURL
                  </button>
                  <button
                    className={`px-4 py-2 ${activeTab === 'python' ? 'bg-dark text-white' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('python')}
                  >
                    Python
                  </button>
                  <button
                    className={`px-4 py-2 ${activeTab === 'javascript' ? 'bg-dark text-white' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('javascript')}
                  >
                    JavaScript
                  </button>
                </div>
                <div className="bg-dark p-4 rounded-b-md overflow-x-auto">
                  <pre className="text-gray-300">
                    <code>{codeExamples[activeTab]}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          <section id="parameters" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Parameters</h2>
            <div className="bg-secondary rounded-lg p-6">
              <p className="text-gray-300 mb-4">
                The following parameters can be included in your request:
              </p>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2">Parameter</th>
                    <th className="text-left py-2">Type</th>
                    <th className="text-left py-2">Required</th>
                    <th className="text-left py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="py-3">model</td>
                    <td className="py-3">string</td>
                    <td className="py-3">Yes</td>
                    <td className="py-3">ID of the model to use</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3">messages</td>
                    <td className="py-3">array</td>
                    <td className="py-3">Yes</td>
                    <td className="py-3">Array of message objects</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3">temperature</td>
                    <td className="py-3">number</td>
                    <td className="py-3">No</td>
                    <td className="py-3">Sampling temperature (0-1)</td>
                  </tr>
                  <tr>
                    <td className="py-3">max_tokens</td>
                    <td className="py-3">integer</td>
                    <td className="py-3">No</td>
                    <td className="py-3">Maximum tokens to generate</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="rate-limits" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Rate Limits</h2>
            <div className="bg-secondary rounded-lg p-6">
              <p className="text-gray-300 mb-4">
                Free accounts are limited to 10 requests per day. Paid subscriptions have higher limits
                based on the subscription tier.
              </p>
              <p className="text-gray-300">
                If you exceed your rate limit, the API will return a 429 Too Many Requests error.
              </p>
            </div>
          </section>

          <section id="errors" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Error Handling</h2>
            <div className="bg-secondary rounded-lg p-6">
              <p className="text-gray-300 mb-4">
                The API uses standard HTTP status codes to indicate the success or failure of requests:
              </p>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2">Status Code</th>
                    <th className="text-left py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="py-3">200 - OK</td>
                    <td className="py-3">Request succeeded</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3">400 - Bad Request</td>
                    <td className="py-3">Invalid request parameters</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3">401 - Unauthorized</td>
                    <td className="py-3">Invalid or missing API key</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3">429 - Too Many Requests</td>
                    <td className="py-3">Rate limit exceeded</td>
                  </tr>
                  <tr>
                    <td className="py-3">500 - Server Error</td>
                    <td className="py-3">Internal server error</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ApiReference;
