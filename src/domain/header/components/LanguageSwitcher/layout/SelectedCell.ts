import styled from "styled-components";

const SelectedCell = styled.span`
  display: flex;
  width: 6rem;
  border-radius: 0.5rem;
  padding: 0.4rem 1rem;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--card-shadow);
  cursor: pointer;
  transition: 200ms background-color ease;

  &:hover {
    background: #F2F4FF;
    color: var(--text-default-color);
  }
`

export default SelectedCell