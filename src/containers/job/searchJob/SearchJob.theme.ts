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

  .searchJob__clear {
    margin-bottom: 5.5rem;
    margin-top: 2rem;
    text-decoration: underline;
    &:hover {
      cursor: pointer;
    }
  }

  .searchJob__icon {
    font-size: 7.5rem;
    margin-top: 5rem;
  }

  @media (max-width: 620px) {
    .searchJob__Inner {
      margin-top: -55rem;
    }
  }
`

export default SearchJobWrapper
