/**
 * نظام الواجهة ثلاثية الأبعاد
 * يوفر واجهة تفاعلية ثلاثية الأبعاد لعرض البيانات والخدمات
 */

class Interface3D {
    constructor() {
        this.container = null;
        this.camera = null;
        this.scene = null;
        this.renderer = null;
        this.controls = null;
        this.raycaster = null;
        this.mouse = null;
        this.objects = [];
        this.selectedObject = null;
        this.isInitialized = false;

        // بيانات الخدمات
        this.services = [
            { id: 1, name: 'تشفير الملفات', icon: 'lock', color: 0x00ff99, position: { x: -5, y: 2, z: 0 } },
            { id: 2, name: 'تحليل الثغرات', icon: 'search', color: 0xff3547, position: { x: 0, y: 2, z: -5 } },
            { id: 3, name: 'المكافآت والتحديات', icon: 'trophy', color: 0xffbb33, position: { x: 5, y: 2, z: 0 } },
            { id: 4, name: 'الدفع بالعملات المشفرة', icon: 'coins', color: 0x33b5e5, position: { x: 0, y: 2, z: 5 } },
            { id: 5, name: 'استرجاع الحسابات', icon: 'user-shield', color: 0x9933CC, position: { x: -3, y: 0, z: -3 } },
            { id: 6, name: 'أدوات الاختراق الأخلاقي', icon: 'terminal', color: 0x00C851, position: { x: 3, y: 0, z: -3 } },
            { id: 7, name: 'شراء أرقام دائمة', icon: 'phone', color: 0xFF8800, position: { x: 3, y: 0, z: 3 } },
            { id: 8, name: 'تطبيقات الهاتف', icon: 'mobile-alt', color: 0x2BBBAD, position: { x: -3, y: 0, z: 3 } }
        ];
    }

    /**
     * تهيئة الواجهة ثلاثية الأبعاد
     */
    initialize() {
        // التحقق من دعم WebGL
        if (!this.checkWebGLSupport()) {
            document.getElementById('3d-interface-container').innerHTML = `
                <div class="alert alert-warning">
                    <i class="fas fa-exclamation-triangle me-2"></i>
                    متصفحك لا يدعم WebGL. يرجى تحديث المتصفح أو تمكين WebGL.
                </div>
            `;
            return;
        }

        // تهيئة الحاوية
        this.container = document.getElementById('3d-interface-container');

        // تهيئة المشهد
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x1a1a2e);

        // تهيئة الكاميرا
        this.camera = new THREE.PerspectiveCamera(75, this.container.clientWidth / this.container.clientHeight, 0.1, 1000);
        this.camera.position.set(0, 5, 10);

