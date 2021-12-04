import { shallow } from 'enzyme'

import Card from './Card.component'
import { findByTestAttr } from '../../../utils/Test.utils'

const id = 'ii79'
const className = 'className'
const jobTitle = 'React SE'
const company = 'Test company'
const jobPostedDay = '01 Dec 2021'
const description = 'Test'
const isApplied = true
const callbackValue = jest.fn()
const onClick = jest.fn()

const defaultProps = {
  id,
  className,
  jobTitle,
  company,
  description,
  location,
  jobPostedDay,
  callbackValue,
  isApplied,
  onClick,
}

const setup = (props: any) => {
  const setupProps = { ...props }
  return shallow(<Card {...setupProps} />)
}

describe('<Card/>', () => {
  const wrapper = setup(defaultProps)
  test('test job card component render', () => {
    const element = findByTestAttr(wrapper, 'job-card-component')
    expect(element.exists()).toBeTruthy()
  })
  test('test job card title', () => {
    const element = findByTestAttr(wrapper, 'job-card-title')
    expect(element.exists()).toBeTruthy()
  })
  test('test job card is applied label', () => {
    const element = findByTestAttr(wrapper, 'job-card-is-applied')
    expect(element.exists()).toBeTruthy()
  })
  test('test job card company', () => {
    const element = findByTestAttr(wrapper, 'job-card-company')
    expect(element.exists()).toBeTruthy()
  })
  test('test job card type', () => {
    const element = findByTestAttr(wrapper, 'job-card-type')
    expect(element.exists()).toBeTruthy()
  })
  test('test job card description', () => {
    const element = findByTestAttr(wrapper, 'job-card-description')
    expect(element.exists()).toBeTruthy()
  })
  test('test job card location icon', () => {
    const element = findByTestAttr(wrapper, 'job-card-location-icon')
    expect(element.exists()).toBeTruthy()
  })
  test('test job card location', () => {
    const element = findByTestAttr(wrapper, 'job-card-location')
    expect(element.exists()).toBeTruthy()
  })
  test('test job card posted day', () => {
    const element = findByTestAttr(wrapper, 'job-card-posted-day')
    expect(element.exists()).toBeTruthy()
  })
})
