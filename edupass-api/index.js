const express = require('express');
const cors = require('cors');
const app = express();

const data = require('./cursos.json');

app.get('/', cors() ,(req,res) => res.json(data));

app.listen(5000);