        // تهيئة العارض
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);

        // تهيئة التحكم
        try {
            if (typeof THREE.OrbitControls === 'function') {
                this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
                this.controls.enableDamping = true;
                this.controls.dampingFactor = 0.05;
                this.controls.screenSpacePanning = false;
                this.controls.minDistance = 5;
                this.controls.maxDistance = 20;
                this.controls.maxPolarAngle = Math.PI / 2;
            } else {
                console.error('THREE.OrbitControls غير معرّف. تأكد من تحميل المكتبة بشكل صحيح.');
            }
        } catch (error) {
            console.error('حدث خطأ أثناء تهيئة OrbitControls:', error);
        }

        // تهيئة Raycaster للتفاعل
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();

        // إضافة الإضاءة
        this.addLights();

        // إضافة الأرضية
        this.addFloor();

        // إضافة الخدمات
        this.addServices();

        // إضافة الخلفية
        this.addBackground();

        // إضافة مستمعي الأحداث
        window.addEventListener('resize', this.onWindowResize.bind(this));
        this.container.addEventListener('mousemove', this.onMouseMove.bind(this));
        this.container.addEventListener('click', this.onClick.bind(this));

        // بدء حلقة الرسم
        this.animate();

        this.isInitialized = true;
    }

    /**
     * التحقق من دعم WebGL
     * @returns {boolean} - هل يدعم المتصفح WebGL
     */
    checkWebGLSupport() {
        try {
            const canvas = document.createElement('canvas');
            return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
        } catch (e) {
            return false;
        }
    }

    /**
     * إضافة الإضاءة
     */
    addLights() {
        // إضاءة محيطة
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        // إضاءة اتجاهية
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(0, 10, 5);
        this.scene.add(directionalLight);

        // إضاءة نقطية
        const pointLight1 = new THREE.PointLight(0x00ff99, 1, 20);
        pointLight1.position.set(-5, 5, 5);
        this.scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xff3547, 1, 20);
        pointLight2.position.set(5, 5, 5);
        this.scene.add(pointLight2);

        const pointLight3 = new THREE.PointLight(0x33b5e5, 1, 20);
        pointLight3.position.set(0, 5, -5);
        this.scene.add(pointLight3);
    }

    /**
     * إضافة الأرضية
     */
    addFloor() {
        // إنشاء شبكة الأرضية
        const gridHelper = new THREE.GridHelper(20, 20, 0x444444, 0x222222);
        this.scene.add(gridHelper);

        // إنشاء الأرضية
        const floorGeometry = new THREE.PlaneGeometry(20, 20);
        const floorMaterial = new THREE.MeshStandardMaterial({
            color: 0x1e1e2f,
            roughness: 0.8,
            metalness: 0.2,
            transparent: true,
            opacity: 0.8
        });
        const floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -0.01;
        this.scene.add(floor);
    }

    /**
     * إضافة الخدمات
     */
    addServices() {
        this.services.forEach(service => {
            // إنشاء الكرة
            const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
            const sphereMaterial = new THREE.MeshStandardMaterial({
                color: service.color,
                roughness: 0.3,
                metalness: 0.7,
                emissive: service.color,
                emissiveIntensity: 0.2
            });
            const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
            sphere.position.set(service.position.x, service.position.y, service.position.z);
            sphere.userData = { id: service.id, type: 'service', name: service.name };

            // إضافة تأثير التوهج
            const glowMaterial = new THREE.ShaderMaterial({
                uniforms: {
                    'c': { type: 'f', value: 0.2 },
                    'p': { type: 'f', value: 1.2 },
                    glowColor: { type: 'c', value: new THREE.Color(service.color) },
                    viewVector: { type: 'v3', value: this.camera.position }
                },
                vertexShader: `
                    uniform vec3 viewVector;
                    uniform float c;
                    uniform float p;
                    varying float intensity;
                    void main() {
                        vec3 vNormal = normalize(normal);
                        vec3 vNormel = normalize(viewVector);
                        intensity = pow(c - dot(vNormal, vNormel), p);
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `,
                fragmentShader: `
                    uniform vec3 glowColor;
                    varying float intensity;
                    void main() {
                        vec3 glow = glowColor * intensity;
                        gl_FragColor = vec4(glow, 1.0);
                    }
                `,
                side: THREE.BackSide,
                blending: THREE.AdditiveBlending,
                transparent: true
            });

            const glowSphere = new THREE.Mesh(new THREE.SphereGeometry(1.2, 32, 32), glowMaterial);
            glowSphere.position.set(service.position.x, service.position.y, service.position.z);

            // إضافة الكرة وتأثير التوهج إلى المشهد
            this.scene.add(sphere);
            this.scene.add(glowSphere);

            // إضافة الكرة إلى قائمة الكائنات القابلة للتفاعل
            this.objects.push(sphere);

            // إضافة اسم الخدمة
            const textSprite = this.createTextSprite(service.name);
            textSprite.position.set(service.position.x, service.position.y + 1.5, service.position.z);
            this.scene.add(textSprite);
        });
    }

    /**
     * إنشاء نص ثلاثي الأبعاد
     * @param {string} text - النص المراد عرضه
     * @returns {THREE.Sprite} - كائن النص
     */
    createTextSprite(text) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 256;
        canvas.height = 128;

        // تعيين خلفية شفافة
        context.fillStyle = 'rgba(0, 0, 0, 0)';
        context.fillRect(0, 0, canvas.width, canvas.height);

        // تعيين نمط النص
        context.font = 'bold 24px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';

        // رسم خلفية النص
        context.fillStyle = 'rgba(30, 30, 47, 0.8)';
        context.fillRect(0, 0, canvas.width, canvas.height);

        // رسم حدود النص
        context.strokeStyle = '#00ff99';
        context.lineWidth = 2;
        context.strokeRect(2, 2, canvas.width - 4, canvas.height - 4);

        // رسم النص
        context.fillStyle = '#ffffff';
        context.fillText(text, canvas.width / 2, canvas.height / 2);

        // إنشاء القماش
        const texture = new THREE.CanvasTexture(canvas);
        const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(2, 1, 1);

        return sprite;
    }

    /**
     * إضافة الخلفية
     */
    addBackground() {
        // إنشاء جسيمات الخلفية
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 1000;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 50;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.1,
            color: 0x00ff99,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        this.scene.add(particlesMesh);

        // إضافة حركة للجسيمات
        this.particlesMesh = particlesMesh;
    }

    /**
     * تحديث حجم العارض عند تغيير حجم النافذة
     */
    onWindowResize() {
        if (!this.isInitialized) return;

        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }

    /**
     * معالجة حركة الماوس
     * @param {Event} event - حدث الماوس
     */
    onMouseMove(event) {
        if (!this.isInitialized) return;

        // حساب موقع الماوس بالنسبة للحاوية
        const rect = this.container.getBoundingClientRect();
        this.mouse.x = ((event.clientX - rect.left) / this.container.clientWidth) * 2 - 1;
        this.mouse.y = -((event.clientY - rect.top) / this.container.clientHeight) * 2 + 1;

        // تحديث Raycaster
        this.raycaster.setFromCamera(this.mouse, this.camera);

        // البحث عن تقاطعات مع الكائنات
        const intersects = this.raycaster.intersectObjects(this.objects);

        // تغيير مؤشر الماوس وحجم الكائن عند التحويم فوقه
        if (intersects.length > 0) {
            const object = intersects[0].object;

            // تغيير مؤشر الماوس
            this.container.style.cursor = 'pointer';

            // تكبير الكائن
            if (this.selectedObject !== object) {
                if (this.selectedObject) {
                    this.selectedObject.scale.set(1, 1, 1);
                }

                object.scale.set(1.2, 1.2, 1.2);
                this.selectedObject = object;

                // عرض اسم الخدمة
                const serviceName = object.userData.name;
                document.getElementById('service-name').textContent = serviceName;
            }
        } else {
            // إعادة مؤشر الماوس إلى الوضع الطبيعي
            this.container.style.cursor = 'auto';

            // إعادة حجم الكائن إلى الوضع الطبيعي
            if (this.selectedObject) {
                this.selectedObject.scale.set(1, 1, 1);
                this.selectedObject = null;

                // إخفاء اسم الخدمة
                document.getElementById('service-name').textContent = '';
            }
        }
    }

    /**
     * معالجة النقر
     * @param {Event} event - حدث النقر
     */
    onClick(event) {
        if (!this.isInitialized) return;

        // حساب موقع الماوس بالنسبة للحاوية
        const rect = this.container.getBoundingClientRect();
        this.mouse.x = ((event.clientX - rect.left) / this.container.clientWidth) * 2 - 1;
        this.mouse.y = -((event.clientY - rect.top) / this.container.clientHeight) * 2 + 1;

        // تحديث Raycaster
        this.raycaster.setFromCamera(this.mouse, this.camera);

        // البحث عن تقاطعات مع الكائنات
        const intersects = this.raycaster.intersectObjects(this.objects);

        // معالجة النقر على الكائن
        if (intersects.length > 0) {
            const object = intersects[0].object;
            const serviceId = object.userData.id;

            // تنفيذ الإجراء المناسب بناءً على الخدمة
            this.handleServiceClick(serviceId);
        }
    }

    /**
     * معالجة النقر على الخدمة
     * @param {number} serviceId - معرف الخدمة
     */
    handleServiceClick(serviceId) {
        // الانتقال إلى القسم المناسب بناءً على الخدمة
        switch (serviceId) {
            case 1: // تشفير الملفات
                document.getElementById('file-encryption-section').scrollIntoView({ behavior: 'smooth' });
                break;
            case 2: // تحليل الثغرات
                document.getElementById('vulnerability-scanner-section').scrollIntoView({ behavior: 'smooth' });
                break;
            case 3: // المكافآت والتحديات
                document.getElementById('rewards-challenges-section').scrollIntoView({ behavior: 'smooth' });
                break;
            case 4: // الدفع بالعملات المشفرة
                document.getElementById('crypto-payment-section').scrollIntoView({ behavior: 'smooth' });
                break;
            case 5: // استرجاع الحسابات
                document.getElementById('account-recovery-section').scrollIntoView({ behavior: 'smooth' });
                break;
            case 6: // أدوات الاختراق الأخلاقي
                document.getElementById('ethical-hacking-section').scrollIntoView({ behavior: 'smooth' });
                break;
            case 7: // شراء أرقام دائمة
                document.getElementById('permanent-numbers-section').scrollIntoView({ behavior: 'smooth' });
                break;
            case 8: // تطبيقات الهاتف
                document.getElementById('mobile-apps-section').scrollIntoView({ behavior: 'smooth' });
                break;
        }
    }

    /**
     * حلقة الرسم
     */
    animate() {
        if (!this.isInitialized) return;

        requestAnimationFrame(this.animate.bind(this));

        try {
            // تحديث التحكم
            if (this.controls && typeof this.controls.update === 'function') {
                this.controls.update();
            }

            // تحديث الجسيمات
            if (this.particlesMesh) {
                this.particlesMesh.rotation.x += 0.0005;
                this.particlesMesh.rotation.y += 0.0005;
            }

            // تحديث الكائنات
            if (this.objects && this.objects.length > 0) {
                this.objects.forEach(object => {
                    if (object) {
                        object.rotation.y += 0.005;
                    }
                });
            }

            // تحديث العارض
            if (this.renderer && this.scene && this.camera) {
                this.renderer.render(this.scene, this.camera);
            }
        } catch (error) {
            console.error('حدث خطأ في حلقة الرسم:', error);
        }
    }
}

