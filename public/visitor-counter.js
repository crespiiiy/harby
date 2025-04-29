/**
 * نظام عداد الزوار
 * يعرض عدد الزوار بشكل ديناميكي ويظهر وكأنه في تزايد مستمر
 */

// القيمة الأولية لعداد الزوار
let visitorCount = 63247;
let onlineVisitors = 142;

// معدل زيادة الزوار (عشوائي)
const minIncrement = 2;
const maxIncrement = 8;

// الفترة الزمنية بين كل تحديث (بالمللي ثانية)
const updateInterval = 5000; // 5 ثواني

// تخزين آخر تحديث للعداد
let lastUpdateTime = Date.now();

// معدل الزيادة اليومي (تقريبي)
const dailyIncreaseRate = 2500; // عدد الزوار الجدد يومياً

// تهيئة عداد الزوار
document.addEventListener('DOMContentLoaded', () => {
    // عرض القيمة الأولية
    updateVisitorCountDisplay();

    // بدء التحديث الدوري
    setInterval(updateVisitorCount, updateInterval);

    // تحديث عدد الزوار المتصلين حاليًا
    setInterval(updateOnlineVisitors, 5000); // كل 5 ثواني

    // تهيئة الرسم البياني
    initVisitorChart();
});

/**
 * تحديث عداد الزوار
 */
function updateVisitorCount() {
    const now = Date.now();
    const timeDiff = now - lastUpdateTime;
    lastUpdateTime = now;

    // حساب الزيادة بناءً على الوقت المنقضي والمعدل اليومي
    // مع إضافة عنصر عشوائي لجعله يبدو أكثر طبيعية
    const baseIncrement = (timeDiff / 86400000) * dailyIncreaseRate; // 86400000 مللي ثانية في اليوم
    const randomFactor = Math.random() * 0.5 + 0.75; // عامل عشوائي بين 0.75 و 1.25
    const calculatedIncrement = Math.floor(baseIncrement * randomFactor);

    // إضافة زيادة عشوائية إضافية للتنوع
    const additionalIncrement = Math.floor(Math.random() * (maxIncrement - minIncrement + 1)) + minIncrement;

    // الزيادة الإجمالية (لا تقل عن الحد الأدنى)
    const totalIncrement = Math.max(minIncrement, calculatedIncrement + additionalIncrement);

    // تحديث العداد
    visitorCount += totalIncrement;

    // تحديث العرض
    updateVisitorCountDisplay();

    // تحديث الرسم البياني
    updateVisitorChart();

    // إظهار إشعار بزائر جديد بشكل عشوائي (احتمالية 20%)
    if (Math.random() < 0.2) {
        showNewVisitorNotification();
    }
}

/**
 * تحديث عدد الزوار المتصلين حاليًا
 */
function updateOnlineVisitors() {
    // الحصول على الوقت الحالي
    const now = new Date();
    const hour = now.getHours();

    // تعديل احتمالية الزيادة بناءً على وقت اليوم
    // ساعات الذروة: 10 صباحاً إلى 2 مساءً و 8 مساءً إلى 11 مساءً
    let increaseChance = 0.5; // احتمالية افتراضية

    if ((hour >= 10 && hour <= 14) || (hour >= 20 && hour <= 23)) {
        increaseChance = 0.7; // احتمالية أعلى خلال ساعات الذروة
    } else if (hour >= 2 && hour <= 6) {
        increaseChance = 0.3; // احتمالية أقل خلال ساعات الليل المتأخرة
    }

    // تحديد ما إذا كانت هناك زيادة أو نقصان
    const isIncrease = Math.random() < increaseChance;

    // تغيير عشوائي في عدد الزوار المتصلين
    let change;
    if (isIncrease) {
        change = Math.floor(Math.random() * 5) + 1; // زيادة من 1 إلى 5
    } else {
        change = -Math.floor(Math.random() * 3) - 1; // نقصان من -1 إلى -3
    }

    // تطبيق التغيير مع حد أدنى وأقصى
    onlineVisitors = Math.min(300, Math.max(120, onlineVisitors + change));

    // تحديث العرض
    const onlineVisitorsElement = document.getElementById('online-visitors');
    if (onlineVisitorsElement) {
        onlineVisitorsElement.textContent = onlineVisitors;

        // إضافة تأثير الوميض عند التحديث
        onlineVisitorsElement.classList.add('visitor-count-updated');
        setTimeout(() => {
            onlineVisitorsElement.classList.remove('visitor-count-updated');
        }, 1000);
    }

    // تحديث شريط التقدم
    updateVisitorProgressBar();
}

/**
 * تحديث عرض عداد الزوار
 */
