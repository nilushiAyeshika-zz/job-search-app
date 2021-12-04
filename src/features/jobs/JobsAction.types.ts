import { IJob } from '../../containers/job/searchJob/SearchJob.types'

export const GET_JOBS = 'GET_JOBS'
export const GET_JOBS_SUCCESS = 'GET_JOBS_SUCCESS'
export const GET_JOBS_ERROR = 'GET_JOBS_ERROR'
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS'
export const APPLY_TO_JOB = 'APPLY_TO_JOB'
export const POLLING_TIME_OUT = 'POLLING_TIME_OUT'

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
export interface IClearResults {
  type: typeof CLEAR_SEARCH_RESULTS
}
export interface IApplyToJob {
  type: typeof APPLY_TO_JOB
  payload: string
}
export interface IPollingTimeOut {
  type: typeof POLLING_TIME_OUT
}

export type JobsDispatchTypes =
  | IGetJobs
  | IGetJobsSuccess
  | IGetJobsError
  | IClearResults
  | IApplyToJob
  | IPollingTimeOut
