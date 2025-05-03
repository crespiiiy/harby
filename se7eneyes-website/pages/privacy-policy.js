import React from 'react';
import Head from 'next/head';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Privacy Policy - HackerGPT</title>
        <meta name="description" content="HackerGPT Privacy Policy" />
      </Head>

      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <div className="bg-secondary rounded-lg p-6 mb-8">
        <p className="text-gray-300 mb-4">
          Last updated: January 1, 2025
        </p>

        <p className="text-gray-300">
          This Privacy Policy describes how HackerGPT ("we", "us", or "our") collects, uses, and shares your personal information
          when you use our website (hackergpt.greenhat.org) and services.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <div className="bg-secondary rounded-lg p-6">
            <p className="text-gray-300 mb-4">
              We collect several types of information from and about users of our website, including:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>
                <strong>Personal Information:</strong> Email address, name, and other information you provide when creating an account.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our website and services, including your chat history, API usage, and feature preferences.
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type and version, time zone setting, operating system, and platform.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
          <div className="bg-secondary rounded-lg p-6">
            <p className="text-gray-300 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process and complete transactions</li>
              <li>Send you technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Personalize your experience and deliver content relevant to your interests</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
          <div className="bg-secondary rounded-lg p-6">
            <p className="text-gray-300">
              We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy.
              We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes,
              and enforce our policies.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Data Security</h2>
          <div className="bg-secondary rounded-lg p-6">
            <p className="text-gray-300">
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal
              information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
          <div className="bg-secondary rounded-lg p-6">
            <p className="text-gray-300 mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>The right to access the personal information we have about you</li>
              <li>The right to request that we correct any personal information we have about you</li>
              <li>The right to request that we delete any personal information we have about you</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
          <div className="bg-secondary rounded-lg p-6">
            <p className="text-gray-300">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page
              and updating the "Last updated" date at the top of this Privacy Policy.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="bg-secondary rounded-lg p-6">
            <p className="text-gray-300">
              If you have any questions about this Privacy Policy, please contact us at privacy@greenhat.org.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
