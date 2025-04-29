/**
 * نظام التعليقات
 * يتيح للمستخدمين كتابة التعليقات ويتطلب موافقة المشرف قبل نشرها
 */

class CommentsSystem {
    constructor() {
        // تهيئة نظام التعليقات
        this.comments = this.loadComments();
        this.pendingComments = this.loadPendingComments();
    }

    /**
     * تحميل التعليقات من التخزين المحلي
     * @returns {Array} - قائمة التعليقات
     */
    loadComments() {
        const commentsData = localStorage.getItem('greenhat_comments');
        return commentsData ? JSON.parse(commentsData) : [];
    }

    /**
     * تحميل التعليقات المعلقة من التخزين المحلي
     * @returns {Array} - قائمة التعليقات المعلقة
     */
    loadPendingComments() {
        const pendingData = localStorage.getItem('greenhat_pending_comments');
        return pendingData ? JSON.parse(pendingData) : [];
    }

    /**
     * حفظ التعليقات في التخزين المحلي
     */
    saveComments() {
        localStorage.setItem('greenhat_comments', JSON.stringify(this.comments));
    }

    /**
     * حفظ التعليقات المعلقة في التخزين المحلي
     */
    savePendingComments() {
        localStorage.setItem('greenhat_pending_comments', JSON.stringify(this.pendingComments));
    }

    /**
     * إضافة تعليق جديد
     * @param {string} content - محتوى التعليق
     * @param {string} userId - معرف المستخدم
     * @param {string} username - اسم المستخدم
     * @param {boolean} isVerified - حالة توثيق المستخدم
     * @returns {Object} - نتيجة العملية
     */
    addComment(content, userId, username, isVerified = false) {
        // التحقق من تسجيل دخول المستخدم
        if (!membershipSystem.isLoggedIn()) {
            return {
                success: false,
                message: 'يجب تسجيل الدخول لإضافة تعليق'
            };
        }

        // إنشاء تعليق جديد
        const newComment = {
            id: Date.now().toString(),
            userId: userId,
            username: username,
            content: content,
            date: new Date().toISOString(),
            status: 'pending',
            isVerified: isVerified
        };

        // إضافة التعليق إلى قائمة التعليقات المعلقة
        this.pendingComments.push(newComment);
        this.savePendingComments();

        return {
            success: true,
            message: 'تم إرسال التعليق بنجاح. سيتم نشره بعد موافقة المشرف'
        };
    }

    /**
     * الحصول على التعليقات المنشورة
     * @returns {Array} - قائمة التعليقات المنشورة
     */
    getPublishedComments() {
        return this.comments;
    }

    /**
     * الحصول على التعليقات المعلقة
     * @returns {Array} - قائمة التعليقات المعلقة
     */
    getPendingComments() {
        return this.pendingComments;
    }

    /**
     * الموافقة على تعليق
     * @param {string} commentId - معرف التعليق
     * @returns {Object} - نتيجة العملية
     */
    approveComment(commentId) {
        // التحقق من صلاحيات المشرف
        if (!membershipSystem.isAdminUser()) {
            return {
                success: false,
                message: 'ليس لديك صلاحية للقيام بهذه العملية'
            };
        }

        // البحث عن التعليق
        const commentIndex = this.pendingComments.findIndex(comment => comment.id === commentId);
        if (commentIndex === -1) {
            return {
                success: false,
                message: 'التعليق غير موجود'
            };
        }

        // الحصول على بيانات التعليق
        const comment = this.pendingComments[commentIndex];

        // تحديث حالة التعليق
        comment.status = 'approved';
        comment.approvalDate = new Date().toISOString();

        // إضافة التعليق إلى قائمة التعليقات المنشورة
        this.comments.push(comment);
        this.saveComments();

        // حذف التعليق من قائمة التعليقات المعلقة
        this.pendingComments.splice(commentIndex, 1);
        this.savePendingComments();

        return {
            success: true,
            message: 'تمت الموافقة على التعليق بنجاح'
        };
    }

    /**
     * رفض تعليق
     * @param {string} commentId - معرف التعليق
     * @returns {Object} - نتيجة العملية
     */
    rejectComment(commentId) {
        // التحقق من صلاحيات المشرف
        if (!membershipSystem.isAdminUser()) {
            return {
                success: false,
                message: 'ليس لديك صلاحية للقيام بهذه العملية'
            };
        }

        // البحث عن التعليق
        const commentIndex = this.pendingComments.findIndex(comment => comment.id === commentId);
        if (commentIndex === -1) {
            return {
                success: false,
                message: 'التعليق غير موجود'
            };
        }

        // حذف التعليق من قائمة التعليقات المعلقة
        this.pendingComments.splice(commentIndex, 1);
        this.savePendingComments();

        return {
            success: true,
            message: 'تم رفض التعليق بنجاح'
        };
    }

    /**
     * حذف تعليق
     * @param {string} commentId - معرف التعليق
     * @returns {Object} - نتيجة العملية
     */
    deleteComment(commentId) {
        // التحقق من صلاحيات المشرف
        if (!membershipSystem.isAdminUser()) {
            return {
                success: false,
                message: 'ليس لديك صلاحية للقيام بهذه العملية'
            };
        }

        // البحث عن التعليق
        const commentIndex = this.comments.findIndex(comment => comment.id === commentId);
        if (commentIndex === -1) {
            return {
                success: false,
                message: 'التعليق غير موجود'
            };
        }

        // حذف التعليق من قائمة التعليقات
        this.comments.splice(commentIndex, 1);
        this.saveComments();

        return {
            success: true,
            message: 'تم حذف التعليق بنجاح'
        };
    }
}

