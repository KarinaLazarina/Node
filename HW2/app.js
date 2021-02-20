//Вам потрібно реалізувати мінімум 5 строрінок.
// 1) Реєстрація
// 2) Логінація.
// 3) Список всіх юзерів.
// 4) Інформація про одного юзера
// 5) Помилка
//
// Створити файл з юзерами, який буде виступати в ролі бази данних.
//
//     При реєстрації юзер вводть мейл, нік та пороль і ви його данні дописуєте в файл. Але тільки якщо його немає ще. Якшо він є, то видаєте помилку. Після реєстрації переходите на сторінку зі всіма юзерми.
//
//     При логінації юзер так само ввоить мейл та пароль і вам необхідно знайти його мейлик в списку юзерів та якщо такий мейлик з таким паролем є, то віддати інформацію про юзера. В інакшому випадку сказати, що необхідно реєструватись.
//
//     І відображення всіх юзерів це відповідно просто виведення списку вісх юзерів.
//
//     При реєстрації мейли не можуть повторюватись

const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const fs = require('fs');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', '.hbs');
app.engine('.hbs', hbs({defaultLayout: false}));
app.set('views', path.join(__dirname, 'views'));

// 3) Список всіх юзерів.
app.get('/users', ((req, res) => {
    fs.readFile(path.join(__dirname, 'users.json'), (err, data) => {
        if (err) {
            res.render('error', {error: err});
            return;
        }
        let str = data.toString();
        let users = JSON.parse(str);
        res.render('users', {users});
    })
}));

// 4) Інформація про одного юзера
app.get('/users/:userId', ((req, res) => {

    fs.readFile(path.join(__dirname, 'users.json'), (err, data) => {
        if (err) {
            res.render('error', {error: err});
            return;
        }
        const { userId } = req.params;
        let str = data.toString();
        let users = JSON.parse(str);
        let singleUser = users.filter(value => users.indexOf(value) == userId);

        res.render('users', {users: singleUser});
    })
}));

// 2) Логінація.
app.get('/login', ((req, res) => {
    res.render('login');
}))



app.post('/login', (req, res) => {
    fs.readFile(path.join(__dirname, 'users.json'), (err, data) => {
        if (err) {
            res.render('error', {error: err});
            return;
        }
        let str = data.toString();
        let users = JSON.parse(str);
        users.forEach(user => {
            if(user.mail === req.body.mail && user.passwd === req.body.passwd){
                res.redirect(`/users/${users.indexOf(user)}`);
            }
            else {
                res.render('error', {error: 'You are not registered'});
            }
        })

    })
});

// 1) Реєстрація
app.get('/registration', ((req, res) => {
    res.render('registration');
}))

app.post('/registration', (req, res) => {
    fs.readFile(path.join(__dirname, 'users.json'), (err, data) => {
        if (err) {
            res.render('error', {error: err});
            return;
        }
        let str = data.toString();
        let users = JSON.parse(str);
        users.forEach(user => {
            if(user.mail === req.body.mail){
                res.render('error', {error: 'You are already registered'});
            }
        })
        users.push(req.body);
        fs.writeFile(path.join(__dirname, 'users.json'), JSON.stringify(users), err =>{
            if(err){
                res.render('error', {error: err});
                return;
            }
        } )
        res.redirect('/users');
    })
});

app.listen(8000);
