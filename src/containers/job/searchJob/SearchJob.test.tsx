import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import SearchJob from './SearchJob'
import { findByTestAttr } from '../../../utils/Test.utils'
import { appTheme } from '../../../theme/Theme'

const mockStore = configureMockStore([thunk])

const className = 'className'

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

const defaultProps = {
  className,
}

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

const customEmptyDataStoreState = {
  ...defaultStoreState,
  jobs: { ...defaultStoreState.jobs, jobList: [] },
}

const customDataStoreState = {
  ...defaultStoreState,
  jobs: { ...defaultStoreState.jobs, jobList: jobsArray, appliedJobs: appliedJobsArray },
}

const customErrorStoreState = {
  ...defaultStoreState,
  jobs: { ...defaultStoreState.jobs, isPollingTimeOut: true },
}

const setup = (props: any, defaultStore = {}) => {
  const setupProps = { ...props }
  const store = mockStore(defaultStore)
  return mount(
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <Router>
          <SearchJob {...setupProps} />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

describe('<SearchJob />', () => {
  let wrapper: any

  beforeAll(() => {
    wrapper = setup(defaultProps, defaultStoreState)
  })

  test('test search job wrapper initial load', () => {
    const component = findByTestAttr(wrapper, 'search-job-wrapper')
    expect(component.exists()).toBe(true)
  })
  test('test search welcome text', () => {
    const element = findByTestAttr(wrapper, 'search-job-welcome-text')
    expect(element.exists()).toBeTruthy()
  })
  test('test search initial message', () => {
    const element = findByTestAttr(wrapper, 'search-job-initial-message')
    expect(element.exists()).toBeTruthy()
  })

  describe('for empty search result', () => {
    beforeEach(() => {
      wrapper = setup(defaultProps, customEmptyDataStoreState)
    })
    afterAll(() => {
      wrapper.unmount()
    })
    test('test job search result no data message should be shown', () => {
      const emptyMessageElement = findByTestAttr(wrapper, 'search-job-no-data-found-message')
      expect(emptyMessageElement.length).toBe(1)
    })
    test('test job card should not be shown', () => {
      const rowRecords = findByTestAttr(wrapper, 'job-card-component')
      expect(rowRecords.length).toBe(0)
    })
    test('test job polling error message should not be shown', () => {
      const rowRecords = findByTestAttr(wrapper, 'search-job-error-message')
      expect(rowRecords.length).toBe(0)
    })
    test('test job search result clear button should be shown', () => {
      const emptyMessageElement = findByTestAttr(wrapper, 'search-job-result-clear')
      expect(emptyMessageElement.length).toBe(1)
    })
  })

  describe('for search result available', () => {
    beforeEach(() => {
      wrapper = setup(defaultProps, customDataStoreState)
    })
    afterAll(() => {
      wrapper.unmount()
    })
    test('test job search result no data message should not be shown', () => {
      const emptyMessageElement = findByTestAttr(wrapper, 'search-job-no-data-found-message')
      expect(emptyMessageElement.length).toBe(0)
    })
    test('test job card should be shown', () => {
      const rowRecords = findByTestAttr(wrapper, 'job-card-component')
      expect(rowRecords.length).toBeGreaterThan(0)
    })
    test('test job polling error message should not be shown', () => {
      const rowRecords = findByTestAttr(wrapper, 'search-job-error-message')
      expect(rowRecords.length).toBe(0)
    })
    test('test job search result clear button should be shown', () => {
      const emptyMessageElement = findByTestAttr(wrapper, 'search-job-result-clear')
      expect(emptyMessageElement.length).toBe(1)
    })
  })

  describe('for search polling time out', () => {
    beforeEach(() => {
      wrapper = setup(defaultProps, customErrorStoreState)
    })
    afterAll(() => {
      wrapper.unmount()
    })
    test('test job search result clear button should not be shown', () => {
      const emptyMessageElement = findByTestAttr(wrapper, 'search-job-result-clear')
      expect(emptyMessageElement.length).toBe(0)
    })
  })
})
