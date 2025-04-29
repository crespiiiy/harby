/**
 * نظام المكافآت وتحديات القرصنة الأخلاقية
 * يدير برنامج مكافآت اكتشاف الثغرات وتحديات القرصنة الأخلاقية
 */

class RewardsAndChallengesSystem {
    constructor() {
        // قائمة التحديات
        this.challenges = [
            {
                id: 1,
                title: 'اكتشاف ثغرة XSS',
                description: 'اكتشف ثغرة XSS في تطبيق الويب التجريبي وقم بتنفيذ سكريبت يعرض تنبيهًا.',
                difficulty: 'سهل',
                points: 100,
                category: 'web',
                status: 'متاح'
            },
            {
                id: 2,
                title: 'تجاوز المصادقة',
                description: 'اكتشف طريقة لتجاوز نظام المصادقة في التطبيق التجريبي.',
                difficulty: 'متوسط',
                points: 250,
                category: 'web',
                status: 'متاح'
            },
            {
                id: 3,
                title: 'هندسة عكسية لتطبيق أندرويد',
                description: 'قم بتفكيك تطبيق أندرويد واستخراج المفاتيح المخفية.',
                difficulty: 'صعب',
                points: 500,
                category: 'mobile',
                status: 'متاح'
            },
            {
                id: 4,
                title: 'تحليل الشبكة',
                description: 'قم بتحليل حركة مرور الشبكة واكتشف البيانات المسربة.',
                difficulty: 'متوسط',
                points: 300,
                category: 'network',
                status: 'متاح'
            },
            {
                id: 5,
                title: 'اختراق نظام لينكس',
                description: 'اكتشف ثغرة في نظام لينكس واحصل على صلاحيات الجذر.',
                difficulty: 'صعب',
                points: 600,
                category: 'system',
                status: 'قريبًا'
            },
            {
                id: 6,
                title: 'تحليل ثغرات SQL Injection',
                description: 'اكتشف واستغل ثغرات حقن SQL في قاعدة بيانات تجريبية واستخرج بيانات حساسة.',
                difficulty: 'متوسط',
                points: 400,
                category: 'database',
                status: 'متاح'
            },
            {
                id: 7,
                title: 'اختراق شبكة Wi-Fi',
                description: 'قم باختراق شبكة Wi-Fi محمية بتقنية WPA2 باستخدام هجمات القوة الغاشمة وتقنيات متقدمة.',
                difficulty: 'صعب',
                points: 700,
                category: 'network',
                status: 'متاح'
            },
            {
                id: 8,
                title: 'تحليل برمجيات خبيثة',
                description: 'قم بتحليل عينة من البرمجيات الخبيثة وتحديد آلية عملها وطرق الوقاية منها.',
                difficulty: 'خبير',
                points: 800,
                category: 'malware',
                status: 'متاح'
            }
        ];

        // قائمة المكافآت
        this.rewards = [
            {
                id: 1,
                title: 'شهادة اختراق أخلاقي',
                description: 'شهادة معتمدة في الاختراق الأخلاقي',
                points: 1000,
                image: 'certificate.png'
            },
            {
                id: 2,
                title: 'قسيمة شراء بقيمة 50 دولار',
                description: 'قسيمة شراء يمكن استخدامها في أي من خدماتنا',
                points: 2000,
                image: 'voucher.png'
            },
            {
                id: 3,
                title: 'عضوية VIP لمدة شهر',
                description: 'عضوية VIP تتيح لك الوصول إلى جميع الخدمات المتميزة',
                points: 3000,
                image: 'vip.png'
            },
            {
                id: 4,
                title: 'جهاز Raspberry Pi',
                description: 'جهاز Raspberry Pi 4 مع ملحقاته',
                points: 5000,
                image: 'raspberry.png'
            },
            {
                id: 5,
                title: 'لقب "صياد الثغرات"',
                description: 'لقب خاص يظهر بجانب اسمك في المنتدى',
                points: 1500,
                image: 'badge.png'
            },
            {
                id: 6,
                title: 'دورة تدريبية متقدمة',
                description: 'دورة تدريبية متقدمة في الأمن السيبراني مع شهادة معتمدة',
                points: 4000,
                image: 'course.png'
            },
            {
                id: 7,
                title: 'أدوات اختراق متقدمة',
                description: 'مجموعة من أدوات الاختراق المتقدمة والمرخصة للاستخدام في الاختبارات الأمنية',
                points: 6000,
                image: 'tools.png'
            },
            {
                id: 8,
                title: 'مكافأة نقدية',
                description: 'مكافأة نقدية بقيمة 100 دولار تحول إلى حسابك',
                points: 8000,
                image: 'money.png'
            }
        ];

        // قائمة الإنجازات
        this.achievements = [
            {
                id: 1,
                title: 'المبتدئ',
                description: 'أكمل تحديًا واحدًا',
                icon: 'fas fa-award'
            },
            {
                id: 2,
                title: 'المحترف',
                description: 'أكمل 5 تحديات',
                icon: 'fas fa-trophy'
            },
            {
                id: 3,
                title: 'الخبير',
                description: 'أكمل 10 تحديات',
                icon: 'fas fa-crown'
            },
            {
                id: 4,
                title: 'صياد الثغرات',
                description: 'اكتشف 3 ثغرات أمنية',
                icon: 'fas fa-bug'
            },
            {
                id: 5,
                title: 'المساهم',
                description: 'قدم 5 اقتراحات لتحسين الأمان',
                icon: 'fas fa-lightbulb'
            }
        ];

        // بيانات المستخدم (في التطبيق الحقيقي، ستأتي من قاعدة البيانات)
        this.userData = {
            points: 750,
            completedChallenges: [1],
            unlockedAchievements: [1],
            submittedVulnerabilities: 1
        };
    }

