/**
 * نظام الذكاء الاصطناعي للدردشة
 * يستخدم تقنيات معالجة اللغة الطبيعية للرد على استفسارات المستخدمين
 * ويوفر واجهة دردشة تفاعلية للزوار
 */

class AIChatSystem {
    constructor() {
        this.currentLanguage = 'ar'; // Default language is Arabic
        this.chatHistory = []; // سجل المحادثة
        this.typingDelay = true; // تأخير الكتابة لمحاكاة الرد البشري

        this.responses = {
            // أسئلة عامة بالعربية
            'general_ar': {
                'سلام|مرحبا|اهلا': 'مرحباً بك في منصة القبعة الخضراء! كيف يمكنني مساعدتك اليوم؟',
                'شكرا|شكراً': 'العفو! سعداء بخدمتك دائماً.',
                'من انت|ما هو اسمك': 'أنا المساعد الذكي لمنصة القبعة الخضراء، هنا لمساعدتك في جميع استفساراتك.',
                'كيف حالك|كيفك': 'أنا بخير، شكراً للسؤال! كيف يمكنني مساعدتك؟',
                'وداعا|باي|الى اللقاء': 'شكراً لتواصلك معنا! نتمنى لك يوماً سعيداً.'
            },

            // أسئلة متعلقة بالخدمات بالعربية
            'services_ar': {
                'خدمات|خدماتكم|ماذا تقدمون': 'نقدم مجموعة متنوعة من الخدمات الأمنية مثل تشفير الملفات، تحليل الثغرات، استرجاع الحسابات، وأدوات الاختراق الأخلاقي. يمكنك الاطلاع على القائمة الكاملة في صفحة الخدمات.',
                'سعر|تكلفة|اسعار': 'تبدأ أسعار خدماتنا من 5 دولار وتختلف حسب نوع الخدمة. يمكنك الاطلاع على الأسعار التفصيلية في قائمة الخدمات.',
                'تشفير|تشفير الملفات': 'نقدم خدمة تشفير الملفات باستخدام خوارزميات AES-256 وRSA. يمكنك تشفير أي ملف بسهولة من خلال منصتنا مع ضمان الخصوصية التامة.',
                'تحليل ثغرات|فحص ثغرات': 'خدمة تحليل الثغرات تقوم بفحص شامل للمواقع والتطبيقات لاكتشاف نقاط الضعف المحتملة وتقديم تقرير مفصل مع توصيات للإصلاح.',
                'استرجاع حساب|استعادة حساب': 'نقدم خدمة استرجاع الحسابات المخترقة أو المفقودة على مختلف المنصات. نستخدم تقنيات آمنة وقانونية لاستعادة حساباتك.',
                'اختراق اخلاقي|قرصنة اخلاقية': 'نقدم خدمات الاختراق الأخلاقي لاختبار أنظمة الحماية وتحديد نقاط الضعف. جميع خدماتنا تتم وفق الأطر القانونية وبموافقة مسبقة من العميل.'
            },

            // أسئلة متعلقة بالدفع بالعربية
            'payment_ar': {
                'دفع|طرق الدفع|وسائل الدفع': 'نقبل مجموعة متنوعة من وسائل الدفع بما في ذلك البطاقات الائتمانية، المحافظ الإلكترونية، والعملات المشفرة. يمكنك اختيار وسيلة الدفع المناسبة لك عند إتمام الطلب.',
                'بيتكوين|عملات رقمية|كريبتو': 'نعم، نقبل الدفع بالعملات الرقمية مثل البيتكوين، الإيثريوم، وBNB. هذه الطريقة توفر خصوصية إضافية وسرعة في التحويل.',
                'استرداد|استرجاع المال': 'نقدم ضمان استرداد المال خلال 24 ساعة في حال عدم تقديم الخدمة بالشكل المطلوب. يرجى التواصل مع فريق الدعم لمزيد من التفاصيل.'
            },

            // أسئلة متعلقة بالأمان بالعربية
            'security_ar': {
                'امان|امن|حماية': 'نستخدم أحدث تقنيات التشفير وبروتوكولات الأمان لحماية بياناتك. جميع الاتصالات مشفرة بتقنية SSL/TLS وبياناتك محمية بتشفير من طرف إلى طرف.',
                'خصوصية|سرية': 'نحن نلتزم بسياسة خصوصية صارمة. لا نشارك بياناتك مع أي طرف ثالث ولا نحتفظ بأي معلومات حساسة بعد إتمام الخدمة.',
                'قانوني|شرعي': 'جميع خدماتنا قانونية وتستخدم فقط للأغراض الأخلاقية والتعليمية. نحن نلتزم بالقوانين والتشريعات المحلية والدولية.'
            },

            // أسئلة متعلقة بالدعم بالعربية
            'support_ar': {
                'مشكلة|مساعدة|دعم': 'يسعدنا مساعدتك في حل أي مشكلة تواجهها. يرجى وصف المشكلة بالتفصيل وسيقوم فريق الدعم الفني بالرد عليك في أقرب وقت.',
                'تواصل|اتصال': 'يمكنك التواصل معنا عبر البريد الإلكتروني support@greenhat.com أو عبر حساب التيليجرام الرسمي @GreenHat_Support.',
                'وقت الرد|مدة الانتظار': 'نسعى للرد على جميع الاستفسارات خلال 24 ساعة كحد أقصى. معظم الاستفسارات يتم الرد عليها خلال ساعات قليلة.'
            },

            // أسئلة متعلقة بالميزات الجديدة بالعربية
            'features_ar': {
                'تشفير ملفات|تشفير الملفات': 'خدمة تشفير الملفات تتيح لك تشفير أي ملف باستخدام خوارزميات AES-256 أو RSA. يمكنك تحميل الملف، اختيار طريقة التشفير، وتحديد كلمة مرور آمنة. سيتم تشفير الملف وإتاحته للتنزيل مع ضمان الخصوصية التامة.',
                'واجهة ثلاثية|ثلاثية الابعاد|3d': 'الواجهة ثلاثية الأبعاد هي ميزة متقدمة تتيح لك تصور البيانات والخدمات بشكل مرئي وتفاعلي. يمكنك التنقل في بيئة افتراضية ثلاثية الأبعاد للوصول إلى الخدمات المختلفة بطريقة مبتكرة.',
                'تحليل ثغرات|فحص ثغرات': 'أداة تحليل الثغرات تقوم بفحص شامل للمواقع والتطبيقات لاكتشاف نقاط الضعف المحتملة. تقدم تقريراً مفصلاً يشمل الثغرات المكتشفة، درجة خطورتها، وتوصيات للإصلاح.',
                'مكافآت|برنامج المكافآت': 'برنامج المكافآت يمنح المستخدمين نقاطاً ومكافآت مالية مقابل اكتشاف ثغرات أمنية أو تقديم اقتراحات لتحسين المنصة. كلما كانت الثغرة أكثر خطورة، كانت المكافأة أعلى.',
                'تحديات|تحديات القرصنة': 'تحديات القرصنة الأخلاقية هي سلسلة من التمارين والمهام التي تختبر مهاراتك في مجال الأمن السيبراني. تتدرج في الصعوبة وتغطي مجالات مختلفة مثل هندسة عكسية، تحليل الشبكات، واختراق الويب.',
                'عملات رقمية|تشفير العملات': 'نظام تشفير العملات الرقمية يوفر طريقة آمنة لإجراء المعاملات المالية باستخدام العملات المشفرة. يدعم النظام العديد من العملات مثل البيتكوين والإيثريوم وغيرها.'
            },

            // General questions in English
            'general_en': {
                'hello|hi|hey': 'Welcome to Green Hat Platform! How can I assist you today?',
                'thanks|thank you': 'You\'re welcome! We\'re always happy to help.',
                'who are you|what is your name': 'I am the AI assistant for Green Hat Platform, here to help you with all your inquiries.',
                'how are you': 'I\'m doing well, thank you for asking! How can I help you?',
                'goodbye|bye': 'Thank you for contacting us! Have a great day.'
            },

            // Service-related questions in English
            'services_en': {
                'services|what do you offer': 'We offer a variety of security services such as file encryption, vulnerability analysis, account recovery, and ethical hacking tools. You can view the complete list on our services page.',
                'price|cost|pricing': 'Our services start from $5 and vary depending on the type of service. You can check the detailed pricing in our services list.',
                'encryption|file encryption': 'We provide file encryption services using AES-256 and RSA algorithms. You can easily encrypt any file through our platform with complete privacy guarantee.',
                'vulnerability|vulnerability scan': 'Our vulnerability analysis service performs a comprehensive scan of websites and applications to discover potential weaknesses and provides a detailed report with recommendations for fixes.',
                'account recovery': 'We offer recovery services for hacked or lost accounts on various platforms. We use secure and legal techniques to recover your accounts.',
                'ethical hacking': 'We provide ethical hacking services to test security systems and identify vulnerabilities. All our services are conducted within legal frameworks and with prior consent from the client.'
            },

            // Payment-related questions in English
            'payment_en': {
                'payment|payment methods': 'We accept a variety of payment methods including credit cards, e-wallets, and cryptocurrencies. You can choose the payment method that suits you when completing your order.',
                'bitcoin|crypto|cryptocurrency': 'Yes, we accept payments in cryptocurrencies such as Bitcoin, Ethereum, and BNB. This method provides additional privacy and speed in transfers.',
                'refund|money back': 'We offer a money-back guarantee within 24 hours if the service is not provided as described. Please contact our support team for more details.'
            },

            // Security-related questions in English
            'security_en': {
                'security|secure|protection': 'We use the latest encryption technologies and security protocols to protect your data. All communications are encrypted with SSL/TLS technology and your data is protected with end-to-end encryption.',
                'privacy|confidentiality': 'We adhere to a strict privacy policy. We do not share your data with any third party and do not retain any sensitive information after the service is completed.',
                'legal|legitimate': 'All our services are legal and used only for ethical and educational purposes. We comply with local and international laws and regulations.'
            },

            // Support-related questions in English
            'support_en': {
                'problem|help|support': 'We are happy to help you solve any problem you encounter. Please describe the problem in detail and our technical support team will respond to you as soon as possible.',
                'contact': 'You can contact us via email at support@greenhat.com or through our official Telegram account @GreenHat_Support.',
                'response time|waiting time': 'We aim to respond to all inquiries within 24 hours at most. Most inquiries are answered within a few hours.'
            },

            // Feature-related questions in English
            'features_en': {
                'file encryption': 'The file encryption service allows you to encrypt any file using AES-256 or RSA algorithms. You can upload the file, choose the encryption method, and set a secure password. The file will be encrypted and made available for download with complete privacy guarantee.',
                '3d interface': 'The 3D interface is an advanced feature that allows you to visualize data and services visually and interactively. You can navigate in a 3D virtual environment to access different services in an innovative way.',
                'vulnerability analysis|vulnerability scan': 'The vulnerability analysis tool performs a comprehensive scan of websites and applications to discover potential weaknesses. It provides a detailed report including discovered vulnerabilities, their severity, and recommendations for fixes.',
                'rewards|rewards program': 'The rewards program gives users points and financial rewards for discovering security vulnerabilities or providing suggestions to improve the platform. The more severe the vulnerability, the higher the reward.',
                'challenges|hacking challenges': 'Ethical hacking challenges are a series of exercises and tasks that test your skills in cybersecurity. They vary in difficulty and cover different areas such as reverse engineering, network analysis, and web hacking.',
                'cryptocurrency|crypto': 'The cryptocurrency encryption system provides a secure way to conduct financial transactions using cryptocurrencies. The system supports many currencies such as Bitcoin, Ethereum, and others.'
            }
        };

        // Fallback responses in Arabic
        this.fallbackResponses_ar = [
            "شكراً لتواصلك معنا. سأقوم بتوجيه استفسارك إلى الفريق المختص وسيتم الرد عليك قريباً.",
            "هذا سؤال مثير للاهتمام. هل يمكنك توضيح المزيد حتى نتمكن من مساعدتك بشكل أفضل؟",
            "لم أفهم استفسارك بشكل كامل. هل يمكنك إعادة صياغته بطريقة مختلفة؟",
            "يمكنك التواصل مع فريق الدعم الفني على التيليجرام @GreenHat_Support للحصول على مساعدة مخصصة.",
            "هذا الموضوع يتطلب مزيداً من التفاصيل. هل يمكنك مشاركة المزيد من المعلومات؟"
        ];

        // Fallback responses in English
        this.fallbackResponses_en = [
            "Thank you for contacting us. I will forward your inquiry to the specialized team and they will respond to you soon.",
            "That's an interesting question. Could you provide more details so we can help you better?",
            "I didn't fully understand your inquiry. Could you rephrase it differently?",
            "You can contact our technical support team on Telegram @GreenHat_Support for personalized assistance.",
            "This topic requires more details. Could you share more information?"
        ];
    }

