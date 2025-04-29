/**
 * نظام الدردشة الخاصة
 * يتيح للمستخدمين التواصل مع بعضهم البعض وإنشاء غرف دردشة خاصة
 */

class PrivateChatSystem {
    constructor() {
        // تهيئة نظام الدردشة
        this.chatRooms = this.loadChatRooms();
        this.messages = this.loadMessages();
        this.currentRoom = null;
    }

    /**
     * تحميل غرف الدردشة من التخزين المحلي
     * @returns {Array} - قائمة غرف الدردشة
     */
    loadChatRooms() {
        const roomsData = localStorage.getItem('greenhat_chat_rooms');
        return roomsData ? JSON.parse(roomsData) : [];
    }

    /**
     * تحميل الرسائل من التخزين المحلي
     * @returns {Object} - الرسائل مصنفة حسب غرفة الدردشة
     */
    loadMessages() {
        const messagesData = localStorage.getItem('greenhat_chat_messages');
        return messagesData ? JSON.parse(messagesData) : {};
    }

    /**
     * حفظ غرف الدردشة في التخزين المحلي
     */
    saveChatRooms() {
        localStorage.setItem('greenhat_chat_rooms', JSON.stringify(this.chatRooms));
    }

    /**
     * حفظ الرسائل في التخزين المحلي
     */
    saveMessages() {
        localStorage.setItem('greenhat_chat_messages', JSON.stringify(this.messages));
    }

    /**
     * إنشاء غرفة دردشة جديدة
     * @param {Object} roomData - بيانات غرفة الدردشة
     * @returns {Object} - نتيجة العملية
     */
    createChatRoom(roomData) {
        // التحقق من تسجيل دخول المستخدم
        if (!membershipSystem.isLoggedIn()) {
            return {
                success: false,
                message: 'يجب تسجيل الدخول لإنشاء غرفة دردشة'
            };
        }

        // الحصول على بيانات المستخدم الحالي
        const currentUser = membershipSystem.getCurrentUser();

        // التحقق من وجود غرفة بنفس الاسم
        const roomExists = this.chatRooms.some(room => room.name === roomData.name);
        if (roomExists) {
            return {
                success: false,
                message: 'يوجد غرفة دردشة بنفس الاسم'
            };
        }

        // إنشاء غرفة دردشة جديدة
        const newRoom = {
            id: Date.now().toString(),
            name: roomData.name,
            description: roomData.description,
            createdBy: currentUser.id,
            creatorName: currentUser.username,
            createdAt: new Date().toISOString(),
            isAdminOnly: roomData.isAdminOnly || false,
            members: [currentUser.id]
        };

        // إضافة الغرفة إلى قائمة الغرف
        this.chatRooms.push(newRoom);
        this.saveChatRooms();

        // إنشاء قائمة رسائل فارغة للغرفة
        this.messages[newRoom.id] = [];
        this.saveMessages();

        return {
            success: true,
            message: 'تم إنشاء غرفة الدردشة بنجاح',
            room: newRoom
        };
    }

    /**
     * الانضمام إلى غرفة دردشة
     * @param {string} roomId - معرف غرفة الدردشة
     * @returns {Object} - نتيجة العملية
     */
    joinChatRoom(roomId) {
        // التحقق من تسجيل دخول المستخدم
        if (!membershipSystem.isLoggedIn()) {
            return {
                success: false,
                message: 'يجب تسجيل الدخول للانضمام إلى غرفة دردشة'
            };
        }

        // الحصول على بيانات المستخدم الحالي
        const currentUser = membershipSystem.getCurrentUser();
        const isAdmin = membershipSystem.isAdminUser();

        // البحث عن الغرفة
        const room = this.chatRooms.find(room => room.id === roomId);
        if (!room) {
            return {
                success: false,
                message: 'غرفة الدردشة غير موجودة'
            };
        }

        // التحقق من صلاحيات الوصول للغرفة
        if (room.isAdminOnly && !isAdmin) {
            return {
                success: false,
                message: 'هذه الغرفة مخصصة للمشرفين فقط'
            };
        }

        // التحقق من عضوية المستخدم في الغرفة
        if (room.members.includes(currentUser.id)) {
            // تعيين الغرفة الحالية
            this.currentRoom = room;
            return {
                success: true,
                message: 'تم الانضمام إلى غرفة الدردشة بنجاح',
                room: room
            };
        }

        // إضافة المستخدم إلى قائمة أعضاء الغرفة
        room.members.push(currentUser.id);
        this.saveChatRooms();

        // تعيين الغرفة الحالية
        this.currentRoom = room;

        // إضافة رسالة نظام بانضمام المستخدم
        this.addSystemMessage(room.id, `انضم ${currentUser.username} إلى الغرفة`);

        return {
            success: true,
            message: 'تم الانضمام إلى غرفة الدردشة بنجاح',
            room: room
        };
    }

