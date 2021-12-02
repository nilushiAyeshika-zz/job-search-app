import React, { useCallback, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'

import Grid from '../../layout/grid/Grid.component'
// import QuestionAPIService from '../../../services/Questions'
import Button from '../../../components/core/button/Button.component'
import Text from '../../../components/core/text/Text.component'

import { ISearchProps, ISearchFormValues } from './Search.types'
import { SearchWrapper } from './Search.theme'

const Search: React.FC<ISearchProps> = (props) => {
  const { className, onSubmitSuccess } = props

  const dispatch = useDispatch()
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const initialValues: ISearchFormValues = { location: '', job: '' }

  const handleSubmit = useCallback(async (values, actions) => {
    actions.setSubmitting(false)
    setButtonDisabled(true)

    console.log(values)

    // const apiData = await QuestionAPIService.addNewQuestion(values.question, values.choices)

    // if (apiData) {
    //   dispatch(getQuestionList(1))
    //   toast.success('Question added successfully', { autoClose: 1500 })
    // }

    setButtonDisabled(false)
    onSubmitSuccess()
  }, [])

  const schema = Yup.object().shape(
    {
      location: Yup.string().trim()
        .when(['job'], {
          is: (job: string) => !job,
          then:  Yup.string().trim().required('Job or Location is required'),
        }),
      job: Yup.string().trim()
      .when(['location'], {
        is: (location: string) => !location,
        then:  Yup.string().trim().required('Job or Location is required'),
      }),
    },
    [['job', 'location']] // important to add
  );

  return (
    <SearchWrapper className={className}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
        validationSchema={schema}
      >
        <Form data-test="add-new-question-form">
          <Grid direction="row" className="search__innerWrapper">
            <Grid className="search__fieldsWrapper">
              <Grid direction="column" className="search__fieldWrapper">
                <Field
                  id="location"
                  name="location"
                  placeholder="Location"
                  className="formik-field"
                  autocomplete="off"
                />
                <ErrorMessage
                  name="location"
                  component="div"
                  className="formik-error-label"
                />
              </Grid>
              <Grid direction="column" className="search__fieldWrapper">
                <Field
                  id="job"
                  name="job"
                  placeholder="Find your dream job now"
                  className="formik-field"
                  autocomplete="off"
                />
                <ErrorMessage
                  name="job"
                  component="div"
                  className="formik-error-label"
                />
              </Grid>
            </Grid>
            <Grid>
              <Button
                type="submit"
                width="15rem"
                height="4.5rem"
                disabled={buttonDisabled}
              >
                <Text size="m" color="typo-white">
                  Search
                </Text>
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </SearchWrapper>
  )
}

export default Search