    /**
     * تهيئة نظام المكافآت والتحديات
     */
    initialize() {
        // عرض بيانات المستخدم
        this.displayUserData();

        // عرض التحديات
        this.displayChallenges();

        // عرض المكافآت
        this.displayRewards();

        // عرض الإنجازات
        this.displayAchievements();

        // إضافة مستمعي الأحداث
        document.getElementById('submit-vulnerability-btn').addEventListener('click', this.showSubmitVulnerabilityModal.bind(this));
        document.getElementById('submit-vulnerability-form').addEventListener('submit', this.submitVulnerability.bind(this));
    }

    /**
     * عرض بيانات المستخدم
     */
    displayUserData() {
        document.getElementById('user-points').textContent = this.userData.points;
        document.getElementById('completed-challenges').textContent = this.userData.completedChallenges.length;
        document.getElementById('unlocked-achievements').textContent = this.userData.unlockedAchievements.length;
        document.getElementById('submitted-vulnerabilities').textContent = this.userData.submittedVulnerabilities;
    }

    /**
     * عرض التحديات
     */
    displayChallenges() {
        const challengesContainer = document.getElementById('challenges-container');
        challengesContainer.innerHTML = '';

        this.challenges.forEach(challenge => {
            const card = document.createElement('div');
            card.className = 'col-md-6 col-lg-4 mb-4';

            // تحديد حالة التحدي
            let statusClass = 'bg-success';
            let statusIcon = 'fas fa-unlock';

            if (challenge.status === 'قريبًا') {
                statusClass = 'bg-secondary';
                statusIcon = 'fas fa-lock';
            } else if (this.userData.completedChallenges.includes(challenge.id)) {
                statusClass = 'bg-primary';
                statusIcon = 'fas fa-check';
            }

            // إنشاء بطاقة التحدي
            card.innerHTML = `
                <div class="card h-100">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">${challenge.title}</h5>
                        <span class="badge ${statusClass}">
                            <i class="${statusIcon} me-1"></i> ${this.userData.completedChallenges.includes(challenge.id) ? 'مكتمل' : challenge.status}
                        </span>
                    </div>
                    <div class="card-body">
                        <p class="card-text">${challenge.description}</p>
                        <div class="d-flex justify-content-between">
                            <span class="badge bg-info">
                                <i class="fas fa-tag me-1"></i> ${challenge.category}
                            </span>
                            <span class="badge bg-warning text-dark">
                                <i class="fas fa-star me-1"></i> ${challenge.difficulty}
                            </span>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <span>
                            <i class="fas fa-coins me-1"></i> ${challenge.points} نقطة
                        </span>
                        <button class="btn btn-sm btn-primary" ${challenge.status === 'قريبًا' ? 'disabled' : ''} onclick="rewardsAndChallenges.startChallenge(${challenge.id})">
                            <i class="fas fa-play me-1"></i> بدء التحدي
                        </button>
                    </div>
                </div>
            `;

            challengesContainer.appendChild(card);
        });
    }

