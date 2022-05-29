import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  background: #ffffff;
  padding : 8px;
`;


export const Button = styled.button`
color: white;
background: #4B89DC;
padding: 0.375rem 0.75rem;
border: 1px solid #B1CCF0;
border-radius: 0.25rem;
font-size: 1rem;
line-height: 1.5;

  --button-font-size: 1rem;
    --button-padding: 12px 16px;
    --button-radius: 8px;

  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #025ce2);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #025ce2);
  }
`;
