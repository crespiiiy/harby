/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // تحسينات لاستضافة Netlify
  images: {
    domains: ['se7eneyes.netlify.app'],
    unoptimized: true, // تعيين إلى true لتجنب مشاكل تحسين الصور على Netlify
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
