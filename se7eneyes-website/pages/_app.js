import '../styles/globals.css';
import '../styles/toast.css';
import Layout from '../components/Layout';
import { ToastContainer } from '../components/Toast';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </>
  );
}

export default MyApp;
