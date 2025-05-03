module.exports = {
  // مجلد الدوال
  functionsDirectory: '.netlify/functions',
  
  // اسم الموقع
  site: 'se7eneyes',
  
  // مجلد النشر
  publish: '.next',
  
  // أمر البناء
  buildCommand: 'npm run build',
  
  // متغيرات البيئة
  environment: {
    NODE_VERSION: '18',
    NEXT_USE_NETLIFY_EDGE: 'true'
  },
  
  // إعدادات البناء
  build: {
    processing: {
      css: { bundle: true, minify: true },
      js: { bundle: true, minify: true },
      html: { pretty_urls: true },
      images: { compress: true }
    },
    publish: '.next'
  }
}