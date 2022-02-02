import styled from "styled-components";

export const Form = styled.form`
  width: 60%;
  min-width: 220px;
  height: 80%;
  min-height: 300px;
  padding: 10px 15px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 6px 0px rgba(128, 128, 128, 1);
  margin: auto;

  @media screen and (min-width: 760px) {
    width: 100%;
    margin: 0;
  }
`;
export const Button = styled.button`
  background-color: #fe9e63;
  color: #fff;
  height: 30px;
  width: 140px;
  border-radius: 20px;
`;
export const Center = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
`;