    /**
     * عرض المكافآت
     */
    displayRewards() {
        const rewardsContainer = document.getElementById('rewards-container');
        rewardsContainer.innerHTML = '';

        this.rewards.forEach(reward => {
            const card = document.createElement('div');
            card.className = 'col-md-6 col-lg-4 mb-4';

            // تحديد حالة المكافأة
            const isUnlocked = this.userData.points >= reward.points;

            // إنشاء بطاقة المكافأة
            card.innerHTML = `
                <div class="card h-100 ${isUnlocked ? 'border-success' : ''}">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">${reward.title}</h5>
                        <span class="badge ${isUnlocked ? 'bg-success' : 'bg-secondary'}">
                            <i class="fas ${isUnlocked ? 'fa-unlock' : 'fa-lock'} me-1"></i> ${isUnlocked ? 'متاح' : 'مقفل'}
                        </span>
                    </div>
                    <div class="card-body text-center">
                        <img src="images/${reward.image}" alt="${reward.title}" class="img-fluid mb-3" style="max-height: 100px;">
                        <p class="card-text">${reward.description}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <span>
                            <i class="fas fa-coins me-1"></i> ${reward.points} نقطة
                        </span>
                        <button class="btn btn-sm ${isUnlocked ? 'btn-success' : 'btn-secondary'}" ${isUnlocked ? '' : 'disabled'} onclick="rewardsAndChallenges.claimReward(${reward.id})">
                            <i class="fas fa-gift me-1"></i> الحصول على المكافأة
                        </button>
                    </div>
                </div>
            `;

            rewardsContainer.appendChild(card);
        });
    }

    /**
     * عرض الإنجازات
     */
    displayAchievements() {
        const achievementsContainer = document.getElementById('achievements-container');
        achievementsContainer.innerHTML = '';

        this.achievements.forEach(achievement => {
            const isUnlocked = this.userData.unlockedAchievements.includes(achievement.id);

            const achievementElement = document.createElement('div');
            achievementElement.className = 'col-md-6 col-lg-4 mb-4';

            achievementElement.innerHTML = `
                <div class="achievement-card ${isUnlocked ? 'unlocked' : 'locked'}">
                    <div class="achievement-icon">
                        <i class="${achievement.icon}"></i>
                    </div>
                    <div class="achievement-info">
                        <h5>${achievement.title}</h5>
                        <p>${achievement.description}</p>
                    </div>
                    <div class="achievement-status">
                        <i class="fas ${isUnlocked ? 'fa-check-circle' : 'fa-lock'}"></i>
                    </div>
                </div>
            `;

            achievementsContainer.appendChild(achievementElement);
        });
    }

    /**
     * بدء تحدي
     * @param {number} challengeId - معرف التحدي
     */
    startChallenge(challengeId) {
        const challenge = this.challenges.find(c => c.id === challengeId);

        if (!challenge || challenge.status === 'قريبًا') {
            this.showMessage('هذا التحدي غير متاح حاليًا', 'error');
            return;
        }

        if (this.userData.completedChallenges.includes(challengeId)) {
            this.showMessage('لقد أكملت هذا التحدي بالفعل', 'info');
            return;
        }

        // في التطبيق الحقيقي، سيتم توجيه المستخدم إلى صفحة التحدي
        // هنا نقوم بمحاكاة إكمال التحدي
        this.showMessage(`تم بدء التحدي: ${challenge.title}`, 'success');

        // إظهار نافذة التحدي
        document.getElementById('challenge-modal-title').textContent = challenge.title;
        document.getElementById('challenge-modal-description').textContent = challenge.description;
        document.getElementById('challenge-modal-points').textContent = challenge.points;
        document.getElementById('challenge-modal-difficulty').textContent = challenge.difficulty;
        document.getElementById('challenge-modal-category').textContent = challenge.category;

        // تعيين معرف التحدي للزر
        document.getElementById('complete-challenge-btn').setAttribute('data-challenge-id', challengeId);

        // عرض النافذة
        const challengeModal = new bootstrap.Modal(document.getElementById('challenge-modal'));
        challengeModal.show();
    }

