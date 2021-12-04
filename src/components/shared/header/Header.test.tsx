import { shallow } from 'enzyme'

import Header from './Header.component'
import { findByTestAttr } from '../../../utils/Test.utils'

const setup = () => {
  return shallow(<Header />)
}

describe('<Header/>', () => {
  const wrapper = setup()
  test('test header wrapper render', () => {
    const element = findByTestAttr(wrapper, 'header-wrapper')
    expect(element.exists()).toBeTruthy()
  })
  test('test header image', () => {
    const element = findByTestAttr(wrapper, 'header-image')
    expect(element.exists()).toBeTruthy()
  })
})
