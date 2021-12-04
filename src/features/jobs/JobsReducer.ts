import {
  GET_JOBS,
  GET_JOBS_SUCCESS,
  GET_JOBS_ERROR,
  CLEAR_SEARCH_RESULTS,
  APPLY_TO_JOB,
  POLLING_TIME_OUT,
  JobsDispatchTypes,
} from './JobsAction.types'
import { IJobsDefaultState } from './JobsReducer.types'

const defaultState: IJobsDefaultState = {
  jobList: undefined,
  isLoading: false,
  searchOptions: {
    queryString: '',
    location: '',
  },
  appliedJobs: [],
  isPollingTimeOut: false,
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
        isPollingTimeOut: false,
      }
    case GET_JOBS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jobList: action.payload.jobList,
        isPollingTimeOut: false,
      }
    case GET_JOBS_ERROR:
      return {
        ...state,
        isLoading: false,
        jobList: undefined,
        isPollingTimeOut: false,
      }
    case CLEAR_SEARCH_RESULTS:
      return {
        ...state,
        isLoading: false,
        jobList: undefined,
        searchOptions: {
          queryString: '',
          location: '',
        },
        isPollingTimeOut: false,
      }
    case POLLING_TIME_OUT:
      return {
        ...state,
        jobList: [],
        isPollingTimeOut: true,
        isLoading: false,
      }
    case APPLY_TO_JOB:
      return {
        ...state,
        appliedJobs: [...state.appliedJobs, action.payload],
      }
    default:
      return state
  }
}

export default JobsReducer
