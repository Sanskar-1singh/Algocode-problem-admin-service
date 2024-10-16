const { StatusCodes }=require('http-status-codes');
const { ProblemService }=require('../services');
const { ProblemRepository }=require('../repositories');    

function pingptoblemcontroller(req,res){
    return res.json({
        message:"ping controller is up"
    });
}

const problemservice=new ProblemService(new ProblemRepository());

async function addProblem(req,res,next){    
       try {
         const newproblem=await problemservice.createProblem(req.body);
         return res.status(StatusCodes.CREATED).json({
            success:true,
            message:"successfully created a problem",
            error:{},
            data:newproblem
         });
       } catch (error) {
            next(error);
       }
}

 async function getProblem(req,res,next){
         try {
               const problem=await problemservice.getProblem(req.params.id);
               return res.status(StatusCodes.CREATED).json({
                success:true,
                message:"successfully fetched a problem",
                error:{},
                data:problem
             });
           } catch (error) {
                next(error);
           }
}

 async function getProblems(req,res,next){
       try {
             const response=await problemservice.getProblems();
             return res.status(StatusCodes.CREATED).json({
                success:true,
                message:"successfully fetched all problems",
                error:{},
                data:response
             })
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