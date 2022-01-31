import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: 75px;
  border-radius: 6px;
  padding-left: 20px;
  padding-right: 20px;

  background-color: #fff;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  height: 40px;
  border-radius: 7px;
  padding-left: 20px;
  padding-right: 20px;

  font-size: 1.25rem;

  color: ${(props) => (props.isActivate ? "#fff" : "var(--grey-100)")};
  border: 1px solid var(--grey-0);
  background-color: ${(props) => (props.isActivate ? "var(--orange)" : "#fff")};

  transition: all 0.3s ease-in-out;
`;

export const InputSearch = styled.div`
  width: 100%;
  max-width: 350px;
  height: 50px;
  border: none;
  border-radius: 8px;

  background-color: var(--grey-0);

  display: flex;
  align-items: center;

  input {
    width: 100%;
    height: 100%;

    border-radius: 8px;
    border: none;

    padding-left: 20px;

    font-size: 1.25rem;

    background-color: transparent;
    color: var(--grey-50);
  }

  button {
    width: 56px;
    height: 40px;
    border-radius: 5px;
    border: none;

    margin: 0 15px;

    background-color: var(--orange);

    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      color: #fff;
    }
  }
`;
