import { FC, useCallback } from 'react'

import Card from '../../../components/job/card/Card.component'
import Text from '../../../components/core/text/Text.component'
import Grid from '../../../components/layout/grid/Grid.component'
import Search from '../../../components/job/search/Search.component'
import Header from '../../../components/shared/header/Header.component'

import SearchJobWrapper from './SearchJob.theme'

const SearchJobScreen: FC = () => {
  const handleSuccess = useCallback(() => {
    console.log('search success')
  }, [])

  return (
    <SearchJobWrapper>
      <Header />
      <Grid className='searchJob__Inner' direction='column' alignItems='center'>
        <Text size='xxl' weight='bold' color='typo-white' textAlign='center' className='searchJob__header'>
          Welcome to Dev Jobs
        </Text>
        <Search
          onSubmitSuccess={handleSuccess}
        />
        <Card
          id='111111'
          jobTitle='React developer'
          company='experteer'
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. c'
          location='location'
          jobPostedDay='1 jan 2016'
          callbackValue='hghhg'
        />
        <Card
          id='111111'
          jobTitle='React developer'
          company='experteer'
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. c'
          location='location'
          jobPostedDay='1 jan 2016'
          callbackValue='hghhg'
          isApplied
        />
        <Card
          id='111111'
          jobTitle='React developer'
          company='experteer'
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. c'
          location='location'
          jobPostedDay='1 jan 2016'
          callbackValue='hghhg'
        />
        <Card
          id='111111'
          jobTitle='React developer'
          company='experteer'
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. c'
          location='location'
          jobPostedDay='1 jan 2016'
          callbackValue='hghhg'
        />
      </Grid>
    </SearchJobWrapper>
  )
}

export default SearchJobScreen
