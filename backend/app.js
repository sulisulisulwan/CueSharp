const express = require('express');
require('dotenv').config({path: __dirname + '/variables.env'})
const app = express();
const PORT = process.env.PORT || 1337;
app.use(express.static('./frontend/public'))


app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})