    /**
     * تعيين اللغة الحالية
     * @param {string} language - رمز اللغة ('ar' للعربية، 'en' للإنجليزية)
     */
    setLanguage(language) {
        if (language === 'ar' || language === 'en') {
            this.currentLanguage = language;
        }
    }

    /**
     * البحث عن كلمات مفتاحية في النص
     * @param {string} text - النص المدخل
     * @param {string} keywords - الكلمات المفتاحية مفصولة بـ |
     * @returns {boolean} - هل تم العثور على كلمة مفتاحية
     */
    findKeywords(text, keywords) {
        const keywordArray = keywords.split('|');
        return keywordArray.some(keyword => text.includes(keyword));
    }

    /**
     * الحصول على رد مناسب للرسالة
     * @param {string} message - رسالة المستخدم
     * @returns {string} - الرد المناسب
     */
    getResponse(message) {
        // تحويل الرسالة إلى أحرف صغيرة وإزالة علامات الترقيم
        const normalizedMessage = message.toLowerCase()
            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

        // تحديد اللغة المحتملة للرسالة
        const messageLanguage = this.detectLanguage(normalizedMessage);

        // البحث في جميع فئات الردود باللغة المناسبة
        const categories = ['general', 'services', 'payment', 'security', 'support', 'features'];

        for (const baseCategory of categories) {
            const category = `${baseCategory}_${messageLanguage}`;

            if (this.responses[category]) {
                const categoryResponses = this.responses[category];

                for (const keywords in categoryResponses) {
                    if (this.findKeywords(normalizedMessage, keywords)) {
                        return categoryResponses[keywords];
                    }
                }
            }
        }

        // إذا لم يتم العثور على رد مناسب، استخدم رد افتراضي باللغة المناسبة
        return this.getRandomFallback(messageLanguage);
    }

