import styled from "styled-components";

const CardContainer = styled.div`
  min-width: 20rem;
  width: 22vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: var(--card-shadow);
  border-radius: 1rem;
  transition: 200ms ease background-color;
  
  @media screen and (max-width: 400px) {
    min-width: 80vw;
  }

  @media screen and (min-width: 730px) and (max-width: 850px) {
    min-width: 18rem;
  }
  
  &:hover {
    background: lightgray;
  }
`

export default CardContainer