    /**
     * إكمال تحدي
     * @param {number} challengeId - معرف التحدي
     */
    completeChallenge(challengeId) {
        const challenge = this.challenges.find(c => c.id === parseInt(challengeId));

        if (!challenge) {
            this.showMessage('حدث خطأ أثناء إكمال التحدي', 'error');
            return;
        }

        // إضافة التحدي إلى قائمة التحديات المكتملة
        if (!this.userData.completedChallenges.includes(challenge.id)) {
            this.userData.completedChallenges.push(challenge.id);

            // إضافة النقاط
            this.userData.points += challenge.points;

            // التحقق من الإنجازات
            this.checkAchievements();

            // تحديث واجهة المستخدم
            this.displayUserData();
            this.displayChallenges();
            this.displayRewards();

            // عرض رسالة النجاح
            this.showMessage(`تم إكمال التحدي بنجاح! حصلت على ${challenge.points} نقطة`, 'success');
        } else {
            this.showMessage('لقد أكملت هذا التحدي بالفعل', 'info');
        }

        // إغلاق النافذة
        const challengeModal = bootstrap.Modal.getInstance(document.getElementById('challenge-modal'));
        challengeModal.hide();
    }

    /**
     * الحصول على مكافأة
     * @param {number} rewardId - معرف المكافأة
     */
    claimReward(rewardId) {
        const reward = this.rewards.find(r => r.id === rewardId);

        if (!reward) {
            this.showMessage('حدث خطأ أثناء الحصول على المكافأة', 'error');
            return;
        }

        // التحقق من النقاط
        if (this.userData.points < reward.points) {
            this.showMessage('ليس لديك نقاط كافية للحصول على هذه المكافأة', 'error');
            return;
        }

        // في التطبيق الحقيقي، سيتم خصم النقاط وإرسال المكافأة
        // هنا نقوم بمحاكاة الحصول على المكافأة
        this.showMessage(`تم الحصول على المكافأة: ${reward.title}`, 'success');

        // إظهار نافذة المكافأة
        document.getElementById('reward-modal-title').textContent = reward.title;
        document.getElementById('reward-modal-description').textContent = reward.description;
        document.getElementById('reward-modal-points').textContent = reward.points;
        document.getElementById('reward-modal-image').src = `images/${reward.image}`;

        // عرض النافذة
        const rewardModal = new bootstrap.Modal(document.getElementById('reward-modal'));
        rewardModal.show();
    }

    /**
     * عرض نافذة تقديم ثغرة
     */
    showSubmitVulnerabilityModal() {
        const modal = new bootstrap.Modal(document.getElementById('submit-vulnerability-modal'));
        modal.show();
    }

