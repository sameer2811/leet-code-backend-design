   const {
       problemSchema
   } = require('./../models/index.js');

   class ProblemRepository {

       async createProblem(problemData) {
           const data = await problemSchema.create({
               title: problemData.title,
               description: problemData.description,
               testCases: problemData.testCases ? problemData.testCases : [],
           });
           return data;
       }

       async deleteProblem(id) {

       }

       async getAllProblems() {
           const data = await problemSchema.find({});
           return data;

       }

       async getProblemById(id) {
           const data = await problemSchema.findById(id);
           return data;
       }
   }

   module.exports = ProblemRepository;