import styled from 'styled-components'

import { appTheme } from '../../../theme/Theme'

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  background: ${appTheme.colors.DEFAULT_BG};
  padding: 2rem;
  box-shadow: 0px 2px 6px 1px rgba(0, 22, 99, 0.12);
  border-radius: 0.2rem;
  margin-bottom: 1rem;
  position: relative;

  .card__locationIcon {
    margin: -0.1rem 0.4rem 0 0;
    font-size: 1.2rem;
  }

  .card__jobTitle {
    width: 100%;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 22.5rem;
    width: auto;
    margin-right: 1.5rem;
  }

  .card__job {
    padding: 0.4rem 0.8rem;
    border: 1px solid ${appTheme.colors.TYPOGRAPHY_LABEL};
    width: 7rem;
    justify-content: center;
    align-items: center;
    border-radius: 1.5rem;
    position: absolute;
    right: 2.5rem;
    top: 2rem;
  }

  @media(max-width: 620px) {
    width: 100%;
  }
`

export default CardWrapper
