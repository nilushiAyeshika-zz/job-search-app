import axios from 'axios'

import ApiHelper from '../helpers/ApiHelper'
import { IConfig } from './JobsApi.types'

class JobsApi {
  /**
   * get jobs
   * @param query
   * @param location
   */
  getJobs = async (query: string, location: string) => {
    const config = {
      headers: ApiHelper.createHeader(),
      url: `${process.env.REACT_APP_JOB_SERVICES}/search`,
      method: 'post',
      params: {
        ...(query !== '' && { query }),
        ...(location !== '' && { location }),
      },
    }

    return axios.request(config as IConfig)
  }
}

export default new JobsApi()
