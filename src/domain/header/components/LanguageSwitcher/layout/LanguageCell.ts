import styled from "styled-components";

const LanguageCell = styled.span`
  width: 100%;
  cursor: pointer;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 200ms background-color ease;
  color: var(--text-default-color);

  &:hover {
    background: #F2F4FF;
    color: var(--text-default-color);
  }
`

export default LanguageCell