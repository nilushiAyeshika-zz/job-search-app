import styled from 'styled-components'

const HeaderWrapper = styled.div`
  position: relative;
  height: 60rem;

  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    object-fit: cover;
  }

  &::after {
    position: absolute;
    z-index: 2;
    background: rgba(0, 0, 0, 0.6);
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    content: '';
  }

  .header__gradient {
    background: rgba(255, 255, 255, 0) linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(255, 255, 255, .1) 40%, rgba(255, 255, 255, .5) 75%, rgba(255, 255, 255, 1) 100%) repeat scroll 0 0;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 3;
    height: 40rem;
  }
`

export default HeaderWrapper
