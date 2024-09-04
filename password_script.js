document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const email = sessionStorage.getItem('userEmail');

    fetch('http://localhost:3003/save-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Помилка із збереженням даних на сервері!');
        }
        return response.text();
    })
    .then(data => {
        console.log('Пароль збережено:', data);
        alert('Ваш пароль збережено!');
    })
    .catch(error => {
        console.error('Помилка:', error);
        alert('Не вдалося зберегти дані!');
    });
});
