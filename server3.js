const express = require('express');
const cors = require('cors');

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ['http://127.0.0.1:3003', 'http://localhost:3003']
  })
);

const bodyParser = require('body-parser');

const colorsArr = [];

console.log(colorsArr);

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.use(express.static('static'));

app.post('/getColors', (req, res) => {
  let color = { color: req.body.inputColor };

  colorsArr.push(color);

  res.json({ colorsArr });
});

app.listen(process.env.PORT || '3003', () => {
  console.log('server 3003');
});
