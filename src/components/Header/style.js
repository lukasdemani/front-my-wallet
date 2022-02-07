import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 200px;
  padding: 0px 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 1;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

`;

const Text = styled.img`  

  width: 50px;
  height: 50px;

  font-size: 26px;
  color: #ffffff;

  border-radius: 50%;
`;

export {
  Container,
  Text
};