    /**
     * مغادرة غرفة دردشة
     * @param {string} roomId - معرف غرفة الدردشة
     * @returns {Object} - نتيجة العملية
     */
    leaveChatRoom(roomId) {
        // التحقق من تسجيل دخول المستخدم
        if (!membershipSystem.isLoggedIn()) {
            return {
                success: false,
                message: 'يجب تسجيل الدخول لمغادرة غرفة دردشة'
            };
        }

        // الحصول على بيانات المستخدم الحالي
        const currentUser = membershipSystem.getCurrentUser();

        // البحث عن الغرفة
        const roomIndex = this.chatRooms.findIndex(room => room.id === roomId);
        if (roomIndex === -1) {
            return {
                success: false,
                message: 'غرفة الدردشة غير موجودة'
            };
        }

        const room = this.chatRooms[roomIndex];

        // التحقق من عضوية المستخدم في الغرفة
        const memberIndex = room.members.indexOf(currentUser.id);
        if (memberIndex === -1) {
            return {
                success: false,
                message: 'أنت لست عضوًا في هذه الغرفة'
            };
        }

        // حذف المستخدم من قائمة أعضاء الغرفة
        room.members.splice(memberIndex, 1);

        // إضافة رسالة نظام بمغادرة المستخدم
        this.addSystemMessage(room.id, `غادر ${currentUser.username} الغرفة`);

        // حذف الغرفة إذا لم يتبق أعضاء
        if (room.members.length === 0) {
            this.chatRooms.splice(roomIndex, 1);
            delete this.messages[roomId];
        }

        this.saveChatRooms();
        this.saveMessages();

        // إعادة تعيين الغرفة الحالية إذا كانت هي الغرفة التي تمت مغادرتها
        if (this.currentRoom && this.currentRoom.id === roomId) {
            this.currentRoom = null;
        }

        return {
            success: true,
            message: 'تمت مغادرة غرفة الدردشة بنجاح'
        };
    }

    /**
     * إرسال رسالة في غرفة دردشة
     * @param {string} roomId - معرف غرفة الدردشة
     * @param {string} content - محتوى الرسالة
     * @returns {Object} - نتيجة العملية
     */
    sendMessage(roomId, content) {
        // التحقق من تسجيل دخول المستخدم
        if (!membershipSystem.isLoggedIn()) {
            return {
                success: false,
                message: 'يجب تسجيل الدخول لإرسال رسالة'
            };
        }

        // الحصول على بيانات المستخدم الحالي
        const currentUser = membershipSystem.getCurrentUser();

        // البحث عن الغرفة
        const room = this.chatRooms.find(room => room.id === roomId);
        if (!room) {
            return {
                success: false,
                message: 'غرفة الدردشة غير موجودة'
            };
        }

        // التحقق من عضوية المستخدم في الغرفة
        if (!room.members.includes(currentUser.id)) {
            return {
                success: false,
                message: 'أنت لست عضوًا في هذه الغرفة'
            };
        }

        // إنشاء رسالة جديدة
        const newMessage = {
            id: Date.now().toString(),
            roomId: roomId,
            userId: currentUser.id,
            username: currentUser.username,
            content: content,
            timestamp: new Date().toISOString(),
            type: 'user'
        };

        // إضافة الرسالة إلى قائمة رسائل الغرفة
        if (!this.messages[roomId]) {
            this.messages[roomId] = [];
        }
        this.messages[roomId].push(newMessage);
        this.saveMessages();

        return {
            success: true,
            message: 'تم إرسال الرسالة بنجاح',
            chatMessage: newMessage
        };
    }