// إنشاء كائن من الواجهة ثلاثية الأبعاد
const interface3D = new Interface3D();

// تهيئة الواجهة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    try {
        // التحقق من وجود عنصر الحاوية
        const container = document.getElementById('3d-interface-container');
        if (!container) {
            console.error('لم يتم العثور على عنصر الحاوية للواجهة ثلاثية الأبعاد');
            return;
        }

        // تحميل مكتبات Three.js
        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                // التحقق مما إذا كان السكريبت محملاً بالفعل
                if (document.querySelector(`script[src="${src}"]`)) {
                    resolve();
                    return;
                }

                const script = document.createElement('script');
                script.src = src;
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });
        };

        // تحميل المكتبات المطلوبة
        Promise.all([
            loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'),
            loadScript('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.min.js')
        ]).then(() => {
            // التأكد من تحميل المكتبات بشكل صحيح
            if (typeof THREE === 'undefined') {
                throw new Error('لم يتم تحميل مكتبة THREE.js بشكل صحيح');
            }

            // تهيئة الواجهة بعد تحميل المكتبات
            setTimeout(() => {
                interface3D.initialize();
            }, 500); // تأخير قصير للتأكد من تحميل المكتبات بشكل كامل
        }).catch(error => {
            console.error('فشل تحميل مكتبات Three.js:', error);
            container.innerHTML = `
                <div class="alert alert-danger">
                    <i class="fas fa-exclamation-circle me-2"></i>
                    فشل تحميل مكتبات Three.js. يرجى التحقق من اتصالك بالإنترنت وتحديث الصفحة.
                    <br>الخطأ: ${error.message || 'خطأ غير معروف'}
                </div>
            `;
        });
    } catch (error) {
        console.error('حدث خطأ أثناء تهيئة الواجهة ثلاثية الأبعاد:', error);
    }
});
