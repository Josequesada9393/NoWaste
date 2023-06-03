const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const app = express();
app.use(cors())

const router = require('./router.js');
const PORT = 4000;
const cors = require('cors');
app.use(express.json());

app.use(router);


app.listen(PORT, () => {
  console.log(`running now on server http://localhost:${PORT}`);
});
