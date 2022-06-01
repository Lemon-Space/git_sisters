require('dotenv').config()

const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const Jsontableify = require('jsontableify')
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 5000

const app = express()
app.use(bodyParser.urlencoded({limit: '5000mb', extended: true, parameterLimit: 100000000000}));
app.set('view engine', 'ejs');
app.use(cors())
app.use(express.json())
app.use('/api',router)
app.get('/admin', async function(req,res){
    res.render('pages/auth');
})
//app.get('/admin', async function(req, res) {
//    var p = await models.Person.findAll()
//    var people = []
//    p.map(person=>people.push(person.dataValues))
//
//    //const { html } = new Jsontableify().toHtml(l)
//    res.render('pages/admin', {
//        people: people,
//    });
//});
app.post('/admin',async function(req,res){
    console.log(req.body)
    if (req.body.password==process.env.ADMIN_PASS){
        var p = await models.Person.findAll()
        var people = []
        p.map(person=>people.push(person.dataValues))

        //const { html } = new Jsontableify().toHtml(l)
        res.render('pages/admin', {
            people: people,
        });
    }else{
        if (req.body.id){
            let toDel = req.body.id.split(' ')
            delPeople = await models.Person.findAll()
            models.Person.destroy({
                where: {
                    id:toDel
                }
            })
            let answer = 'Удалено!'
            res.render('pages/template',{
                    answer:answer
            })
        }else{
            let answer = 'wrong password!'
            res.render('pages/template',{
                    answer:answer
            })
        }
    }
}); 

app.use(errorHandler) //должен стоять в конце списка use



const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=> console.log(`server started on port ${PORT}`))

    }
    catch (e) {
        console.log(e)
    }
}

start()