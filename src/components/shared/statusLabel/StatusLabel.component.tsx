import { FC } from 'react'

import { StatusLabelProps } from './StatusLabel.types'
import Text from '../../core/text/Text.component'

import StatusLabelWrapper from './StatusLabel.theme'

const StatusLabel: FC<StatusLabelProps> = (props) => {
  const { className, label } = props

  return (
    <StatusLabelWrapper className={className} data-test="status-label-wrapper">
      <Text color="typo-middle-light" className="card__applied" data-test="status-text">
        {label}
      </Text>
    </StatusLabelWrapper>
  )
}

export default StatusLabel
