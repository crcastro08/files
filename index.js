// const express = require('express');
// const app = express();

// const PORT = 5555;

// app.listen(PORT, () => {
// console.log(`Server ejecutándose en el puerto ${PORT}`);
// });

const express = require('express');
const app = express();

const PORT = 5555;
const USERS = [
    {
        id: 1,
        firstName: 'Gerardo',
        lastName: 'Lopez'
    },
    {
        id: 2,
        firstName: 'Yirian',
        lastName: 'Acuña'
    }
];

app.listen(PORT, () => {
    console.log(`Server ejecutándose en el puerto ${PORT}`);
});

app.get('/users', (req, res, next) => {
    res.json(USERS);
});

app.get('/users/:userId', (req, res, next) => {
    res.json(USERS.find(user => user.id === parseInt(req.params.userId)));
});

module.exports = {
    app
};