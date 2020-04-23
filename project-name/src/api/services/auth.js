const logger = require('../../config/logger')
const messages = require('../constants/messages')

const login = async (req, res) => {
    
    logger.info(messages.SUCCESSFUL_AUTHENTICATION)

    return res.status(200).json({
        msg: messages.SUCCESSFUL_AUTHENTICATION,
        token: 'token'
    })
}

module.exports = {
    login
}