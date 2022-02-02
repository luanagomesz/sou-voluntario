import styled from "styled-components";

export const Form = styled.form`

width: 30%;
min-width: 220px;
height: 90%;
padding: 10px 15px;
max-width: 350px;
display: flex;
flex-direction: column;
justify-content: space-around;
background-color: #fff;
border-radius: 8px;
box-shadow: 0px 0px 6px 0px rgba(128,128,128,1);

`
export const Button = styled.button`

background-color: #FE9E63;
color: #fff;
height: 30px;
width: 140px;
border-radius: 20px;
`
export const Center = styled.div`

display: flex;
justify-content: center;
width: 100%;
align-items: center;
`
export const RightDiv = styled.div`
  width: 40%;
  min-width: 220px;
  height: 100%;
  padding: 10px 15px;
  max-width: 350px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 800px) {
    height: 25%;
  }
`;

export const LogoImg = styled.img`
  width: 80%;
  min-width: 250px;
  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const TextSignup = styled.div`
  color: var(--darkblue);
  height: 40%;
  font-size: 18px;
  width: 100%;
  text-align: center;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const DivButton = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  background-color: #D5E0E4;
`;

export const DivFooter = styled.div`
  width: 100%;
  max-width: 200px;
  text-align: center;
`;

export const TextButton = styled.h3`
  font-weight: 100;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const ButtonToggle = styled.button`
  width: 50%;
  height: 90%;
  border-radius: 8px;
  background-color: transparent;
  color: var(--grey-100);
`;

export const ButtonToggleInst = styled.button`
  margin-left: 4px;
  width: 50%;
  height: 90%;
  border-radius: 8px;
  color: #fff;
  background-color: var(--cyan); ;
`;

export const Redirect = styled.div`
  margin-top: 10px;
  && a {
    color: var(--grey-50);
  }
`;