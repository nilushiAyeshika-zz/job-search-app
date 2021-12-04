import { shallow } from 'enzyme'

import StatusLabel from './StatusLabel.component'
import { findByTestAttr } from '../../../utils/Test.utils'

const className = 'className'
const label = 'Full Time'

const defaultProps = {
  className,
  label,
}

const setup = (props: any) => {
  const setupProps = { ...props }
  return shallow(<StatusLabel {...setupProps} />)
}

describe('<StatusLabel/>', () => {
  const wrapper = setup(defaultProps)
  test('test status label wrapper render', () => {
    const element = findByTestAttr(wrapper, 'status-label-wrapper')
    expect(element.exists()).toBeTruthy()
  })
  test('test status text', () => {
    const element = findByTestAttr(wrapper, 'status-text')
    expect(element.exists()).toBeTruthy()
  })
})
