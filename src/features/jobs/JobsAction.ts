import { Dispatch } from 'redux'

import {
  GET_JOBS,
  GET_JOBS_SUCCESS,
  GET_JOBS_ERROR,
  CLEAR_SEARCH_RESULTS,
  APPLY_TO_JOB,
  POLLING_TIME_OUT,
  JobsDispatchTypes
} from './JobsAction.types'

import JobsApi from '../../api/JobsApi'

export const getJobs =
  (query: string, location: string) => async (dispatch: Dispatch<JobsDispatchTypes>) => {
    try {
      dispatch({
        type: GET_JOBS,
        payload: {
          searchOptions: {
            queryString: query,
            location,
          },
        },
      })
      const { data } = await JobsApi.getJobs(query, location)
      if (Array.isArray(data)) {
        dispatch({
          type: GET_JOBS_SUCCESS,
          payload: {
            jobList: data.slice(0, 10), // Limit to first 10 results
          },
        })
      }
    } catch (e) {
      dispatch({
        type: GET_JOBS_ERROR,
      })
    }
  }

  export const clearResults = 
  () => async (dispatch: Dispatch<JobsDispatchTypes>) => {
    try {
      dispatch({
        type: CLEAR_SEARCH_RESULTS,
      })
    } catch (e) {
      console.error(e)
    }
  }

  export const applyToJob = 
  (id: string) => async (dispatch: Dispatch<JobsDispatchTypes>) => {
    try {
      dispatch({
        type: APPLY_TO_JOB,
        payload: id,
      })
    } catch (e) {
      console.error(e)
    }
  }

  export const pollingTimeOut = 
  () => async (dispatch: Dispatch<JobsDispatchTypes>) => {
    try {
      dispatch({
        type: POLLING_TIME_OUT,
      })
    } catch (e) {
      console.error(e)
    }
  }
