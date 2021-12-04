import { IJob } from '../../containers/job/searchJob/SearchJob.types'

export interface IJobsDefaultState {
  jobList: IJob[] | undefined
  isLoading: boolean
  searchOptions: {
    queryString: string
    location: string
  }
  appliedJobs: string[]
}
