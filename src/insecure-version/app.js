const express = require("express")

const cors = require("cors")

const app = express()

const corsOptions = {
    origin: ['*'], 
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    allowedHeaders: ['Content-type', 'Authorization'] 
}

app.use(cors(corsOptions))

//Import do arquivo de rotas
const doadorRouter = require('./routes/doador.router.js')
app.use('/v1/ecocycle/doadores', cors(), doadorRouter)

app.listen(8080, function () {
    console.log('API aguardando novas requisições...')
})