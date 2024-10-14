const express=require('express');

const bodyParser=require('body-parser');
const { PORT }=require('./config/server.config');

const apiRouter=require('./routes/index');
const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./config/db.config');

const app=express();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(bodyParser.text());


app.use('/api',apiRouter);

app.get('/ping',(req,res)=>{
  return res.json({
    message:"problem service is up"
  })
})
//last middleware if any error comes>>
app.use(errorHandler);

app.listen(PORT, async ()=>{
    console.log(`Server started at PORT ${PORT}`);
    await connectToDB();
    console.log("successfully conncted to db");
})
