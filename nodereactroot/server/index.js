require('dotenv').config()

const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const Jsontableify = require('jsontableify')


const PORT = process.env.PORT || 5000

const app = express()
app.set('view engine', 'ejs');
app.use(cors())
app.use(express.json())
app.use('/api',router)
app.get('/admin', async function(req, res) {
    var people = await models.Person.findAll()
    var l = []
    people.map(person=>l.push(person.dataValues))

    const { html } = new Jsontableify().toHtml(l)
    var html1 = '<!DOCTYPE html><html><head><meta charset="utf-8" /><title>HTML5</title></head><body>'
    var html2 = '</body></html>'
    res.end(html1+html+html2)
    //res.render('pages/admin',{
    //    table: table,
    //});
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