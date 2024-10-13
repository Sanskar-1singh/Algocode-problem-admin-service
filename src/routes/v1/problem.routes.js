const express=require('express');
const {  problemcontroller }=require('../../controllers/index');

const ProblemRouter=express.Router();

ProblemRouter.get('/ping',problemcontroller.pingptoblemcontroller);
ProblemRouter.get('/:id',problemcontroller.getProblem);
ProblemRouter.get('/',problemcontroller.getProblems);
ProblemRouter.post('/',problemcontroller.addProblem);
ProblemRouter.delete('/:id',problemcontroller.deleteProblem);
ProblemRouter.put('/:id',problemcontroller.updateProblem);

module.exports= ProblemRouter;