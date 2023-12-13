const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const loginUser = require('./controllers/loginController');
const { authenticateMiddleware, checkUserPermissions} = require('./middleware/userMiddleware');


const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'client','views'));

app.get('/login', (req, res) => {
    res.render('loginPage');
})

app.post('/login', loginUser);

app.get('/', authenticateMiddleware, (req, res) => {
    res.render('homePage', { user: req.user });
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
