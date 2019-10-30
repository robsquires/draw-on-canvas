const express = require('express')
const app = express()

app.get('/api', (req, res) => {
  res.status(200).json('hello')
})

module.exports = app
