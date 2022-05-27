const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {User, Person} = require('../models/models')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const generateJwt = (id,email) => {
    return jwt.sign({id, email}, process.env.SECRET_KEY, {expiresIn: '24h'})
}

class userController {
    async registration(req, res){
        const {email,password} = req.body
        if (!email || !password){
            return next(ApiError.badRequest("Неправильный email или password!"))
        }
        const candidate = await User.findOne({where:{email}})
        if (candidate){
            return next(ApiError.badRequest("Пользователь с таким email уже существует!"))
        }
        const hashPassword = await bcrypt.hash(password,3)
        const user = await User.create({email,password: hashPassword})
        const token = generateJwt(user.id, email)
        return res.json({token})
    }

    async login(req, res, next){
        const {email,password} = req.body
        const user = await User.findOne({where:{email}})
        if (!user){
            return next(ApiError.badRequest("Пользователь не найден!"))
        }
        let comparePasswords = bcrypt.compareSync(password, user.password)
        if (!comparePasswords){
            return next(ApiError.badRequest("Неправильный пароль!"))
        }
        const token = generateJwt(user.id, user.email)
        return res.json({token})
    }

    async check(req, res, next){
        const token = generateJwt(req.user.id, req.user.email)
        return res.json(token)
    }
}

module.exports = new userController()