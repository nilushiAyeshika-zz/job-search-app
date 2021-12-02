import React, { useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import { CardProps } from './Card.types'
import Text from '../../core/text/Text.component'
import Grid from '../../layout/grid/Grid.component'
import StatusLabel from '../../shared/statusLabel/StatusLabel.component'

import CardWrapper from './Card.theme'

const Card: React.FC<CardProps> = (props) => {
  const {
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
  } = props

  const handleClick = useCallback(() => {
    onClick?.(callbackValue)
  }, [callbackValue, onClick])

  return (
    <CardWrapper
      id={id}
      className={className}
      onClick={handleClick}
    >
      <Grid direction='row'>
        <Text size='l' weight='medium' className='card__jobTitle'>{jobTitle}</Text>
        {isApplied && <StatusLabel label="Applied"/>}
      </Grid>
      <Text margin='0 0 1rem 0' size='s'>{company}</Text>
      <Grid margin='0 0 1rem 0'>
        <Text size='xms' color='typo-middle-light'>{description}</Text>
      </Grid>
      <Grid margin='0 0 1rem 0' alignItems='center'>
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          className="card__locationIcon"
        />
        <Text>{location}</Text>
      </Grid>
      <Grid>
        <Text size='xs'>{jobPostedDay}</Text>
      </Grid>
      <Grid className="card__job">
        <Text size='xs' color='typo-label' weight='bold'>Full-time</Text>
      </Grid>
    </CardWrapper>
  )
}

Card.defaultProps = {
  isApplied: false,
}

export default Card
