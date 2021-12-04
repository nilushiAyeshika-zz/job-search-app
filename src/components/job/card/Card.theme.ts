import styled from 'styled-components'

import { CardProps } from './Card.types'

import { appTheme } from '../../../theme/Theme'

const CardWrapper = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  width: 50rem;
  background: ${appTheme.colors.DEFAULT_BG};
  padding: 2rem;
  box-shadow: 0px 2px 6px 1px rgba(0, 22, 99, 0.12);
  border-radius: 0.2rem;
  margin-bottom: 1rem;
  position: relative;
  transition: transform 0.2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.04);
  }

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
    ${(props) => (props.isApplied ? `max-width: 22.5rem` : `max-width: 34.5rem`)};
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

  .card__description {
    display: -webkit-box;
    margin: 0 auto;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 5;
  }

  @media (max-width: 620px) {
    width: 100%;
  }

  @media (max-width: 800px) {
    .card__job {
      position: relative;
      top: auto;
      right: 0;
      margin-bottom: 2rem;
    }
  }
`

export default CardWrapper
