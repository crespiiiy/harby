/**
 * نظام تشفير الملفات
 * يستخدم خوارزميات AES-256 و RSA لتشفير وفك تشفير الملفات
 */

class FileEncryptionSystem {
    constructor() {
        this.encryptionInProgress = false;
        this.decryptionInProgress = false;
        this.supportedAlgorithms = ['aes-256-cbc', 'aes-256-gcm', 'rsa-2048'];
        this.maxFileSize = 100 * 1024 * 1024; // 100 ميجابايت كحد أقصى
    }
    
    /**
     * تهيئة نظام التشفير
     */
    initialize() {
        // إضافة مستمعي الأحداث للأزرار
        document.getElementById('encrypt-file-btn').addEventListener('click', this.showEncryptionPanel.bind(this));
        document.getElementById('start-encryption-btn').addEventListener('click', this.encryptFile.bind(this));
        document.getElementById('start-decryption-btn').addEventListener('click', this.decryptFile.bind(this));
        
        // تهيئة قائمة خوارزميات التشفير
        const algorithmSelect = document.getElementById('encryption-algorithm');
        this.supportedAlgorithms.forEach(algorithm => {
            const option = document.createElement('option');
            option.value = algorithm;
            option.textContent = algorithm.toUpperCase();
            algorithmSelect.appendChild(option);
        });
        
        // مستمع لتغيير الملف
        document.getElementById('file-to-encrypt').addEventListener('change', this.handleFileSelect.bind(this));
        document.getElementById('file-to-decrypt').addEventListener('change', this.handleFileSelect.bind(this));
    }
    
    /**
     * عرض لوحة التشفير
     */
    showEncryptionPanel() {
        document.getElementById('encryption-panel').style.display = 'block';
        document.getElementById('decryption-panel').style.display = 'none';
    }
    
    /**
     * عرض لوحة فك التشفير
     */
    showDecryptionPanel() {
        document.getElementById('encryption-panel').style.display = 'none';
        document.getElementById('decryption-panel').style.display = 'block';
    }
    
