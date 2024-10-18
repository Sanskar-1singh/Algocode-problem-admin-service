const sanitizeMarkdownContent=require('../utils/markedSantitizer');

class ProblemService{

    constructor(problemRepository){
        this.problemRepository=problemRepository;
    }

    async createProblem(problemData){
            try {
                problemData.description=sanitizeMarkdownContent(problemData.description);
                const problem=await this.problemRepository.createProblem(problemData);
                return problem;
            } catch (error) {
                console.log(error);
                throw error;
            }
    }

    async getProblems(){
        try {
            const problems=await this.problemRepository.getProblems();
            return problems;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(id){
      try {
            const problem=await this.problemRepository.getProblem(id);
            return problem;
      } catch (error) {
         console.log(error);
         throw error;
      }
    }

    async deleteProblem(id){
        try {
             const problem=await this.problemRepository.deleteProblem(id);
             return problem;
        } catch (error) {
            throw error;
        }
    }
}

module.exports=ProblemService;