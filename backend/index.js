const express = require('express');
const cors = require('cors');
const router = require('./routes');
const db = require('./model');
const app = express();
const PORT = 7000;

(async function(){
    console.log('authenticating database...');
    await db.sequelize.authenticate();
    console.log('connecting to db...')
    await db.sequelize.sync();
    console.log('database connected')
})()
app.use(cors({origin:'*'}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',router);
app.use('/',(err,req,res,next)=>{
    if(err){
        console.log(err.message);
        return res.json({
            success:false,
            message:err.message
        })
    }
})


app.listen(PORT,()=>console.log(`server up and running on port ${PORT}`));