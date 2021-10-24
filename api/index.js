const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router/router.js');

const PORT = 3005;

const app = express();

mongoose.connect('mongodb://localhost:27017/bsplayers', {
  useNewUrlParser: true,
});

app.use(cors());

app.use('/', router);

app.listen(PORT, () => { 
    console.log(`App listening on port ${PORT}`)
})