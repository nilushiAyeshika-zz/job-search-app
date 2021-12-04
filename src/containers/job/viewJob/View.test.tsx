import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import ViewJob from './ViewJob'
import { findByTestAttr } from '../../../utils/Test.utils'
import { appTheme } from '../../../theme/Theme'

const mockStore = configureMockStore([thunk])

const jobsArray = [
  {
    Guid: '3535',
    Description: 'Sample Description',
    Title: 'React SE',
    Location: 'Germany',
    Published: 'Tue, 23 Nov 2021 08:18:06 Z',
    Company: 'Alasco',
    Url: 'https://stackoverflow.com/jobs/559738/junior-frontend-typescript-react-engineer-m-alasco?a=31IyVQH3mo48&so_medium=Talent&so_source=TalentApi',
  },
]

const appliedJobsArray = ['559738']

const defaultProps = {}

const defaultStoreState = {
  jobs: {
    jobList: undefined,
    isLoading: false,
    searchOptions: {
      queryString: '',
      location: '',
    },
    appliedJobs: [],
    isPollingTimeOut: false,
  },
}

const customDataStoreState = {
  ...defaultStoreState,
  jobs: { ...defaultStoreState.jobs, jobList: jobsArray, appliedJobs: appliedJobsArray },
}

const setup = (props: any, defaultStore = {}) => {
  const setupProps = { ...props }
  const store = mockStore(defaultStore)
  return mount(
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <Router>
          <ViewJob {...setupProps} />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

describe('<ViewJob />', () => {
  let wrapper: any

  beforeAll(() => {
    wrapper = setup(defaultProps, customDataStoreState)
  })

  test('test view job wrapper initial load', () => {
    const component = findByTestAttr(wrapper, 'view-job-wrapper')
    expect(component.exists()).toBe(true)
  })
  test('test jobs back navigation', () => {
    const element = findByTestAttr(wrapper, 'view-job-back-navigation')
    expect(element.exists()).toBeTruthy()
  })
  test('test job title', () => {
    const element = findByTestAttr(wrapper, 'view-job-title')
    expect(element.exists()).toBeTruthy()
  })
  test('test job company', () => {
    const element = findByTestAttr(wrapper, 'view-job-company')
    expect(element.exists()).toBeTruthy()
  })
  test('test job location', () => {
    const element = findByTestAttr(wrapper, 'view-job-location')
    expect(element.exists()).toBeTruthy()
  })
  test('test job location icon', () => {
    const element = findByTestAttr(wrapper, 'view-job-location-icon')
    expect(element.exists()).toBeTruthy()
  })
  test('test job posted day', () => {
    const element = findByTestAttr(wrapper, 'view-job-posted-day')
    expect(element.exists()).toBeTruthy()
  })
  test('test job type', () => {
    const element = findByTestAttr(wrapper, 'view-job-type')
    expect(element.exists()).toBeTruthy()
  })
})
