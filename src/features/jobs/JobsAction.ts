import { Dispatch } from 'redux'

import { GET_JOBS, GET_JOBS_SUCCESS, GET_JOBS_ERROR, JobsDispatchTypes } from './JobsAction.types'

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
      console.log('call-api')
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
