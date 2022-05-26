const ApiError = require('../error/ApiError')
const {Person} = require('../models/models')

class personController{
    async create(req, res){
        const {firstName,lastName,email,phone,description,called} = req.body.person       
        const person = await Person.create({firstName,lastName,email,phone,description,called})
        return res.json(person)
    }
    async getOne(req, res){
    }
    async getAll(req, res){
        const {called} = req.query
        let people;
        if (!called){
            people = await Person.findAll()
        }
        if (called!=null){
            people = await Person.findAll({where:{called}})
        }
        
        return res.json(people)
    }
}

module.exports = new personController()