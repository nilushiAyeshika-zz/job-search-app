import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import Search from './Search.component'
import { findByTestAttr } from '../../../utils/Test.utils'
import { appTheme } from '../../../theme/Theme'

const mockStore = configureMockStore([thunk])

const className = 'className'

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

const setup = (props: any, defaultStore = {}) => {
  const setupProps = { ...props }
  const store = mockStore(defaultStore)
  return mount(
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <Router>
          <Search {...setupProps} />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

describe('<Search/>', () => {
  let wrapper: any

  beforeAll(() => {
    wrapper = setup(defaultProps, defaultStoreState)
  })

  test('test search wrapper initial load', () => {
    const component = findByTestAttr(wrapper, 'search-wrapper')
    expect(component.exists()).toBe(true)
  })
  test('test search form', () => {
    const element = findByTestAttr(wrapper, 'search-form')
    expect(element.exists()).toBeTruthy()
  })
  test('test search form location field', () => {
    const element = findByTestAttr(wrapper, 'search-location-field')
    expect(element.exists()).toBeTruthy()
  })
  test('test search form query field', () => {
    const element = findByTestAttr(wrapper, 'search-query-field')
    expect(element.exists()).toBeTruthy()
  })
  test('test search button', () => {
    const element = findByTestAttr(wrapper, 'search-button')
    expect(element.exists()).toBeTruthy()
  })
})
