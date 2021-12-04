import { FC } from 'react'
import { ToastContainer } from 'react-toastify'

import RouteConfig from '../../routeConfig/RouteConfig'

import 'react-toastify/dist/ReactToastify.css'

const Main: FC = () => {
  return (
    <div data-test="main-container">
      <RouteConfig data-test="route-config-component" />
      <ToastContainer data-test="toast-component" />
    </div>
  )
}

export default Main
