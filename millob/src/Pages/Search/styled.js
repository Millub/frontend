import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  #root>div {
      width: 90%;
      @media only screen and (min-width: 768px) {
        width: 90%;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  @media only screen and (max-width: 960px) {
    width: 90%;
  }
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 1000;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 10px;
`;

export const SearchResultWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 0.5rem;
  justify-content: space-between;
  align-items: center;
  

`;

export const SearchResultMenu = styled.div`
  display: flex;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  padding: 5px 16px;
  cursor: pointer;
  align-items: center;

  &:hover {
    background-color: #346cfd;
    color: white;
  }
  &#${({ check }) => check} {
    background-color: #346cfd;
    color: white;
  }

  &#sort {
    border: none;
    margin-left: 0;
    &:hover {
      background-color: #ffffff;
      color: #000000;
    }
  }
  &:first-child {
    cursor: context-menu;
  }

  @media only screen and (max-width: 480px) {

  display: flex;
  align-items: center;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  padding: 5px 5px;
  cursor: pointer;

  }
  
`;

export const MyEvaluationWrapper = styled.div`
  border: 2px solid #f1f1f1;
  border-radius: 10px;
  width: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1rem 0;
`;

export const SearchTitle = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-family: 'Pretendard-SemiBold';
  padding-top: 4rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 1.5px solid #000000;
  margin: 0.5rem 0;
  background-image: url('img/icon_search_24.svg');
  background-repeat: no-repeat;
  background-position: 99%;

  &:focus {
    outline: none;
  }
`;

export const Img = styled.img``;
export const HeadSelection = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 10px;
  width: 100%;
  justify-content: space-between;
`;

export const FlexWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const Color = styled.span`
  color: #346cfd;
  margin-left: 6px;
  text-align: center;
`;




export const StyledLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  cursor: default;

  &:before {
    display: block;
    content: "";
    height: 1rem;
    width: 1rem;
    background-color: white;
    border: 1px solid gainsboro;
    border-radius: 0.35rem;
  }

  &:after {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: block;
    opacity: 0;
    content: "";
    height: 1rem;
    width: 1rem;
    border: 1px solid transparent;
    border-radius: 0.35rem;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: limegreen;
  }
`;

export const StyledInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;

  &:checked + ${StyledLabel} {
    :after {
      opacity: 1;
    }
  }
`;

export const StyledP = styled.p`
  margin-left: 0.5rem;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  background: #ffffff;
  padding : 4px;
`;