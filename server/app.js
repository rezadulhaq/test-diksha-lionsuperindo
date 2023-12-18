const process = require("process");
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}


const express = require('express')
const app = express()
var cors = require('cors')
const  router  = require('./routes/index')
const port = process.env.PORT || 3000

app.use(cors())

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})