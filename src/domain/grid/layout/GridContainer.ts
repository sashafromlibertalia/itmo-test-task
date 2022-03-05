import styled from "styled-components";

const GridContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 730px) {
    justify-content: center;
  }
`

export default GridContainer