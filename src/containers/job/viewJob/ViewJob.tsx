import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import Header from '../../../components/shared/header/Header.component'
import Grid from '../../../components/layout/grid/Grid.component'
import Button from '../../../components/core/button/Button.component'
import Text from '../../../components/core/text/Text.component'
import StatusLabel from '../../../components/shared/statusLabel/StatusLabel.component'

import ViewJobWrapper from './ViewJob.theme'

const ViewJobScreen: FC = () => {
  return (
    <ViewJobWrapper>
      <Header />
      <Grid className="viewJob__main" direction="column">
        <Grid className="viewJob__Inner" direction="column">
          <Button
            startIcon={<FontAwesomeIcon
              icon={faChevronLeft}
            />}
            className="button__back--transparent"
            backgroundColor="transparent"
            hoverColor="transparent"
          />
          <Grid direction="row" className="job__header">
            <Grid direction="column" className="job__innerHeader">
              <Text size='l' weight='medium' margin="0 0 0.4rem 0">Job Title</Text>
              <Text margin="0 0 0.4rem 0">Company</Text>
              <Text margin="0 0 0.4rem 0">Location</Text>
              <Text size='xxs' margin="0 0 0.4rem 0">1 jan 2016</Text>
              <Text size='xxs' color='typo-label' weight='bold' className="job__label">Full-time</Text>
            </Grid>
            <Grid width="auto" padding="2rem 0 0 0" className="job__apply">
              <Button
                type="submit"
                width="12rem"
                height="4.5rem"
                // disabled={buttonDisabled}
              >
                <Text size="m" color="typo-white">
                  Apply
                </Text>
              </Button>
              {/* <StatusLabel label="Applied" className="job__status"/> */}
            </Grid>
          </Grid>

          <Grid className="job__description" direction="column">
            <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recentl
            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
            <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recentl
            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
          </Grid>
          <Grid width="auto" padding="4rem 0 0 0" justifyContent="center">
              <Button
                type="submit"
                width="12rem"
                height="4.5rem"
                // disabled={buttonDisabled}
              >
                <Text size="m" color="typo-white">
                  Apply
                </Text>
              </Button>
            </Grid>
        </Grid>
      </Grid>
    </ViewJobWrapper>
  )
}

export default ViewJobScreen
