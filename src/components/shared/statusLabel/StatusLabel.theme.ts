import styled from 'styled-components'

import { appTheme } from '../../../theme/Theme'

const StatusLabelWrapper = styled.div`
  display: flex;
  
  .card__applied {
    border: 1px solid ${appTheme.colors.TYPOGRAPHY_MIDDLE_LIGHT};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.6rem;
    border-radius: 0.4rem;
    background: ${appTheme.colors.LABEL_BG};
  }
`

export default StatusLabelWrapper