function updateVisitorCountDisplay() {
    const visitorCountElement = document.getElementById('visitor-count');
    if (visitorCountElement) {
        // تنسيق الرقم بفواصل
        visitorCountElement.textContent = visitorCount.toLocaleString();

        // إضافة تأثير الوميض عند التحديث
        visitorCountElement.classList.add('visitor-count-updated');
        setTimeout(() => {
            visitorCountElement.classList.remove('visitor-count-updated');
        }, 1000);
    }
}

/**
 * تحديث شريط تقدم نشاط الزوار
 */
function updateVisitorProgressBar() {
    const progressBar = document.querySelector('.visitor-progress .progress-bar');
    if (progressBar) {
        // حساب النسبة المئوية (120 إلى 300 زائر = 0% إلى 100%)
        const percentage = Math.min(100, Math.max(0, (onlineVisitors - 120) / 180 * 100));

        // تحديث شريط التقدم مع تأثير انتقالي
        progressBar.style.transition = 'width 0.5s ease-in-out';
        progressBar.style.width = `${percentage}%`;
        progressBar.setAttribute('aria-valuenow', percentage);

        // تغيير لون شريط التقدم بناءً على النسبة المئوية
        if (percentage < 30) {
            progressBar.className = 'progress-bar bg-success';
        } else if (percentage < 70) {
            progressBar.className = 'progress-bar bg-warning';
        } else {
            progressBar.className = 'progress-bar bg-danger';
        }
    }
}

/**
 * إظهار إشعار بزائر جديد
 */
function showNewVisitorNotification() {
    // قائمة بالدول العشوائية
    const countries = [
        'مصر', 'السعودية', 'الإمارات', 'الكويت', 'قطر', 'البحرين', 'عمان', 'الأردن',
        'لبنان', 'العراق', 'المغرب', 'الجزائر', 'تونس', 'ليبيا', 'السودان', 'فلسطين',
        'الولايات المتحدة', 'المملكة المتحدة', 'ألمانيا', 'فرنسا', 'إيطاليا', 'إسبانيا',
        'روسيا', 'الصين', 'اليابان', 'كوريا الجنوبية', 'الهند', 'باكستان', 'تركيا'
    ];

    // اختيار دولة عشوائية
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];

    // إنشاء عنصر الإشعار
    const notification = document.createElement('div');
    notification.className = 'visitor-notification';
    notification.innerHTML = `
        <div class="visitor-notification-icon">
            <i class="fas fa-user-plus"></i>
        </div>
        <div class="visitor-notification-content">
            <p>زائر جديد من ${randomCountry}</p>
        </div>
    `;

    // إضافة الإشعار إلى الصفحة
    document.body.appendChild(notification);

    // إظهار الإشعار
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // إخفاء وإزالة الإشعار بعد 3 ثواني
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 3000);
}

/**
 * تهيئة الرسم البياني لإحصائيات الزوار
 */
function initVisitorChart() {
    const ctx = document.getElementById('visitorChart');
    if (!ctx) return;

    // إنشاء بيانات عشوائية للرسم البياني
    const labels = [];
    const data = [];

    // إنشاء بيانات لآخر 7 أيام
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);

        // تنسيق التاريخ (اليوم/الشهر)
        const day = date.getDate();
        const month = date.getMonth() + 1;
        labels.push(`${day}/${month}`);

        // عدد زوار عشوائي (بين 1000 و 5000)
        const visitors = Math.floor(Math.random() * 4000) + 1000;
        data.push(visitors);
    }

    // إنشاء الرسم البياني
    window.visitorChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'عدد الزوار',
                data: data,
                borderColor: '#00ff99',
                backgroundColor: 'rgba(0, 255, 153, 0.1)',
                borderWidth: 2,
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#fff'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#fff'
                    }
                }
            }
        }
    });
}

/**
 * تحديث الرسم البياني
 */
function updateVisitorChart() {
    if (!window.visitorChart) return;

    // إضافة قيمة جديدة عشوائية للرسم البياني
    const newValue = Math.floor(Math.random() * 1000) + 3000;

    // إزالة أول قيمة وإضافة القيمة الجديدة
    window.visitorChart.data.datasets[0].data.shift();
    window.visitorChart.data.datasets[0].data.push(newValue);

    // تحديث الرسم البياني
    window.visitorChart.update();
}

/**
 * عرض/إخفاء إحصائيات الزوار
 */
function toggleVisitorStats() {
    const statsElement = document.getElementById('visitor-stats');
    if (statsElement) {
        statsElement.classList.toggle('show');

        // تحديث الرسم البياني عند العرض
        if (statsElement.classList.contains('show') && window.visitorChart) {
            window.visitorChart.update();
        }
    }
}
