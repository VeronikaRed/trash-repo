const express = require('express')
const {PORT} = require('../card-app/config');
const userRoutes = require('./routes/user');

const app = express()

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
  })
);

app.use("/user", userRoutes);

app.listen(PORT, ()=>console.log('Port is working'));

module.exports = app;