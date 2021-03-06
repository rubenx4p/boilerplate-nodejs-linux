const logger = require('./config/logger')
const express = require('express')
require('express-async-errors')
const app = express()

require('./startup/routes')(app)
require('./startup/prod')(app)

const port = process.env.PORT || 3000
app.listen(port, () => {
    logger.info(`Server is up on port ${port}`)
})