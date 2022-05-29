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

export const FixedBox = styled.div`
  position: fixed;
  z-index: 1;
  padding: 10px;
  background: lightseagreen;
  border-radius: 6px;
  color: #fff;
  border: 1px solid rgb(23, 122, 117);
  text-align: left;

  &#fixed {
    width: 100%;
    border-radius: 0;
    text-align: center;
  }
  `



export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  background: #d9d9d9;
  padding : 8px;
`;


export const Button = styled.input`
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
