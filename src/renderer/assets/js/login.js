// const sequelize = require('../../api/dbConfig')
import { UserSchema } from '../../../../api/schemas/userSchema'
import bcryptjs from 'bcryptjs'

const login = async (data) => {
    const { username, password } = data
    // const user = await sequelize.model('User').findOne({where: {username: username}})
    const user = await UserSchema.findOne({where: {username: username}})
    if (!user) {
        return false
    }
    const validPassword = await bcryptjs.compare(password, user.password)
    if (!validPassword) {
        return false
    }
    return true
}

const passwordEncrpt = async (password) => {
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password, salt)
    return hashedPassword
}

// const passwordDecrypt = async (password, dbPassword) => {
//     const validPassword = await bcryptjs.compare(password, dbPassword)
//     return validPassword
// }

export {
    login,
    passwordEncrpt,
    // passwordDecrypt
}