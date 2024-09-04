document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;

    sessionStorage.setItem('userEmail', email);

    fetch('http://localhost:3003/save-login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Помилка із збереженням даних на сервері!');
        }
        return response.text();
    })
    .then(data => {
        console.log('Дані збережено:', data);
        window.location.href = "password_page.html";
    })
    .catch(error => {
        console.error('Помилка:', error);
        alert('Не вдалося зберегти дані!');
    });
});
