const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/appRoutes.js');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