    /**
     * تقديم ثغرة
     * @param {Event} event - حدث النموذج
     */
    submitVulnerability(event) {
        event.preventDefault();

        const vulnerabilityType = document.getElementById('vulnerability-type').value;
        const vulnerabilityDescription = document.getElementById('vulnerability-description').value;
        const vulnerabilitySeverity = document.getElementById('vulnerability-severity').value;

        // التحقق من المدخلات
        if (!vulnerabilityType || !vulnerabilityDescription || !vulnerabilitySeverity) {
            this.showMessage('يرجى ملء جميع الحقول المطلوبة', 'error');
            return;
        }

        // في التطبيق الحقيقي، سيتم إرسال البيانات إلى الخادم
        // هنا نقوم بمحاكاة تقديم الثغرة
        this.userData.submittedVulnerabilities++;

        // إضافة نقاط بناءً على الخطورة
        let points = 0;
        switch (vulnerabilitySeverity) {
            case 'critical':
                points = 1000;
                break;
            case 'high':
                points = 500;
                break;
            case 'medium':
                points = 250;
                break;
            case 'low':
                points = 100;
                break;
            default:
                points = 50;
        }

        this.userData.points += points;

        // التحقق من الإنجازات
        this.checkAchievements();

        // تحديث واجهة المستخدم
        this.displayUserData();
        this.displayRewards();

        // عرض رسالة النجاح
        this.showMessage(`تم تقديم الثغرة بنجاح! حصلت على ${points} نقطة`, 'success');

        // إغلاق النافذة
        const modal = bootstrap.Modal.getInstance(document.getElementById('submit-vulnerability-modal'));
        modal.hide();

        // إعادة تعيين النموذج
        document.getElementById('submit-vulnerability-form').reset();
    }

    /**
     * التحقق من الإنجازات
     */
    checkAchievements() {
        // التحقق من إنجاز "المبتدئ"
        if (this.userData.completedChallenges.length >= 1 && !this.userData.unlockedAchievements.includes(1)) {
            this.userData.unlockedAchievements.push(1);
            this.showAchievementNotification(this.achievements[0]);
        }

        // التحقق من إنجاز "المحترف"
        if (this.userData.completedChallenges.length >= 5 && !this.userData.unlockedAchievements.includes(2)) {
            this.userData.unlockedAchievements.push(2);
            this.showAchievementNotification(this.achievements[1]);
        }

        // التحقق من إنجاز "الخبير"
        if (this.userData.completedChallenges.length >= 10 && !this.userData.unlockedAchievements.includes(3)) {
            this.userData.unlockedAchievements.push(3);
            this.showAchievementNotification(this.achievements[2]);
        }

        // التحقق من إنجاز "صياد الثغرات"
        if (this.userData.submittedVulnerabilities >= 3 && !this.userData.unlockedAchievements.includes(4)) {
            this.userData.unlockedAchievements.push(4);
            this.showAchievementNotification(this.achievements[3]);
        }
    }

    /**
     * عرض إشعار الإنجاز
     * @param {Object} achievement - الإنجاز
     */
    showAchievementNotification(achievement) {
        // إنشاء عنصر الإشعار
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div class="achievement-notification-icon">
                <i class="${achievement.icon}"></i>
            </div>
            <div class="achievement-notification-info">
                <h5>إنجاز جديد!</h5>
                <p>${achievement.title}: ${achievement.description}</p>
            </div>
        `;

        // إضافة الإشعار إلى الصفحة
        document.body.appendChild(notification);

        // إظهار الإشعار
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        // إخفاء الإشعار بعد 5 ثوانٍ
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }, 5000);
    }

    /**
     * عرض رسالة للمستخدم
     * @param {string} message - نص الرسالة
     * @param {string} type - نوع الرسالة (success, error, info)
     */
    showMessage(message, type) {
        const toast = document.getElementById('toast');
        const toastBody = toast.querySelector('.toast-body');

        // تعيين نص الرسالة
        toastBody.textContent = message;

        // تعيين لون الرسالة حسب النوع
        toast.className = 'toast';
        if (type === 'error') {
            toast.classList.add('bg-danger', 'text-white');
        } else if (type === 'success') {
            toast.classList.add('bg-success', 'text-white');
        } else {
            toast.classList.add('bg-info', 'text-white');
        }

        // عرض الرسالة
        const bsToast = new bootstrap.Toast(toast);
        bsToast.show();
    }
}

// إنشاء كائن من نظام المكافآت والتحديات
const rewardsAndChallenges = new RewardsAndChallengesSystem();

// تهيئة النظام عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    rewardsAndChallenges.initialize();

    // إضافة مستمع لزر إكمال التحدي
    document.getElementById('complete-challenge-btn').addEventListener('click', function() {
        const challengeId = this.getAttribute('data-challenge-id');
        rewardsAndChallenges.completeChallenge(challengeId);
    });
});
