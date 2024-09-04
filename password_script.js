// Отримання email з sessionStorage
document.addEventListener('DOMContentLoaded', () => {
    const userEmail = sessionStorage.getItem('userEmail');
    if (userEmail) {
        document.getElementById('userEmail').textContent = userEmail;
    } else {
        alert('Email не знайдено! Поверніться назад і введіть email.');
        window.location.href = 'index.html'; // Повернення на попередню сторінку, якщо email не знайдено
    }
});

// Логіка показу/приховування пароля
document.getElementById('showPassword').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    if (this.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});

// Відправка даних на сервер
document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = sessionStorage.getItem('userEmail');
    const password = document.getElementById('password').value;

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
        alert('Пароль успішно збережено');
    })
    .catch(error => {
        console.error('Помилка:', error);
        alert('Не вдалося зберегти пароль!');
    });
});
