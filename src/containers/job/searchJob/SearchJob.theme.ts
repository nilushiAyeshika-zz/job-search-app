import styled from 'styled-components'

const SearchJobWrapper = styled.div`
  position: relative;
  margin-bottom: 6rem;

  .searchJob__Inner {
    position: relative;
    z-index: 5;
    margin-top: -45rem;
    padding: 0 2rem;
  }

  .searchJob__header {
    margin-bottom: 5.5rem;
  }

  @media (max-width: 620px) {
    .searchJob__Inner {
      margin-top: -55rem;
    }
  }
`

export default SearchJobWrapper