// إنشاء كائن من نظام التعليقات
const commentsSystem = new CommentsSystem();

// تهيئة نظام التعليقات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    // عرض التعليقات المنشورة
    updatePublishedCommentsList();

    // عرض التعليقات المعلقة للمشرف
    if (membershipSystem.isAdminUser()) {
        updatePendingCommentsList();
    }
});

/**
 * تحديث قائمة التعليقات المنشورة
 */
function updatePublishedCommentsList() {
    const publishedComments = commentsSystem.getPublishedComments();
    const commentsContainer = document.getElementById('comments-container');

    if (commentsContainer) {
        commentsContainer.innerHTML = '';

        if (publishedComments.length === 0) {
            commentsContainer.innerHTML = '<div class="alert alert-info">لا توجد تعليقات حتى الآن</div>';
            return;
        }

        publishedComments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment-item card mb-3';
            commentElement.innerHTML = `
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h5 class="card-title mb-0">
                            <i class="fas fa-user-circle me-2"></i> ${comment.username}
                            ${comment.isVerified ? '<span class="badge bg-success ms-2"><i class="fas fa-check-circle"></i> موثق</span>' : ''}
                        </h5>
                        <small class="text-muted">${new Date(comment.date).toLocaleString()}</small>
                    </div>
                    <p class="card-text">${comment.content}</p>
                    ${membershipSystem.isAdminUser() ? `
                        <button class="btn btn-sm btn-danger" onclick="deletePublishedComment('${comment.id}')">
                            <i class="fas fa-trash"></i> حذف
                        </button>
                    ` : ''}
                </div>
            `;
            commentsContainer.appendChild(commentElement);
        });
    }
}

/**
 * تحديث قائمة التعليقات المعلقة
 */
function updatePendingCommentsList() {
    const pendingComments = commentsSystem.getPendingComments();
    const pendingCommentsContainer = document.getElementById('pending-comments-container');

    if (pendingCommentsContainer) {
        pendingCommentsContainer.innerHTML = '';

        if (pendingComments.length === 0) {
            pendingCommentsContainer.innerHTML = '<div class="alert alert-info">لا توجد تعليقات معلقة</div>';
            return;
        }

        pendingComments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment-item card mb-3';
            commentElement.innerHTML = `
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h5 class="card-title mb-0">
                            <i class="fas fa-user-circle me-2"></i> ${comment.username}
                            ${comment.isVerified ? '<span class="badge bg-success ms-2"><i class="fas fa-check-circle"></i> موثق</span>' : ''}
                        </h5>
                        <small class="text-muted">${new Date(comment.date).toLocaleString()}</small>
                    </div>
                    <p class="card-text">${comment.content}</p>
                    <div class="d-flex gap-2">
                        <button class="btn btn-sm btn-success" onclick="approveComment('${comment.id}')">
                            <i class="fas fa-check"></i> موافقة
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="rejectComment('${comment.id}')">
                            <i class="fas fa-times"></i> رفض
                        </button>
                    </div>
                </div>
            `;
            pendingCommentsContainer.appendChild(commentElement);
        });
    }
}

/**
 * إضافة تعليق جديد
 */
function addNewComment() {
    const commentContent = document.getElementById('comment-content').value;

    // التحقق من صحة البيانات
    if (!commentContent) {
        showToast('يرجى كتابة تعليق', 'error');
        return;
    }

    // التحقق من تسجيل الدخول
    if (!membershipSystem.isLoggedIn()) {
        showToast('يجب تسجيل الدخول لإضافة تعليق', 'error');
        return;
    }

    // الحصول على بيانات المستخدم الحالي
    const currentUser = membershipSystem.getCurrentUser();

    // إضافة التعليق
    const result = commentsSystem.addComment(
        commentContent,
        currentUser.id,
        currentUser.username,
        currentUser.isVerified
    );

    // عرض نتيجة العملية
    showToast(result.message, result.success ? 'success' : 'error');

    // إعادة تعيين النموذج إذا كانت العملية ناجحة
    if (result.success) {
        document.getElementById('comment-content').value = '';
    }
}

/**
 * الموافقة على تعليق
 * @param {string} commentId - معرف التعليق
 */
function approveComment(commentId) {
    const result = commentsSystem.approveComment(commentId);
    showToast(result.message, result.success ? 'success' : 'error');
    if (result.success) {
        updatePendingCommentsList();
        updatePublishedCommentsList();
    }
}

/**
 * رفض تعليق
 * @param {string} commentId - معرف التعليق
 */
function rejectComment(commentId) {
    const result = commentsSystem.rejectComment(commentId);
    showToast(result.message, result.success ? 'success' : 'error');
    if (result.success) {
        updatePendingCommentsList();
    }
}

/**
 * حذف تعليق منشور
 * @param {string} commentId - معرف التعليق
 */
function deletePublishedComment(commentId) {
    const result = commentsSystem.deleteComment(commentId);
    showToast(result.message, result.success ? 'success' : 'error');
    if (result.success) {
        updatePublishedCommentsList();
    }
}
