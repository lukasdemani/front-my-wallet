import styled from "styled-components";

const Container = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;

  img{
    margin-top: 250px;
  }

  @media screen and (min-width: 800px) {
    img{
      margin-top: 100px;
    }
  }
`;

export default Container;