    /**
     * اكتشاف لغة الرسالة
     * @param {string} message - الرسالة المراد تحليلها
     * @returns {string} - رمز اللغة ('ar' أو 'en')
     */
    detectLanguage(message) {
        // تحقق من وجود أحرف عربية في الرسالة
        const arabicPattern = /[\u0600-\u06FF]/;
        if (arabicPattern.test(message)) {
            return 'ar';
        }

        // إذا لم تكن الرسالة بالعربية، نفترض أنها بالإنجليزية
        return 'en';
    }

    /**
     * الحصول على رد افتراضي عشوائي
     * @param {string} language - رمز اللغة ('ar' أو 'en')
     * @returns {string} - رد افتراضي
     */
    getRandomFallback(language = null) {
        // استخدم اللغة المحددة أو اللغة الحالية
        const lang = language || this.currentLanguage;

        // اختر قائمة الردود الافتراضية المناسبة
        const fallbackResponses = lang === 'ar' ? this.fallbackResponses_ar : this.fallbackResponses_en;

        // اختر رد عشوائي
        const randomIndex = Math.floor(Math.random() * fallbackResponses.length);
        return fallbackResponses[randomIndex];
    }
}

    /**
     * إضافة رسالة إلى سجل المحادثة
     * @param {string} message - نص الرسالة
     * @param {string} sender - مرسل الرسالة ('user' أو 'ai')
     */
    addMessageToHistory(message, sender) {
        this.chatHistory.push({
            message: message,
            sender: sender,
            timestamp: new Date().toISOString()
        });

        // الاحتفاظ بآخر 50 رسالة فقط لتحسين الأداء
        if (this.chatHistory.length > 50) {
            this.chatHistory.shift();
        }
    }

    /**
     * الحصول على سجل المحادثة
     * @returns {Array} - سجل المحادثة
     */
    getChatHistory() {
        return this.chatHistory;
    }

    /**
     * معالجة رسالة المستخدم وإضافتها إلى سجل المحادثة
     * @param {string} message - رسالة المستخدم
     * @returns {Promise<string>} - وعد برد النظام
     */
    async processUserMessage(message) {
        // إضافة رسالة المستخدم إلى السجل
        this.addMessageToHistory(message, 'user');

        // الحصول على رد النظام
        const response = this.getResponse(message);

        // محاكاة تأخير الكتابة إذا كان مفعلاً
        if (this.typingDelay) {
            // حساب وقت التأخير بناءً على طول الرد (50-100 مللي ثانية لكل حرف)
            const delay = Math.min(2000, Math.max(500, response.length * 50));

            // إظهار مؤشر الكتابة في واجهة المستخدم
            this.showTypingIndicator();

            // انتظار التأخير
            await new Promise(resolve => setTimeout(resolve, delay));

            // إخفاء مؤشر الكتابة
            this.hideTypingIndicator();
        }

        // إضافة رد النظام إلى السجل
        this.addMessageToHistory(response, 'ai');

        return response;
    }

    /**
     * إظهار مؤشر الكتابة في واجهة المستخدم
     */
    showTypingIndicator() {
        const chatMessages = document.getElementById('chat-messages');
        if (!chatMessages) return;

        // التحقق من وجود مؤشر الكتابة
        let typingIndicator = document.getElementById('typing-indicator');

        // إنشاء مؤشر الكتابة إذا لم يكن موجوداً
        if (!typingIndicator) {
            typingIndicator = document.createElement('div');
            typingIndicator.id = 'typing-indicator';
            typingIndicator.className = 'chat-message-admin typing-indicator';
            typingIndicator.innerHTML = `
                <div class="chat-avatar">
                    <i class="fas fa-user-shield"></i>
                </div>
                <div class="chat-content">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            `;
            chatMessages.appendChild(typingIndicator);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        } else {
            typingIndicator.style.display = 'flex';
        }
    }

    /**
     * إخفاء مؤشر الكتابة في واجهة المستخدم
     */
    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.style.display = 'none';
        }
    }

    /**
     * تفعيل/تعطيل تأخير الكتابة
     * @param {boolean} enabled - حالة التفعيل
     */
    setTypingDelay(enabled) {
        this.typingDelay = enabled;
    }
}

