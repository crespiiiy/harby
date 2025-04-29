/**
 * وظائف تحديث السعر والرسوم والمبلغ الإجمالي
 */

document.addEventListener("DOMContentLoaded", function() {
    // إضافة مستمع حدث لتغيير الخدمة
    var serviceSelect = document.getElementById('service');
    if (serviceSelect) {
        serviceSelect.addEventListener('change', updatePrice);
    }
    
    // إضافة مستمع حدث لتغيير وسيلة الدفع
    var paymentMethodSelect = document.getElementById('payment-method');
    if (paymentMethodSelect) {
        paymentMethodSelect.addEventListener('change', updateAmount);
    }
});

/**
 * تحديث سعر الخدمة عند اختيار خدمة جديدة
 */
function updatePrice() {
    try {
        var serviceSelect = document.getElementById('service');
        var priceInput = document.getElementById('price');
        var feeInput = document.getElementById('fee');
        var amountInput = document.getElementById('amount');
        
        if (!serviceSelect || !priceInput || !feeInput || !amountInput) {
            console.error('لم يتم العثور على أحد العناصر المطلوبة');
            return;
        }
        
        // الحصول على السعر من الخيار المحدد
        var selectedOption = serviceSelect.options[serviceSelect.selectedIndex];
        var price = selectedOption.value ? parseFloat(selectedOption.value) : 0;
        
        // تحديث حقل السعر
        priceInput.value = price ? price.toFixed(2) : '';
        
        // حساب الرسوم (5% من السعر)
        var fee = price * 0.05;
        feeInput.value = price ? fee.toFixed(2) : '';
        
        // حساب المبلغ الإجمالي
        var amount = price + fee;
        amountInput.value = price ? amount.toFixed(2) : '';
        
        console.log('تم تحديث السعر: ' + price + ' والرسوم: ' + fee + ' والمبلغ الإجمالي: ' + amount);
    } catch (error) {
        console.error('حدث خطأ أثناء تحديث السعر:', error);
    }
}

/**
 * تحديث المبلغ الإجمالي عند تغيير وسيلة الدفع
 * يمكن إضافة رسوم إضافية حسب وسيلة الدفع
 */
function updateAmount() {
    try {
        var serviceSelect = document.getElementById('service');
        var paymentMethodSelect = document.getElementById('payment-method');
        var priceInput = document.getElementById('price');
        var feeInput = document.getElementById('fee');
        var amountInput = document.getElementById('amount');
        
        if (!serviceSelect || !paymentMethodSelect || !priceInput || !feeInput || !amountInput) {
            console.error('لم يتم العثور على أحد العناصر المطلوبة');
            return;
        }
        
        // الحصول على السعر الحالي
        var price = priceInput.value ? parseFloat(priceInput.value) : 0;
        
        // حساب الرسوم الأساسية (5% من السعر)
        var baseFee = price * 0.05;
        
        // إضافة رسوم إضافية حسب وسيلة الدفع
        var additionalFee = 0;
        var selectedPaymentMethod = paymentMethodSelect.value;
        
        if (selectedPaymentMethod.includes('Crypto') || 
            selectedPaymentMethod.includes('Bitcoin') || 
            selectedPaymentMethod.includes('USDT')) {
            // رسوم إضافية للعملات المشفرة
            additionalFee = price * 0.01;
        }
        
        // إجمالي الرسوم
        var totalFee = baseFee + additionalFee;
        feeInput.value = price ? totalFee.toFixed(2) : '';
        
        // حساب المبلغ الإجمالي
        var amount = price + totalFee;
        amountInput.value = price ? amount.toFixed(2) : '';
        
        console.log('تم تحديث المبلغ الإجمالي: ' + amount + ' بعد إضافة رسوم إضافية: ' + additionalFee);
    } catch (error) {
        console.error('حدث خطأ أثناء تحديث المبلغ الإجمالي:', error);
    }
}
