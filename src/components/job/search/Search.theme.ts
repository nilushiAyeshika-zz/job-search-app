import styled from 'styled-components'

import { appTheme } from '../../../theme/Theme'

export const SearchWrapper = styled.div`
  display: flex;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  .formik-label {
    margin-bottom: 1rem;
  }

  .formik-field {
    height: 4.5rem;
    padding: 0 1rem;
    width: 25rem;
    border: 1px solid #ddd;
    margin: 0 1.5rem 0 0;
  }

  .formik-error-label {
    font-size: ${appTheme.fontSizes.FONT_SIZE_XS};
    color: ${appTheme.colors.TYPOGRAPHY_LIGHT};
    margin-top: 0.2rem;
  }

  .info-message {
    font-style: italic;
  }

  @media (max-width: 800px) {
    .search__innerWrapper {
      flex-direction: column;
    }

    .search__fieldsWrapper {
      flex-direction: column;

      .formik-field {
        margin: 0;
        width: 40rem;
      }

      .search__fieldWrapper {
        margin-bottom: 1rem;
      }
    }
  }

  @media (max-width: 620px) {
    form {
      width: 100%;
    }

    .search__fieldsWrapper {
      .formik-field {
        width: 100%;
      }
    }
  }
`