// إنشاء كائن من نظام الدردشة الذكي
const aiChat = new AIChatSystem();

// دالة لإرسال رسالة إلى نظام الدردشة والحصول على رد
async function getAIResponse(message) {
    return await aiChat.processUserMessage(message);
}

// دالة لتغيير لغة نظام الدردشة
function setAIChatLanguage(language) {
    aiChat.setLanguage(language);
}

// دالة لإرسال رسالة في نافذة الدردشة
async function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();

    if (!message) return;

    // إضافة رسالة المستخدم إلى نافذة الدردشة
    addMessageToChat(message, 'user');

    // مسح حقل الإدخال
    input.value = '';

    // الحصول على رد النظام
    const response = await getAIResponse(message);

    // إضافة رد النظام إلى نافذة الدردشة
    addMessageToChat(response, 'admin');
}

// دالة لإضافة رسالة إلى نافذة الدردشة
function addMessageToChat(message, sender) {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;

    const messageElement = document.createElement('div');
    messageElement.className = `chat-message-${sender}`;

    if (sender === 'user') {
        messageElement.innerHTML = `
            <div class="chat-content">
                ${message}
            </div>
        `;
    } else {
        messageElement.innerHTML = `
            <div class="chat-avatar">
                <i class="fas fa-user-shield"></i>
            </div>
            <div class="chat-content">
                ${message}
            </div>
        `;
    }

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// إضافة مستمع لحدث الضغط على Enter في حقل الإدخال
document.addEventListener('DOMContentLoaded', function() {
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // تحديث لغة الدردشة عند تغيير لغة الموقع
    const languageSelector = document.getElementById('language');
    if (languageSelector) {
        languageSelector.addEventListener('change', function() {
            setAIChatLanguage(this.value);
        });
    }
});
