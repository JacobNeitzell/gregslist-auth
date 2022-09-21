import { jobsService } from "../services/JobsService.js";
import BaseController from "../utils/BaseController.js";

export class JobsController extends BaseController {

  constructor() {
    super('api/jobs')
    this.router
      .get('', this.getJobs)

  }

  async getJobs(req, res, next) {
    try {
      const job = await jobsService.getJobs()
      res.send(job)
    } catch (error) {
      next(error)
    }


  }







}