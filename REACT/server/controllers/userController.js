const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')

const generateJwt = (id, username, email) => {
    return jwt.sign(
        {id, username, email}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res) {
        const {username, email, password} = req.body

        if (!username || !email || !password) {
            return res.json(ApiError.badRequest('Invalid username or password!'))
        }

        const username_candidate = await User.findOne({where: {username}})
        if (username_candidate) {
            return res.json(ApiError.badRequest('User with such username already exists!'))
        }

        const email_candidate = await User.findOne({where: {email}})
        if (email_candidate) {
            return res.json(ApiError.badRequest('User with such email already exists!'))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        
        try {
            const user = await User.create({username, email, password: hashPassword})
            const token = generateJwt(user.id, user.username, user.email)
            return res.json({token})
        } catch (e) {
            return res.json(ApiError.badRequest(e.message))
        }    
    }

    async login(req, res) {
        const {username, password} = req.body

        const user = await User.findOne({where: {username}})
        if (!user) {
            return res.json(ApiError.badRequest('User with such username doesn\'t exist!'))
        }

        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return res.json(ApiError.badRequest('Invalid password!'))
        }

        const token = generateJwt(user.id, user.username, user.email)
        return res.json({token})
    }

    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.username, req.user.email)
        return res.json({token})
    }
}

module.exports = new UserController()