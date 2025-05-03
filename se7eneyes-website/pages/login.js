import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
      router.push('/dashboard');
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Basic validation
    if (!formData.email || !formData.password) {
      setError('All fields are required');
      setLoading(false);
      return;
    }

    // Simulate API call for login
    try {
      // In a real app, this would be an actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, we'll accept any login
      // In a real app, this would validate credentials against a database
      localStorage.setItem('user', JSON.stringify({
        email: formData.email,
        isLoggedIn: true,
        apiKey: 'sk-7e-v1-622aafb37f01db6e5a937fb97a32047c' // Using the provided API key
      }));
      
      setIsLoggedIn(true);
      router.push('/dashboard');
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
    } finally {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-primary">
      <Head>
        <title>Login - Green Hat</title>
        <meta name="description" content="Login to access Green Hat's cybersecurity tools" />
      </Head>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-secondary rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-white mb-2">Login to Your Account</h1>
              <p className="text-gray-400">Access advanced cybersecurity tools</p>
            </div>

            {error && (
              <div className="bg-red-900 bg-opacity-20 border border-red-500 text-red-500 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-accent"
                  placeholder="your@email.com"
                  disabled={loading}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-300 mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-accent"
                  placeholder="••••••••"
                  disabled={loading}
                />
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="mr-2"
                    disabled={loading}
                  />
                  <label htmlFor="remember" className="text-gray-300 text-sm">
                    Remember me
                  </label>
                </div>
                <Link href="/forgot-password" className="text-accent text-sm hover:underline">
                  Forgot Password?
                </Link>
              </div>

              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                  disabled={loading}
                >
                  {loading ? 'Authenticating...' : 'Login'}
                </button>
              </div>

              <div className="text-center text-gray-400 text-sm">
                Don't have an account?{' '}
                <Link href="/register" className="text-accent hover:underline">
                  Create Account
                </Link>
              </div>
            </form>
          </div>

          <div className="bg-gray-900 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-xs text-gray-400">End-to-End Encrypted</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                <span className="text-xs text-gray-400">Tor Network: dreadytofatroptsdj6io7l3xptbet6onoyno2yv7jicoxknyazubrad.onion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;