    /**
     * إضافة رسالة نظام في غرفة دردشة
     * @param {string} roomId - معرف غرفة الدردشة
     * @param {string} content - محتوى الرسالة
     */
    addSystemMessage(roomId, content) {
        // إنشاء رسالة نظام جديدة
        const systemMessage = {
            id: Date.now().toString(),
            roomId: roomId,
            userId: 'system',
            username: 'النظام',
            content: content,
            timestamp: new Date().toISOString(),
            type: 'system'
        };

        // إضافة الرسالة إلى قائمة رسائل الغرفة
        if (!this.messages[roomId]) {
            this.messages[roomId] = [];
        }
        this.messages[roomId].push(systemMessage);
        this.saveMessages();
    }

    /**
     * الحصول على قائمة غرف الدردشة المتاحة للمستخدم
     * @returns {Array} - قائمة غرف الدردشة
     */
    getAvailableChatRooms() {
        // التحقق من تسجيل دخول المستخدم
        if (!membershipSystem.isLoggedIn()) {
            return [];
        }

        // الحصول على بيانات المستخدم الحالي
        const currentUser = membershipSystem.getCurrentUser();
        const isAdmin = membershipSystem.isAdminUser();

        // تصفية الغرف المتاحة للمستخدم
        return this.chatRooms.filter(room => {
            // المشرف يمكنه الوصول إلى جميع الغرف
            if (isAdmin) {
                return true;
            }
            // الغرف المخصصة للمشرفين فقط
            if (room.isAdminOnly) {
                return false;
            }
            // الغرف العامة
            return true;
        });
    }

    /**
     * الحصول على رسائل غرفة دردشة
     * @param {string} roomId - معرف غرفة الدردشة
     * @returns {Array} - قائمة الرسائل
     */
    getChatRoomMessages(roomId) {
        return this.messages[roomId] || [];
    }

    /**
     * الحصول على الغرفة الحالية
     * @returns {Object|null} - الغرفة الحالية
     */
    getCurrentRoom() {
        return this.currentRoom;
    }

    /**
     * تعيين الغرفة الحالية
     * @param {string} roomId - معرف غرفة الدردشة
     */
    setCurrentRoom(roomId) {
        const room = this.chatRooms.find(room => room.id === roomId);
        this.currentRoom = room || null;
    }

    /**
     * إنشاء غرفة دردشة للمشرفين
     */
    createDefaultAdminRoom() {
        // التحقق من وجود غرفة للمشرفين
        const adminRoomExists = this.chatRooms.some(room => room.isAdminOnly);
        if (!adminRoomExists) {
            // إنشاء غرفة للمشرفين
            const adminRoom = {
                id: 'admin-room-' + Date.now().toString(),
                name: 'غرفة المشرفين',
                description: 'غرفة دردشة خاصة بالمشرفين فقط',
                createdBy: 'system',
                creatorName: 'النظام',
                createdAt: new Date().toISOString(),
                isAdminOnly: true,
                members: []
            };

            // إضافة جميع المشرفين إلى الغرفة
            const adminUsers = membershipSystem.users.filter(user => user.role === 'admin');
            adminRoom.members = adminUsers.map(admin => admin.id);

            // إضافة الغرفة إلى قائمة الغرف
            this.chatRooms.push(adminRoom);
            this.saveChatRooms();

            // إنشاء قائمة رسائل فارغة للغرفة
            this.messages[adminRoom.id] = [];
            this.addSystemMessage(adminRoom.id, 'تم إنشاء غرفة المشرفين');
            this.saveMessages();

            console.log('تم إنشاء غرفة المشرفين');
        }
    }

