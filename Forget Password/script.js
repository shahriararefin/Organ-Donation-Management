function resetPassword() {
    const email = document.getElementById('email').value;

    if (!email) {
        alert('Please enter your email');
        return;
    }

    fetch('reset_password.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => console.error('Error:', error));
}
