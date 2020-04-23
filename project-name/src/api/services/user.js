const signUp = async (req, res) => {
    res.status(201).json()
}

const confirm = async (req, res) => {
    res.status(200).json()
}

const deleteUser = async (req, res) => {
    res.status(200).json()
}

const forgetPassword = async (req, res) => {
    res.status(200).json()
}

const resetPassword = async ({ body }, res) => {
    res.status(200).json()
}
module.exports = {
    signUp,
    deleteUser,
    forgetPassword,
    resetPassword,
    confirm
}