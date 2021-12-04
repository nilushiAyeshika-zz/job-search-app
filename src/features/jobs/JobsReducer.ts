import { GET_JOBS, GET_JOBS_SUCCESS, GET_JOBS_ERROR, JobsDispatchTypes } from './JobsAction.types'
import { IJobsDefaultState } from './JobsReducer.types'

const defaultState: IJobsDefaultState = {
  jobList: undefined,
  isLoading: false,
  searchOptions: {
    queryString: '',
    location: '',
  },
}

const JobsReducer = (
  state: IJobsDefaultState = defaultState,
  action: JobsDispatchTypes
): IJobsDefaultState => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        isLoading: true,
        searchOptions: {
          queryString: action.payload.searchOptions.queryString,
          location: action.payload.searchOptions.location,
        },
        jobList: undefined,
      }
    case GET_JOBS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jobList: action.payload.jobList,
      }
    case GET_JOBS_ERROR:
      return {
        ...state,
        isLoading: false,
        jobList: undefined,
      }
    default:
      return state
  }
}

export default JobsReducer
