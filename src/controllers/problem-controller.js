const { StatusCodes }=require('http-status-codes');

function pingptoblemcontroller(req,res){
    return res.json({
        message:"ping controller is up"
    });
}

function addProblem(req,res){
  return res.Status(StatusCodes.NOT_IMPLEMENTED).json({
    message:"NOT IMPLEMENTED"
  });
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