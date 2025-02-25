const logger = require("../config/logger.config");
const BaseError=require("../Errors/base.error");
const { StatusCodes }=require('http-status-codes');
function errorHandler(err,req,res,next){
        if(err instanceof BaseError){
         //   console.log(err.message)
            return res.status(err.statusCode).json({
                 success:false,
                 message:err.message,//it is base error class message it can be bydefault or can se st by us by using polymorphism>>
                 error:err.details,
                 name:err.name,
                 data:{}
            });
        }
        logger.error('something went wrong in my project');
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"Something went wrong",
            error:err,
              data:{}
       }); 
    }


module.exports=errorHandler;

//if this errorHandler has  issue then who will handle the error of this function then express
//internal by default error middleware handler comes in

