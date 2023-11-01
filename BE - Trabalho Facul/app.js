const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');

//const rotaPeca = require('./Routes/pecas');
const rotaProduto = require('./routes/produto');


var cors = require('cors')

app.use(morgan('dev'));

app.use('/image', express.static('image'))

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json())
 

app.use(cors());
app.options('*', cors());

app.use('/produtos',rotaProduto);


/*
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Acess-Control-Allow-Header',
    'Origin, X-Requested-With, Content-Type, Accept , Authorization');
    res.header('Access-Control-Allow-Credentials', true)
    
    if(req.method === "OPTIONS"){
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET')
        return res.status(200).send({});
    }

    next();
})

*/



app.use((req,res,next)=>{
    const erro = new Error("Não Contrado");
    erro.status(404);
    next(erro);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    return res.send({
        erro:{
            mesagem: error.mesagem
        }
    })
})

module.exports = app;