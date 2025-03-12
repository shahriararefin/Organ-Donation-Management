function resetPassword() {
    const email = document.getElementById('email').value;
    if (email) {
        console.log('Password reset link sent to:', email);
        // Add your password reset logic here
    } else {
        console.log('Please enter your email');
    }
}

document.getElementById('resetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    resetPassword();
});