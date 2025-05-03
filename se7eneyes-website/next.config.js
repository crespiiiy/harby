/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // تكوين الصور لـ Vercel
  images: {
    domains: ['se7eneyes.netlify.app', 'se7eneyes.vercel.app'],
    unoptimized: false, // تعيين إلى false لأن Vercel يدعم تحسين الصور
  },
  // إصلاح مشكلة WebSocket
  webpack: (config, { isServer, dev }) => {
    // تكوين WebSocket للتحديث التلقائي
    if (!isServer && dev) {
      config.watchOptions = {
        poll: 1000, // التحقق كل ثانية
        aggregateTimeout: 300, // تأخير بعد التغييرات
      };
    }
    return config;
  },
  // تم إزالة webpackDevMiddleware لأنه غير مدعوم في الإصدار الحالي من Next.js
  // تحسين الأداء
  poweredByHeader: false,
  generateEtags: false,
}

module.exports = nextConfig
