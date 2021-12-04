import styled from 'styled-components'
import { appTheme } from '../../../../theme/Theme'

export const JobListLoaderWrapper = styled.div`
  display: flex;
  width: 49rem;
  flex-direction: column;
  padding: 2rem;
  border-radius: 2rem;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  object-fit: contain;
  border-radius: 2rem;
  box-shadow: 0px 2px 6px 1px rgba(0, 22, 99, 0.12);
  border-radius: 0.2rem;
  margin-bottom: 2rem;
  background: ${appTheme.colors.DEFAULT_BG};

  @media (max-width: 460px) {
    width: 100%;
  }
`
