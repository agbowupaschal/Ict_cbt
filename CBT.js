



document.getElementById('startBtn').addEventListener('click', () => {
    const name = document.getElementById('username').value.trim();
    if (!name) return alert("Enter your name first!");
    
    // Save username for later
    sessionStorage.setItem('username', name);

    // Move to quiz section / page
    window.location.href = 'exam.html'; // or just show quiz div
});
