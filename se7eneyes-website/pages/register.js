import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

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
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('All fields are required');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    // Simulate API call for registration
    try {
      // In a real app, this would be an actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store user data in localStorage for demo purposes
      // In a real app, this would be handled by a backend
      localStorage.setItem('user', JSON.stringify({
        username: formData.username,
        email: formData.email,
        isRegistered: true,
        apiKey: 'sk-7e-v1-622aafb37f01db6e5a937fb97a32047c' // Using the provided API key
      }));
      
      setSuccess(true);
      
      // Redirect to dashboard after successful registration
      setTimeout(() => {
        router.push('/dashboard');
      }, 2000);
    } catch (error) {
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary">
      <Head>
        <title>Register - Green Hat</title>
        <meta name="description" content="Create an account to access Green Hat's cybersecurity tools" />
      </Head>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-secondary rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-white mb-2">Create an Account</h1>
              <p className="text-gray-400">Join the elite cybersecurity community</p>
            </div>

            {error && (
              <div className="bg-red-900 bg-opacity-20 border border-red-500 text-red-500 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-900 bg-opacity-20 border border-green-500 text-green-500 px-4 py-3 rounded mb-4">
                Registration successful! Redirecting to dashboard...
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-300 mb-2">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-accent"
                  placeholder="hackerman"
                  disabled={loading || success}
                />
              </div>

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
                  disabled={loading || success}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-300 mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-accent"
                  placeholder="••••••••"
                  disabled={loading || success}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-gray-300 mb-2">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-accent"
                  placeholder="••••••••"
                  disabled={loading || success}
                />
              </div>

              <div className="mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mr-2"
                    required
                    disabled={loading || success}
                  />
                  <label htmlFor="terms" className="text-gray-300 text-sm">
                    I agree to the <Link href="/terms-and-conditions" className="text-accent hover:underline">Terms and Conditions</Link>
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                  disabled={loading || success}
                >
                  {loading ? 'Processing...' : 'Create Account'}
                </button>
              </div>

              <div className="text-center text-gray-400 text-sm">
                Already have an account?{' '}
                <Link href="/login" className="text-accent hover:underline">
                  Login
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
                <span className="text-xs text-gray-400">Tor Network Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;