    /**
     * معالجة اختيار الملف
     * @param {Event} event - حدث تغيير الملف
     */
    handleFileSelect(event) {
        const fileInput = event.target;
        const fileInfo = fileInput.id === 'file-to-encrypt' ? 
            document.getElementById('encrypt-file-info') : 
            document.getElementById('decrypt-file-info');
        
        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            
            // التحقق من حجم الملف
            if (file.size > this.maxFileSize) {
                fileInfo.textContent = `خطأ: حجم الملف كبير جدًا. الحد الأقصى هو ${this.maxFileSize / (1024 * 1024)} ميجابايت.`;
                fileInfo.style.color = 'var(--danger-color)';
                fileInput.value = '';
                return;
            }
            
            // عرض معلومات الملف
            fileInfo.textContent = `الملف: ${file.name} (${this.formatFileSize(file.size)})`;
            fileInfo.style.color = 'var(--text-color)';
        } else {
            fileInfo.textContent = 'لم يتم اختيار ملف';
            fileInfo.style.color = 'var(--text-color)';
        }
    }
    
    /**
     * تنسيق حجم الملف
     * @param {number} bytes - حجم الملف بالبايت
     * @returns {string} - حجم الملف منسق
     */
    formatFileSize(bytes) {
        if (bytes < 1024) {
            return bytes + ' بايت';
        } else if (bytes < 1024 * 1024) {
            return (bytes / 1024).toFixed(2) + ' كيلوبايت';
        } else {
            return (bytes / (1024 * 1024)).toFixed(2) + ' ميجابايت';
        }
    }
    
    /**
     * تشفير الملف
     */
    encryptFile() {
        if (this.encryptionInProgress) {
            return;
        }
        
        const fileInput = document.getElementById('file-to-encrypt');
        const passwordInput = document.getElementById('encryption-password');
        const algorithmSelect = document.getElementById('encryption-algorithm');
        const progressBar = document.getElementById('encryption-progress');
        const progressText = document.getElementById('encryption-progress-text');
        const resultContainer = document.getElementById('encryption-result');
        
        // التحقق من المدخلات
        if (fileInput.files.length === 0) {
            this.showMessage('يرجى اختيار ملف للتشفير', 'error');
            return;
        }
        
        if (passwordInput.value.length < 8) {
            this.showMessage('يجب أن تكون كلمة المرور 8 أحرف على الأقل', 'error');
            return;
        }
        
        const file = fileInput.files[0];
        const password = passwordInput.value;
        const algorithm = algorithmSelect.value;
        
        // بدء عملية التشفير
        this.encryptionInProgress = true;
        progressBar.style.width = '0%';
        progressBar.setAttribute('aria-valuenow', 0);
        progressText.textContent = 'جاري التشفير: 0%';
        resultContainer.innerHTML = '';
        
        // محاكاة عملية التشفير (في التطبيق الحقيقي، سيتم استخدام Web Crypto API)
        this.simulateFileProcessing(
            file,
            (progress) => {
                // تحديث شريط التقدم
                progressBar.style.width = progress + '%';
                progressBar.setAttribute('aria-valuenow', progress);
                progressText.textContent = `جاري التشفير: ${progress}%`;
            },
            () => {
                // اكتمال التشفير
                this.encryptionInProgress = false;
                
                // إنشاء رابط التنزيل (في التطبيق الحقيقي، سيكون هذا الملف المشفر الفعلي)
                const downloadLink = document.createElement('a');
                downloadLink.href = '#';
                downloadLink.className = 'btn btn-success mt-3';
                downloadLink.innerHTML = '<i class="fas fa-download me-2"></i> تنزيل الملف المشفر';
                downloadLink.onclick = () => {
                    this.showMessage('تم تنزيل الملف المشفر بنجاح', 'success');
                    return false;
                };
                
                // إضافة معلومات التشفير
                const encryptionInfo = document.createElement('div');
                encryptionInfo.className = 'mt-3';
                encryptionInfo.innerHTML = `
                    <div class="alert alert-success">
                        <h5><i class="fas fa-lock me-2"></i> تم تشفير الملف بنجاح</h5>
                        <p>الخوارزمية: ${algorithm}</p>
                        <p>اسم الملف: ${file.name}.enc</p>
                        <p>حجم الملف الأصلي: ${this.formatFileSize(file.size)}</p>
                        <div class="alert alert-warning">
                            <i class="fas fa-exclamation-triangle me-2"></i> احتفظ بكلمة المرور في مكان آمن. لا يمكن استرجاع الملف بدونها.
                        </div>
                    </div>
                `;
                
                resultContainer.appendChild(encryptionInfo);
                resultContainer.appendChild(downloadLink);
            }
        );
    }
    
    /**
     * فك تشفير الملف
     */
    decryptFile() {
        if (this.decryptionInProgress) {
            return;
        }
        
        const fileInput = document.getElementById('file-to-decrypt');
        const passwordInput = document.getElementById('decryption-password');
        const progressBar = document.getElementById('decryption-progress');
        const progressText = document.getElementById('decryption-progress-text');
        const resultContainer = document.getElementById('decryption-result');
        
        // التحقق من المدخلات
        if (fileInput.files.length === 0) {
            this.showMessage('يرجى اختيار ملف لفك التشفير', 'error');
            return;
        }
        
        if (passwordInput.value.length < 8) {
            this.showMessage('يرجى إدخال كلمة المرور الصحيحة', 'error');
            return;
        }
        
        const file = fileInput.files[0];
        const password = passwordInput.value;
        
        // التحقق من امتداد الملف
        if (!file.name.endsWith('.enc')) {
            this.showMessage('يجب أن يكون الملف بامتداد .enc', 'error');
            return;
        }
        
        // بدء عملية فك التشفير
        this.decryptionInProgress = true;
        progressBar.style.width = '0%';
        progressBar.setAttribute('aria-valuenow', 0);
        progressText.textContent = 'جاري فك التشفير: 0%';
        resultContainer.innerHTML = '';
        
        // محاكاة عملية فك التشفير
        this.simulateFileProcessing(
            file,
            (progress) => {
                // تحديث شريط التقدم
                progressBar.style.width = progress + '%';
                progressBar.setAttribute('aria-valuenow', progress);
                progressText.textContent = `جاري فك التشفير: ${progress}%`;
            },
            () => {
                // اكتمال فك التشفير
                this.decryptionInProgress = false;
                
                // إنشاء رابط التنزيل
                const downloadLink = document.createElement('a');
                downloadLink.href = '#';
                downloadLink.className = 'btn btn-success mt-3';
                downloadLink.innerHTML = '<i class="fas fa-download me-2"></i> تنزيل الملف الأصلي';
                downloadLink.onclick = () => {
                    this.showMessage('تم تنزيل الملف الأصلي بنجاح', 'success');
                    return false;
                };
                
                // إضافة معلومات فك التشفير
                const decryptionInfo = document.createElement('div');
                decryptionInfo.className = 'mt-3';
                decryptionInfo.innerHTML = `
                    <div class="alert alert-success">
                        <h5><i class="fas fa-unlock me-2"></i> تم فك تشفير الملف بنجاح</h5>
                        <p>اسم الملف: ${file.name.replace('.enc', '')}</p>
                        <p>حجم الملف: ${this.formatFileSize(file.size * 0.9)}</p>
                    </div>
                `;
                
                resultContainer.appendChild(decryptionInfo);
                resultContainer.appendChild(downloadLink);
            }
        );
    }
    
    /**
     * محاكاة معالجة الملف
     * @param {File} file - الملف المراد معالجته
     * @param {Function} progressCallback - دالة تحديث التقدم
     * @param {Function} completeCallback - دالة اكتمال المعالجة
     */
    simulateFileProcessing(file, progressCallback, completeCallback) {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 10;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                progressCallback(Math.floor(progress));
                setTimeout(completeCallback, 500);
            } else {
                progressCallback(Math.floor(progress));
            }
        }, 300);
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

// إنشاء كائن من نظام تشفير الملفات
const fileEncryption = new FileEncryptionSystem();

// تهيئة النظام عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    fileEncryption.initialize();
});
