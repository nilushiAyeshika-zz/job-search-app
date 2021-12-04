import { FC, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMeh } from '@fortawesome/free-solid-svg-icons'

import Card from '../../../components/job/card/Card.component'
import Text from '../../../components/core/text/Text.component'
import Grid from '../../../components/layout/grid/Grid.component'
import Search from '../../../components/job/search/Search.component'
import Header from '../../../components/shared/header/Header.component'
import { IJob } from './SearchJob.types'
import { clearResults } from '../../../features/jobs/JobsAction'
import JobListLoader from '../../../components/shared/contentLoaders/jobListLoader/JobListLoader.component'
import { checkValueExits } from '../../../utils/CommonFunctions.utils'

import SearchJobWrapper from './SearchJob.theme'

const SearchJobScreen: FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { jobList, isLoading, appliedJobs, isPollingTimeOut } = useSelector((state: any) => state.jobs)
  const placeholderItemsCount = 2;

  const handleJobDescription = useCallback((value) => {
    navigate(`job/${value}`)
  }, [])

  const handleClearResults = useCallback(() => {
    dispatch(clearResults())
  }, [])

  const renderLoading = () => (
    <Grid margin="5rem 0 2rem 0" alignItems="center" direction="column">
      <Text size="xxl" margin="0 0 5rem 0">Your results will appear here....</Text>
      {Array.from(Array(placeholderItemsCount).keys()).map((index) => (
        <JobListLoader key={index} />
      ))}
    </Grid>
  )

  const renderNoResults = () => (
    <Grid margin="12rem 0 2rem 0" alignItems="center" direction="column">
      <Text size="xxl">Sorry, No results found.</Text>
      <FontAwesomeIcon icon={faMeh} className="searchJob__icon" />
    </Grid>
  )

  const renderPollingTimeOutState = () => (
    <Grid margin="12rem 0 2rem 0" alignItems="center" direction="column">
      <Text size="xxl">Sorry, Something went wrong, Please try again.</Text>
      <FontAwesomeIcon icon={faMeh} className="searchJob__icon" />
    </Grid>
  )

  const renderInitialState = () => (
    <Grid margin="12rem 0 2rem 0" alignItems="center" direction="column">
      <Text size="xxl">Search for show results.</Text>
      <FontAwesomeIcon icon={faSearch} className="searchJob__icon" />
    </Grid>
  )

  const renderSearchResults = () => (
    jobList.map((job: IJob) => {
      const isApplied = checkValueExits(job.Guid, appliedJobs)

      return (
        <Card
          key={job.Guid}
          id={job.Guid}
          jobTitle={job.Title}
          company={job.Company}
          description={job.Description}
          location={job.Location}
          jobPostedDay={job.Published}
          callbackValue={job.Guid}
          isApplied={isApplied}
          onClick={handleJobDescription}
        />
      )
    })
  )

  const renderJobList = () => {
    if (isLoading) {
      return renderLoading();
    } else if (!jobList) {
      return renderInitialState()
    } else if (jobList && jobList?.length > 0) {
      return renderSearchResults()
    } else if (jobList && jobList?.length === 0 && !isPollingTimeOut) {
      return renderNoResults()
    } else if (isPollingTimeOut) {
      return renderPollingTimeOutState()
    }
  }

  return (
    <SearchJobWrapper>
      <Header />
      <Grid className="searchJob__Inner" direction="column" alignItems="center">
        <Text
          size="xxl"
          weight="bold"
          color="typo-white"
          textAlign="center"
          className="searchJob__header"
          margin="0 0 5.5rem 0"
        >
          Welcome to Dev Jobs
        </Text>
        <Search />
        {jobList && <Text className="searchJob__clear" size="m" color="typo-white" onClick={handleClearResults}>Clear Search</Text>}
        {renderJobList()}
      </Grid>
    </SearchJobWrapper>
  )
}

export default SearchJobScreen
