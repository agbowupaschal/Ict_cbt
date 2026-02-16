document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // STOP form from submitting

    const name = document.getElementById('username').value.trim();
    if (!name) return alert("Enter your name first!");

    sessionStorage.setItem('username', name);

    window.location.href = 'exam.html';
});
