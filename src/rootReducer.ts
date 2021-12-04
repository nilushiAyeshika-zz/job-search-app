import { combineReducers } from 'redux'
import JobsReducer from './features/jobs/JobsReducer'

const RootReducer = combineReducers({
  jobs: JobsReducer,
})

export default RootReducer
