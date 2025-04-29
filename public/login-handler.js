/**
 * معالج زر الدخول الآن
 * يتيح للمستخدمين الانتقال من صفحة الترحيب إلى اللوحة الرئيسية
 */

document.addEventListener("DOMContentLoaded", function() {
  // البحث عن زر الدخول الآن
  var loginButton = document.getElementById('login-btn');
  
  if (loginButton) {
    // إضافة مستمع حدث للنقر على الزر
    loginButton.addEventListener('click', function(event) {
      event.preventDefault();
      
      // إخفاء صفحة الترحيب
      var landingPage = document.getElementById('landing-page');
      if (landingPage) {
        landingPage.style.display = 'none';
        console.log('تم إخفاء صفحة الترحيب');
      } else {
        console.error('لم يتم العثور على عنصر landing-page');
      }
      
      // إظهار اللوحة الرئيسية
      var mainPanel = document.getElementById('main-panel');
      if (mainPanel) {
        mainPanel.style.display = 'block';
        console.log('تم إظهار اللوحة الرئيسية');
      } else {
        console.error('لم يتم العثور على عنصر main-panel');
      }
      
      // تحديث واجهة المستخدم بناءً على حالة تسجيل الدخول
      if (typeof membershipSystem !== 'undefined' && membershipSystem.isLoggedIn()) {
        updateUIForLoggedInUser();
      } else {
        updateUIForGuest();
      }
      
      console.log('تم الانتقال إلى اللوحة الرئيسية بنجاح');
    });
    
    console.log('تم ربط زر الدخول الآن بنجاح');
  } else {
    console.error('لم يتم العثور على زر الدخول الآن (login-btn)');
  }
});
