/**
 * نظام تشفير العملات الرقمية
 * يدير عمليات الدفع باستخدام العملات المشفرة
 */

class CryptoPaymentSystem {
    constructor() {
        this.supportedCurrencies = [
            { id: 'btc', name: 'Bitcoin', symbol: 'BTC', icon: 'fab fa-bitcoin', rate: 60000 },
            { id: 'eth', name: 'Ethereum', symbol: 'ETH', icon: 'fab fa-ethereum', rate: 3000 },
            { id: 'bnb', name: 'Binance Coin', symbol: 'BNB', icon: 'fas fa-coins', rate: 400 },
            { id: 'usdt', name: 'Tether', symbol: 'USDT', icon: 'fas fa-dollar-sign', rate: 1 },
            { id: 'xmr', name: 'Monero', symbol: 'XMR', icon: 'fas fa-user-secret', rate: 200 }
        ];
        
        this.paymentInProgress = false;
        this.currentPayment = null;
    }
    
    /**
     * تهيئة نظام الدفع بالعملات المشفرة
     */
    initialize() {
        // تهيئة قائمة العملات المدعومة
        const currencySelect = document.getElementById('crypto-currency');
        
        if (currencySelect) {
            this.supportedCurrencies.forEach(currency => {
                const option = document.createElement('option');
                option.value = currency.id;
                option.textContent = `${currency.name} (${currency.symbol})`;
                currencySelect.appendChild(option);
            });
            
            // إضافة مستمع لتغيير العملة
            currencySelect.addEventListener('change', this.updateCryptoAmount.bind(this));
        }
        
        // إضافة مستمعي الأحداث للأزرار
        const payWithCryptoBtn = document.getElementById('pay-with-crypto-btn');
        if (payWithCryptoBtn) {
            payWithCryptoBtn.addEventListener('click', this.showCryptoPaymentModal.bind(this));
        }
        
        const confirmCryptoPaymentBtn = document.getElementById('confirm-crypto-payment');
        if (confirmCryptoPaymentBtn) {
            confirmCryptoPaymentBtn.addEventListener('click', this.processCryptoPayment.bind(this));
        }
        
        // تهيئة مبلغ العملة المشفرة
        this.updateCryptoAmount();
    }
    
    /**
     * تحديث مبلغ العملة المشفرة
     */
    updateCryptoAmount() {
        const currencySelect = document.getElementById('crypto-currency');
        const amountInput = document.getElementById('payment-amount');
        const cryptoAmountElement = document.getElementById('crypto-amount');
        
        if (!currencySelect || !amountInput || !cryptoAmountElement) {
            return;
        }
        
        const selectedCurrency = this.supportedCurrencies.find(c => c.id === currencySelect.value);
        const amount = parseFloat(amountInput.value) || 0;
        
        if (selectedCurrency) {
            const cryptoAmount = amount / selectedCurrency.rate;
            cryptoAmountElement.textContent = cryptoAmount.toFixed(8);
            
            // تحديث أيقونة العملة
            const currencyIcon = document.getElementById('crypto-currency-icon');
            if (currencyIcon) {
                currencyIcon.className = selectedCurrency.icon;
            }
        }
    }
    
    /**
     * عرض نافذة الدفع بالعملات المشفرة
     */
    showCryptoPaymentModal() {
        const amountInput = document.getElementById('payment-amount');
        const amount = parseFloat(amountInput.value) || 0;
        
        if (amount <= 0) {
            this.showMessage('يرجى إدخال مبلغ صالح', 'error');
            return;
        }
        
        // تحديث مبلغ العملة المشفرة
        this.updateCryptoAmount();
        
        // إنشاء عنوان محفظة عشوائي
        const walletAddress = this.generateRandomWalletAddress();
        document.getElementById('wallet-address').textContent = walletAddress;
        
        // إنشاء رمز QR
        this.generateQRCode(walletAddress);
        
        // عرض النافذة
        const modal = new bootstrap.Modal(document.getElementById('crypto-payment-modal'));
        modal.show();
    }
    
    /**
     * معالجة الدفع بالعملات المشفرة
     */
    processCryptoPayment() {
        if (this.paymentInProgress) {
            return;
        }
        
        this.paymentInProgress = true;
        
        // تحديث واجهة المستخدم
        document.getElementById('confirm-crypto-payment').disabled = true;
        document.getElementById('crypto-payment-status').textContent = 'جاري التحقق من الدفع...';
        
        // محاكاة عملية التحقق من الدفع
        setTimeout(() => {
            // في التطبيق الحقيقي، سيتم التحقق من الدفع على الشبكة
            const success = Math.random() > 0.2; // 80% فرصة للنجاح
            
            if (success) {
                document.getElementById('crypto-payment-status').textContent = 'تم التحقق من الدفع بنجاح!';
                document.getElementById('crypto-payment-status').className = 'text-success';
                
                // إظهار زر التنزيل
                const downloadButton = document.createElement('button');
                downloadButton.className = 'btn btn-success mt-3';
                downloadButton.innerHTML = '<i class="fas fa-download me-2"></i> تنزيل المنتج';
                downloadButton.onclick = () => {
                    this.showMessage('تم تنزيل المنتج بنجاح', 'success');
                    return false;
                };
                
                document.getElementById('crypto-payment-result').innerHTML = '';
                document.getElementById('crypto-payment-result').appendChild(downloadButton);
                
                this.showMessage('تم الدفع بنجاح!', 'success');
            } else {
                document.getElementById('crypto-payment-status').textContent = 'فشل التحقق من الدفع. يرجى المحاولة مرة أخرى.';
                document.getElementById('crypto-payment-status').className = 'text-danger';
                
                document.getElementById('confirm-crypto-payment').disabled = false;
                this.showMessage('فشل الدفع. يرجى المحاولة مرة أخرى.', 'error');
            }
            
            this.paymentInProgress = false;
        }, 3000);
    }
    
