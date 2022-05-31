const ApiError = require('../error/ApiError')
const {Person} = require('../models/models')

class personController{
    async create(req, res){
        console.log(req)
        const {firstName,lastName,email,phone,description,called} = req.body.person     
        const person = await Person.create({firstName,lastName,email,phone,description,called})
        console.log(person)
        return res.json(person)
    }
    async getOne(req, res){
    }
    async getAll(req, res){
        console.log('getAll start')
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
    async deleteList(req,res){
        console.log(req)
    }
}

module.exports = new personController()