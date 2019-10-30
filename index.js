const app = require('./server/app')
const staticFileMiddleware = require('express').static

app.use('/', staticFileMiddleware('public'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on ${port}`))