    /**
     * إنشاء عنوان محفظة عشوائي
     * @returns {string} - عنوان المحفظة
     */
    generateRandomWalletAddress() {
        const currencySelect = document.getElementById('crypto-currency');
        const selectedCurrency = this.supportedCurrencies.find(c => c.id === currencySelect.value);
        
        let prefix = '';
        let length = 42;
        
        // تحديد بادئة وطول العنوان بناءً على العملة
        switch (selectedCurrency.id) {
            case 'btc':
                prefix = 'bc1q';
                length = 42;
                break;
            case 'eth':
                prefix = '0x';
                length = 42;
                break;
            case 'bnb':
                prefix = 'bnb1';
                length = 42;
                break;
            case 'usdt':
                prefix = '0x';
                length = 42;
                break;
            case 'xmr':
                prefix = '4';
                length = 95;
                break;
        }
        
        // إنشاء عنوان عشوائي
        const characters = 'abcdef0123456789';
        let address = prefix;
        
        for (let i = 0; i < length - prefix.length; i++) {
            address += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        
        return address;
    }
    
    /**
     * إنشاء رمز QR
     * @param {string} data - البيانات المراد تحويلها إلى رمز QR
     */
    generateQRCode(data) {
        // في التطبيق الحقيقي، سيتم استخدام مكتبة لإنشاء رمز QR
        // هنا نقوم بمحاكاة ذلك باستخدام صورة ثابتة
        const qrCodeElement = document.getElementById('qr-code');
        
        // إنشاء صورة QR وهمية
        qrCodeElement.innerHTML = `
            <div class="qr-code-container">
                <div class="qr-code-grid">
                    ${this.generateQRCodeGrid()}
                </div>
            </div>
        `;
    }
    
    /**
     * إنشاء شبكة رمز QR
     * @returns {string} - HTML لشبكة رمز QR
     */
    generateQRCodeGrid() {
        let grid = '';
        const size = 25;
        
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                // إنشاء نمط QR عشوائي مع بعض القواعد لجعله يبدو واقعيًا
                let isBlack = false;
                
                // الزوايا دائمًا سوداء
                if ((i < 7 && j < 7) || (i < 7 && j >= size - 7) || (i >= size - 7 && j < 7)) {
                    isBlack = true;
                }
                
                // الإطار الداخلي للزوايا دائمًا أبيض
                if ((i === 2 || i === 3 || i === 4) && (j === 2 || j === 3 || j === 4)) {
                    isBlack = false;
                }
                
                if ((i === 2 || i === 3 || i === 4) && (j === size - 5 || j === size - 4 || j === size - 3)) {
                    isBlack = false;
                }
                
                if ((i === size - 5 || i === size - 4 || i === size - 3) && (j === 2 || j === 3 || j === 4)) {
                    isBlack = false;
                }
                
                // المركز دائمًا أسود
                if ((i === 2 || i === 4) && (j === 2 || j === 3 || j === 4)) {
                    isBlack = true;
                }
                
                if ((i === 2 || i === 4) && (j === size - 5 || j === size - 4 || j === size - 3)) {
                    isBlack = true;
                }
                
                if ((i === size - 5 || i === size - 3) && (j === 2 || j === 3 || j === 4)) {
                    isBlack = true;
                }
                
                if (i === 3 && j === 3) {
                    isBlack = true;
                }
                
                if (i === 3 && j === size - 4) {
                    isBlack = true;
                }
                
                if (i === size - 4 && j === 3) {
                    isBlack = true;
                }
                
                // نمط عشوائي للباقي
                if (!((i < 7 && j < 7) || (i < 7 && j >= size - 7) || (i >= size - 7 && j < 7))) {
                    isBlack = Math.random() > 0.6;
                }
                
                grid += `<div class="qr-code-cell ${isBlack ? 'black' : 'white'}"></div>`;
            }
        }
        
        return grid;
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

// إنشاء كائن من نظام الدفع بالعملات المشفرة
const cryptoPayment = new CryptoPaymentSystem();

// تهيئة النظام عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    cryptoPayment.initialize();
});
