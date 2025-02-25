const logger = require('../config/logger.config');
const InternalServer = require('../Errors/Internalserver.error');
const NotFoundError = require('../Errors/NotFoundError');
const { Problem }=require('../models/index');

class ProblemRepository{
       
    async createProblem(problemData){
        try {
            const problem=await Problem.create({
                title:problemData.title,
                description:problemData.description,
                codeStubs:problemData.codeStubs,
                testcases:(problemData.testcases)?problemData.testcases:[]
            }); 
            return problem;
        } catch (error) {
            console.log(error);
            throw NotFoundError('not found');
        }
    }
       
    async getProblems(){
        try {
            const problems=await Problem.find({});
            return problems;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(id){
        try {
             const problem=await Problem.findById(id);
             if(!problem){
                throw new NotFoundError("problem",id);
             }
             return problem;
        } catch (error) {
            console.log(error);
            throw error;    
        }
    }

    async deleteProblem(id){
        try {
            const problem=await Problem.findByIdAndDelete(id);
            if(!problem){
                throw new NotFoundError("problem",id);
            }
            return problem;
        } catch (error) {
            // if (error.name === "MongoNetworkError" || error.name === "MongooseServerSelectionError") {
            //     // Handle DB connection errors
            //     throw new InternalServer("Database is not available. Please try again later.");
            // }
            logger.warn(`problem with ${id} not found in db for sure::${error.stack}::${error.name}::${error.message}`);

             throw error;
            //throw new NotFoundError(id,'not found');
        }
    }
}

module.exports=ProblemRepository;