    /**
     * إنشاء غرفة دردشة عامة
     */
    createDefaultPublicRoom() {
        // التحقق من وجود غرفة عامة
        const publicRoomExists = this.chatRooms.some(room => room.name === 'الغرفة العامة');
        if (!publicRoomExists) {
            // إنشاء غرفة عامة
            const publicRoom = {
                id: 'public-room-' + Date.now().toString(),
                name: 'الغرفة العامة',
                description: 'غرفة دردشة عامة لجميع المستخدمين',
                createdBy: 'system',
                creatorName: 'النظام',
                createdAt: new Date().toISOString(),
                isAdminOnly: false,
                members: []
            };

            // إضافة الغرفة إلى قائمة الغرف
            this.chatRooms.push(publicRoom);
            this.saveChatRooms();

            // إنشاء قائمة رسائل فارغة للغرفة
            this.messages[publicRoom.id] = [];
            this.addSystemMessage(publicRoom.id, 'تم إنشاء الغرفة العامة');
            this.saveMessages();

            console.log('تم إنشاء الغرفة العامة');
        }
    }
}

// إنشاء كائن من نظام الدردشة الخاصة
const privateChatSystem = new PrivateChatSystem();

// تهيئة نظام الدردشة الخاصة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    // إنشاء غرفة المشرفين وغرفة عامة افتراضية
    privateChatSystem.createDefaultAdminRoom();
    privateChatSystem.createDefaultPublicRoom();
    
    // تحديث قائمة غرف الدردشة
    updateChatRoomsList();
});

/**
 * تحديث قائمة غرف الدردشة
 */
function updateChatRoomsList() {
    const chatRooms = privateChatSystem.getAvailableChatRooms();
    const chatRoomsList = document.getElementById('chat-rooms-list');
    
    if (chatRoomsList) {
        chatRoomsList.innerHTML = '';
        
        if (chatRooms.length === 0) {
            chatRoomsList.innerHTML = '<div class="alert alert-info">لا توجد غرف دردشة متاحة</div>';
            return;
        }
        
        chatRooms.forEach(room => {
            const roomElement = document.createElement('div');
            roomElement.className = 'chat-room-item card mb-2';
            roomElement.innerHTML = `
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <h5 class="card-title mb-0">
                            ${room.name}
                            ${room.isAdminOnly ? '<span class="badge bg-danger ms-2">للمشرفين فقط</span>' : ''}
                        </h5>
                        <button class="btn btn-sm btn-primary" onclick="joinChatRoom('${room.id}')">
                            <i class="fas fa-sign-in-alt"></i> دخول
                        </button>
                    </div>
                    <p class="card-text text-muted small">${room.description}</p>
                    <small class="text-muted">أنشأها: ${room.creatorName}</small>
                </div>
            `;
            chatRoomsList.appendChild(roomElement);
        });
    }
}

/**
 * تحديث قائمة الرسائل في غرفة الدردشة الحالية
 */
function updateChatMessages() {
    const currentRoom = privateChatSystem.getCurrentRoom();
    const chatMessagesContainer = document.getElementById('chat-messages-container');
    
    if (chatMessagesContainer && currentRoom) {
        const messages = privateChatSystem.getChatRoomMessages(currentRoom.id);
        chatMessagesContainer.innerHTML = '';
        
        if (messages.length === 0) {
            chatMessagesContainer.innerHTML = '<div class="text-center text-muted my-3">لا توجد رسائل بعد</div>';
            return;
        }
        
        messages.forEach(message => {
            const messageElement = document.createElement('div');
            
            if (message.type === 'system') {
                messageElement.className = 'chat-message system-message text-center my-2';
                messageElement.innerHTML = `
                    <div class="system-message-content">
                        <small class="text-muted">${message.content}</small>
                    </div>
                `;
            } else {
                const currentUser = membershipSystem.getCurrentUser();
                const isCurrentUserMessage = currentUser && message.userId === currentUser.id;
                
                messageElement.className = `chat-message ${isCurrentUserMessage ? 'user-message' : 'other-message'} mb-3`;
                messageElement.innerHTML = `
                    <div class="message-header">
                        <span class="message-sender">${message.username}</span>
                        <small class="message-time">${new Date(message.timestamp).toLocaleTimeString()}</small>
                    </div>
                    <div class="message-content">
                        ${message.content}
                    </div>
                `;
            }
            
            chatMessagesContainer.appendChild(messageElement);
        });
        
        // التمرير إلى آخر رسالة
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    }
}

