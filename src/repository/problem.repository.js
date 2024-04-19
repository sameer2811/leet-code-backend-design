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
           const data = await problemSchema.deleteOne({
               _id: id
           });
           return data;
       }

       async getAllProblems() {
           const data = await problemSchema.find({});
           return data;
       }

       async getProblemById(id) {
           const data = await problemSchema.findById(id);
           return data;
       }

       async updateProblem(updatedData, id) {
           let data = await problemSchema.findById(id);
           data = JSON.stringify(data);
           console.log("------------------", data)
           let newTask = [];
           let taskToBeUpdated = [];
           for (let key in updatedData) {

               console.log("value of key ", key.toString(), data, data.hasOwnProperty(key.toString()))
               if (data.hasOwnProperty(key)) {
                   consolelog("One");
                   taskToBeUpdated.push({
                       key: key,
                       value: data[key]
                   });
               } else {
                   console.log("Two");
                   newTask.push({
                       key: key,
                       value: updatedData[key]
                   });
               }
           }
           // Define the filter to identify the document(s) to update
           const filter = {
               '_id': id
           }
           // Define arrays of new fields and updated fields
           let update = {
               '$set': {}
           }

           console.log("New Field Coming here in newTask -- ", newTask);
           console.log("New Field Coming here in taskToBeUpdated -- ", taskToBeUpdated);

           for (let index = 0; index < newTask.length; index++) {
               console.log("New Field Coming here 1-- ", newTask[index]);
               update['$set'][newTask[index].key] = newTask[index].value;
           }
           for (let index = 0; index < taskToBeUpdated.length; index++) {
               console.log("New Field Coming here 2-- ", taskToBeUpdated[index]);
               update['$set'][taskToBeUpdated[index].key] = taskToBeUpdated[index].value;
           }
           await problemSchema.updateOne(filter, update)
           return {
               "values Map Updated  ": taskToBeUpdated,
               "New Task Inserted ": newTask
           }
       }
   }

   module.exports = ProblemRepository;