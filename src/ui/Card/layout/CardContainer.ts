import styled from "styled-components";

const CardContainer = styled.div`
  min-width: 20rem;
  min-height: 25rem;
  width: 22vw;
  height: 25vw;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: var(--card-shadow);
  border-radius: 1rem;

  @media screen and (max-width: 300px) {
    min-height: 18rem;
  }
  
  @media screen and (max-width: 400px) {
    min-width: 80vw;
  }

  @media screen and (min-width: 730px) and (max-width: 850px) {
    min-width: 18rem;
    min-height: 30rem;
  }
`

export default CardContainer