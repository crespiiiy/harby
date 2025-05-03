import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import SecurityFooter from './SecurityFooter';
import StealthMode from './StealthMode';

const Layout = ({ children, title = 'Green Hat' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Green Hat - An internet-based hacktivist group, uniting brilliant minds globally to pioneer transformative cybersecurity solutions." />
        <link rel="icon" href="/se7eneyes.jpg" />
      </Head>

      {/* تأثير خط الفحص */}
      <div className="scan-line"></div>

      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <SecurityFooter />

        {/* زر وضع التخفي */}
        <StealthMode />
      </div>
    </>
  );
};

export default Layout;
