import styled from "styled-components";

const Menu = styled.menu`
  width: 5rem;
  height: 5rem;
  position: absolute;
  padding: 0;
  margin: 3rem 0 0 0;
  display: flex;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--background-color);
  box-shadow: var(--card-shadow);
  overflow-y: auto;
`;

export default Menu