import styled from 'styled-components'
import { appTheme } from '../../../theme/Theme'

const ViewJobWrapper = styled.div`
  position: relative;
  margin-bottom: 6rem;

  .viewJob__main {
    padding: 0 2rem;
  }

  .viewJob__Inner {
    position: relative;
    z-index: 5;
    margin-top: -53rem;
    padding: 10rem 7rem 5rem 7rem;
    background: ${appTheme.colors.DEFAULT_BG};
    width: 70rem;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0px 2px 15px 1px rgba(0, 22, 99, 0.3);
  }

  .button__back--transparent {
    position: absolute;
    left: 2rem;
    top: 3rem;
    z-index: 2;

    svg {
      margin-right: 0;
      font-size: 2.5rem;
    }
  }

  .job__label {
    display: flex;
    padding: 0.4rem 0;
    border: 1px solid ${appTheme.colors.TYPOGRAPHY_LABEL};
    width: 5.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 1.5rem;
    top: 2rem;
  }

  .job__description {
    margin-top: 5rem;
    height: calc(100vh - 53rem);
    overflow-y: auto;
    min-height: 20rem;

    p {
      margin-bottom: 2rem;
      color: ${appTheme.colors.TYPOGRAPHY_MIDDLE_LIGHT};
      font-size: ${appTheme.fontSizes.FONT_SIZE_XM};
    }
  }

  .job__status {
    height: 4.5rem;

    p {
      width: 10rem;
    }
  }

  @media (max-width: 800px) {
    .viewJob__Inner {
      width: 100%;
    }
  }

  @media (max-width: 580px) {
    .job__header {
      flex-direction: column;
    }

    .job__innerHeader {
      align-items: center;
    }

    .job__apply {
      justify-content: center;
    }

    .viewJob__Inner {
      padding: 10rem 3rem 5rem 3rem;
    }

    .job__description {
      height: auto;
    }
  }
`

export default ViewJobWrapper
