const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Book Category API');
});

app.get('/categories', (A, B) => {
  B.json([
    { id: 1, name: 'Fiction' },
    { id: 2, name: 'Non-Fiction' },
    { id: 3, name: 'Biography' }
  ]);
});

app.get('/about', (A, B) => {
  B.send('Hi, I am Ruoyu. I study Information Technology at Ngee Ann Polytechnic.');
});



app.listen(3000, () => {
  console.log('Listening on port 3000');
});
