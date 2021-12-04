import React, { useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

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

  const postedDay = moment(jobPostedDay).format('DD MMM YYYY')

  return (
    <CardWrapper
      id={id}
      className={className}
      jobTitle={jobTitle}
      company={company}
      description={description}
      location={location}
      jobPostedDay={jobPostedDay}
      callbackValue={callbackValue}
      isApplied={isApplied}
      onClick={handleClick}
      data-test="job-card-component"
    >
      <Grid direction="row">
        <Text size="l" weight="medium" className="card__jobTitle" data-test="job-card-title">
          {jobTitle}
        </Text>
        {isApplied && <StatusLabel label="Applied" data-test="job-card-is-applied" />}
      </Grid>
      <Text margin="0 0 1rem 0" size="s" data-test="job-card-company">
        {company}
      </Text>
      <Grid className="card__job">
        <Text size="xs" color="typo-label" weight="bold" data-test="job-card-type">
          Full-time
        </Text>
      </Grid>
      <Grid margin="0 0 1rem 0">
        <Text size="xms" color="typo-middle-light" data-test="job-card-description">
          <span dangerouslySetInnerHTML={{ __html: description }} className="card__description" />
        </Text>
      </Grid>
      <Grid margin="0 0 1rem 0" alignItems="center" data-test="job-card-location-icon">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="card__locationIcon" />
        <Text data-test="job-card-location">{location}</Text>
      </Grid>
      <Grid>
        <Text size="xs" data-test="job-card-posted-day">
          {postedDay}
        </Text>
      </Grid>
    </CardWrapper>
  )
}

Card.defaultProps = {
  isApplied: false,
}

export default Card
