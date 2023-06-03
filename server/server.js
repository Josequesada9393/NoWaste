const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors({
  origin: '*'
}))

const router = require('./router.js');
const PORT = process.env.PORT || 4000;
app.use(express.json());

app.use(router);


app.listen(PORT, () => {
  console.log(`running now on server http://localhost:${PORT}`);
});
