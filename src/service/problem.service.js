class ProblemService {

    constructor(backendRepository) {
        this.backendRepository = backendRepository;
    }

    async createProblem(problemData) {
        try {
            // get the sanitize problemData.description
            const problemStatus = await this.backendRepository.createProblem(problemData);
            return problemStatus;
        } catch (error) {
            console.log(error);
            throw (error);
        }
    }

    async getProblemById(id) {
        try {
            const problemStatus = await this.backendRepository.getProblemById(id);
            return problemStatus;
        } catch (error) {
            console.log(error);
            throw (error);
        }
    }

    async getAllProblems() {
        try {
            const problemStatus = await this.backendRepository.getAllProblems();
            return problemStatus;
        } catch (error) {
            console.log(error);
            throw (error);
        }
    }

    async deleteProblem(id) {
        try {
            const problemStatus = await this.backendRepository.deleteProblem(id);
            return problemStatus;
        } catch (error) {
            console.log(error);
            throw (error);
        }
    }

    async updateProblem(probemFields, id) {
        try {
            const problemStatus = await this.backendRepository.updateProblem(probemFields, id);
            return problemStatus;
        } catch (error) {
            console.log(error);
            throw (error);
        }
    }
}

module.exports = ProblemService;