/**
 * إنشاء غرفة دردشة جديدة
 */
function createNewChatRoom() {
    const roomName = document.getElementById('new-room-name').value;
    const roomDescription = document.getElementById('new-room-description').value;
    const isAdminOnly = document.getElementById('new-room-admin-only').checked;
    
    // التحقق من صحة البيانات
    if (!roomName) {
        showMessage('يرجى إدخال اسم الغرفة', 'error');
        return;
    }
    
    // إنشاء غرفة جديدة
    const result = privateChatSystem.createChatRoom({
        name: roomName,
        description: roomDescription,
        isAdminOnly: isAdminOnly
    });
    
    // عرض نتيجة العملية
    showMessage(result.message, result.success ? 'success' : 'error');
    
    // إعادة تعيين النموذج وتحديث القائمة إذا كانت العملية ناجحة
    if (result.success) {
        document.getElementById('new-room-form').reset();
        // إغلاق نافذة إنشاء غرفة جديدة
        const newRoomModal = bootstrap.Modal.getInstance(document.getElementById('new-room-modal'));
        if (newRoomModal) {
            newRoomModal.hide();
        }
        updateChatRoomsList();
    }
}

/**
 * الانضمام إلى غرفة دردشة
 * @param {string} roomId - معرف غرفة الدردشة
 */
function joinChatRoom(roomId) {
    const result = privateChatSystem.joinChatRoom(roomId);
    
    if (result.success) {
        // تحديث واجهة المستخدم
        document.getElementById('chat-room-name').textContent = result.room.name;
        document.getElementById('chat-room-description').textContent = result.room.description;
        
        // إظهار قسم الدردشة
        document.getElementById('chat-rooms-section').style.display = 'none';
        document.getElementById('chat-room-section').style.display = 'block';
        
        // تحديث قائمة الرسائل
        updateChatMessages();
    } else {
        showMessage(result.message, 'error');
    }
}

/**
 * مغادرة غرفة الدردشة الحالية
 */
function leaveChatRoom() {
    const currentRoom = privateChatSystem.getCurrentRoom();
    
    if (currentRoom) {
        const result = privateChatSystem.leaveChatRoom(currentRoom.id);
        
        if (result.success) {
            // إخفاء قسم الدردشة وإظهار قائمة الغرف
            document.getElementById('chat-room-section').style.display = 'none';
            document.getElementById('chat-rooms-section').style.display = 'block';
            
            // تحديث قائمة الغرف
            updateChatRoomsList();
        }
        
        showMessage(result.message, result.success ? 'success' : 'error');
    }
}

/**
 * إرسال رسالة في غرفة الدردشة الحالية
 */
function sendChatMessage() {
    const messageInput = document.getElementById('chat-message-input');
    const messageContent = messageInput.value.trim();
    
    if (!messageContent) {
        return;
    }
    
    const currentRoom = privateChatSystem.getCurrentRoom();
    
    if (currentRoom) {
        const result = privateChatSystem.sendMessage(currentRoom.id, messageContent);
        
        if (result.success) {
            // مسح حقل الإدخال
            messageInput.value = '';
            
            // تحديث قائمة الرسائل
            updateChatMessages();
        } else {
            showMessage(result.message, 'error');
        }
    }
}

// إضافة مستمع لحدث الضغط على Enter في حقل إدخال الرسالة
document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('chat-message-input');
    
    if (messageInput) {
        messageInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                sendChatMessage();
            }
        });
    }
});
