const { StatusCodes }=require('http-status-codes');
const Notimplemented = require('../Errors/Notimplemented.error');
const Badrequest = require('../Errors/badrequest.error');
const BaseError = require('../Errors/base.error');


function pingptoblemcontroller(req,res){
    return res.json({
        message:"ping controller is up"
    });
}

function addProblem(req,res,next){
   try {
     throw new Badrequest('addProblem',{message:["problem is missing"]});
   } catch (error) {
      next(error);
   }
}

function getProblem(req,res){
    return res.Status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"NOT IMPLEMENTED"
      });
}

function getProblems(req,res){
    return res.Status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"NOT IMPLEMENTED"
      });
}

function deleteProblem(req,res){
    return res.Status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"NOT IMPLEMENTED"
      });
}

function updateProblem(req,res){
    return res.Status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"NOT IMPLEMENTED"
      });
}

module.exports={
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    pingptoblemcontroller,
    updateProblem
}