import styled from 'styled-components';

export const Minute = styled.span`
  font-size: 12px;
  color: #515151;
  text-decoration: underline;
  padding-left: 6px;

  &:hover {
    cursor: pointer;
  }
`;


export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Title = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 500;
  margin-right: 0.7rem;
`;

export const Professor = styled.div`
  display: flex;
  color: #515151;
  font-size: 14px;
  margin: 0.3rem 0;
`;

export const Option = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: rgb(239, 239, 239);
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 500;
`;

export const RateWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-top: 14px;
`;

export const Rate = styled.span`
  color: #346cfd;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 500;
  padding-left: 5px;
  &#modal {
    font-size: 16px;
    padding-left: 0px;
  }
`;

export const LectureWrapper = styled.div`
  width: 100%;
  border: 1px solid #000000;
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  font-family: Pretendard;
`;

export const MarginTop = styled.div`
  padding: 14px 24px;
`;
export const MarginRight = styled.span`
  margin-right: 6px;
  font-size: 1rem;
`;
export const FlexContainer = styled.div`
  display: flex;
  &#col {
    flex-direction: column;
  }
`;

export const StarFlex = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1rem;
  padding: 6px 12px;
  font-family: Pretendard;
  font-size: 13px;
  &#top {
    border-top: 1px solid #e0e0e0;
  }
  &#bottom {
  }
  &#between {
    justify-content: space-between;
  }
`;

export const PaddingRight = styled.span`
  padding-right: 0.7rem;
`;

export const FlexWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

   @media screen and (max-width: 768px) {
    width: 100%;
  display: flex;

  }
`;

export const FlexWrapSub = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;

`;

export const FullWrapSub = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
  display: flex;

  }
 

  }
`;


export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  background: #ffffff;
  padding : 4px;
`;


export const BB = styled.input`
  margin: 0;
  border: none;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 8px);
  color: var(--button-color, #000000);
  background: var(--button-bg-color, #ffffff);

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
