import { FC } from 'react'

import RouteConfig from '../../routeConfig/RouteConfig'

const Main: FC = () => {
  return (
    <div data-test="main-container">
      <RouteConfig data-test="route-config-component" />
    </div>
  )
}

export default Main
