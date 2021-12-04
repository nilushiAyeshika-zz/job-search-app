import React, { useCallback, useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'

import Grid from '../../layout/grid/Grid.component'
import Button from '../../../components/core/button/Button.component'
import Text from '../../../components/core/text/Text.component'
import { getJobs, pollingTimeOut } from '../../../features/jobs/JobsAction'
import { ISearchProps, ISearchFormValues } from './Search.types'
import { JobConstants } from '../../../constants/JobConstants'

import { SearchWrapper } from './Search.theme'

const Search: React.FC<ISearchProps> = (props) => {
  const { className } = props

  const dispatch = useDispatch()
  let pollingResults: any
  const { searchOptions, jobList } = useSelector((state: any) => state.jobs)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const initialValues: ISearchFormValues = {
    location: searchOptions.location,
    queryString: searchOptions.queryString,
  }

  const handleSubmit = useCallback(async (values, actions) => {
    actions.setSubmitting(false)
    setButtonDisabled(true)
    dispatch(getJobs(values.queryString, values.location))
    setButtonDisabled(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const schema = Yup.object().shape({
    queryString: Yup.string().trim().required('Query string is required'),
  })

  /**
   * Polling results for one minute
   * after one minute it will give a timeout
 */

  useEffect(() => {
    if (searchOptions.queryString !== '' || searchOptions.location !== '') {
      const startTime = new Date().getTime()
      if (!jobList) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        pollingResults = setInterval(() => {
          if (new Date().getTime() - startTime > JobConstants.TimeoutWait) {
            clearInterval(pollingResults)
            dispatch(pollingTimeOut())
          } else {
            dispatch(getJobs(searchOptions.queryString, searchOptions.location))
          }
        }, JobConstants.PollingWait)
      }
      return () => clearInterval(pollingResults)
    }
  }, [searchOptions.queryString, searchOptions.location, jobList])

  return (
    <SearchWrapper className={className}>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
        validationSchema={schema}
        render={({ handleChange, values }) => (
          <Form data-test="add-new-question-form">
            <Grid direction="row" className="search__innerWrapper">
              <Grid className="search__fieldsWrapper">
                <Grid direction="column" className="search__fieldWrapper">
                  <Field
                    id="location"
                    name="location"
                    placeholder="Location"
                    className="formik-field"
                    autoComplete="off"
                    onChange={handleChange}
                    value={values.location}
                  />
                  <ErrorMessage name="location" component="div" className="formik-error-label" />
                </Grid>
                <Grid direction="column" className="search__fieldWrapper">
                  <Field
                    id="queryString"
                    name="queryString"
                    placeholder="Find your dream job now"
                    className="formik-field"
                    autoComplete="off"
                    onChange={handleChange}
                    value={values.queryString}
                  />
                  <ErrorMessage name="queryString" component="div" className="formik-error-label" />
                </Grid>
              </Grid>
              <Grid className="search__button">
                <Button type="submit" width="15rem" height="4.5rem" disabled={buttonDisabled}>
                  <Text size="m" color="typo-white">
                    Search
                  </Text>
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      ></Formik>
    </SearchWrapper>
  )
}

export default Search
