import styled from 'styled-components'
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
