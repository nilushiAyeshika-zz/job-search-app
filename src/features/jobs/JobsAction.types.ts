import { IJob } from '../../containers/job/searchJob/SearchJob.types'

export const GET_JOBS = 'GET_JOBS'
export const GET_JOBS_SUCCESS = 'GET_JOBS_SUCCESS'
export const GET_JOBS_ERROR = 'GET_JOBS_ERROR'

export interface IGetJobs {
  type: typeof GET_JOBS
  payload: {
    searchOptions: {
      queryString: string
      location: string
    }
  }
}

export interface IGetJobsSuccess {
  type: typeof GET_JOBS_SUCCESS
  payload: { jobList: IJob[] }
}

export interface IGetJobsError {
  type: typeof GET_JOBS_ERROR
}

export type JobsDispatchTypes = IGetJobs | IGetJobsSuccess | IGetJobsError
