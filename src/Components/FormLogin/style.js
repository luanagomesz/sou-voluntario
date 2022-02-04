import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  min-width: 220px;
  height: 80%;
  min-height: 300px;
  padding: 10px 15px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: transparent;
  border-radius: 8px;

  @media (min-width: 600px) {
    background-color: #fff;
    box-shadow: 0px 0px 6px 0px rgba(128, 128, 128, 1);
  }
`;
export const Button = styled.button`
  background-color: #fe9e63;
  color: #fff;
  height: 40px;
  max-width: 250px;
  width: 100%;
  border-radius: 20px;
  font-size: 1.25rem;
`;
export const Center = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
`;
