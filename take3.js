function showLoginForm() {
    // Ẩn form tạo tài khoản và hiển thị form đăng nhập
    document.querySelector('.signup-container').style.display = 'none';
    document.querySelector('.auth-container').style.display = 'block';
}

function showSignupForm() {
    // Ẩn form đăng nhập và hiển thị form tạo tài khoản
    document.querySelector('.auth-container').style.display = 'none';
    document.querySelector('.signup-container').style.display = 'block';
}

function closeForm() {
    // Ẩn cả hai form
    document.querySelector('.auth-container').style.display = 'none';
    document.querySelector('.signup-container').style.display = 'none';
}
