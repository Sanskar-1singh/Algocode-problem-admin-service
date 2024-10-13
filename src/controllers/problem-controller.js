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

function getProblem(req,res,next){
    try {
        throw new Badrequest('getProblem',{message:["problem is missing"]});
      } catch (error) {
         next(error);
      }
}

function getProblems(req,res,next){
    try {
        throw new Badrequest('getProblems',{message:["problem is missing"]});
      } catch (error) {
         next(error);
      }
}

function deleteProblem(req,res,next){
    try {
        throw new Badrequest('deleteProblem',{message:["problem is missing"]});
      } catch (error) {
         next(error);
      }
}

function updateProblem(req,res,next){
    try {
        throw new Badrequest('updateProblem',{message:["problem is missing"]});
      } catch (error) {
         next(error);
      }
}

module.exports={
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    pingptoblemcontroller,
    updateProblem
}