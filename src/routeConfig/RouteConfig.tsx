import { Routes, Route } from 'react-router-dom'

import SearchJobScreen from '../containers/job/searchJob/SearchJob'
import ViewJobScreen from '../containers/job/viewJob/ViewJob'
import RouteHelper from '../helpers/RouteHelper'

const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchJobScreen />} />
      <Route
        path={`${RouteHelper.JOB_DESCRIPTION_PATH}/:jobId`}
        element={<ViewJobScreen />}
      />
    </Routes>
  )
}

export default RouteConfig
