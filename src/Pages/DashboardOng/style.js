import coverImg from "./assets/coverImg.png";
import profileImg from "./assets/profileImg.jpeg";
import styled from "styled-components";

export const Main = styled.main`
  background-color: var(--ligthblue);
  padding-bottom: 15px;

  .photos_container {
    background-color: var(--ligthblue);
    height: 340px;
    @media (min-width: 720px) {
      display: flex;
      flex-direction: column;
    }
  }

  .address {
    color: var(--ligthorange);
    margin: 0px 0px 10px 10px;
    font-size: 22px;
    font-weight: 600;
    width: 50%;
  }
  h1 {
    margin: 0px 0px 10px 10px;
    width: 50%;
    text-transform: uppercase;
    font-weight: 600;
  }
  p {
    width: 80%;
    margin-left: 10px;
    color: var(--darkblue);
    font-weight: 600;
  }

  @media (min-width: 720px) {
    .address {
      margin-left: 7vw;
    }
    h1 {
      margin-left: 7vw;
    }

    p {
      margin-left: 7vw;
    }
    .text_container {
      margin: auto;
      max-width: 1400px;
    }
  }
`;

export const CoverPhoto = styled.div`
  width: 100vw;
  background-image: url(${coverImg});
  height: 274px;
  background-position-x: center;
  background-size: cover;
  border: 1px solid var(--ligthgrey);
  border-radius: 0px 0px 20px 20px;
  position: relative;

  @media (min-width: 720px) {
    width: 90vw;
    max-width: 1250px;
    align-self: center;
  }
`;

export const ProfilePhoto = styled.div`
  background-image: url(${profileImg});
  width: 100px;
  height: 100px;
  background-size: cover;
  border: 1px solid var(--ligthgrey);
  border-radius: 10px;
  position: absolute;
  top: 210px;
  left: 50px;
`;

export const CategorySection = styled.div`
  display: flex;
  margin-top: 15px;
  height: 40px;
  align-items: center;
  width: 50%;
  margin-left: 10px;

  div {
    width: 20px;
    height: 20px;
    background-color: var(--red);
    border-radius: 50px;
    margin-left: 10px;
  }

  p {
    width: 50%;
    margin-left: 15px;
  }

  @media (min-width: 720px) {
    margin-left: 7vw;

    div {
      margin-left: 0px;
    }
    
  }
`;

export const Divisory = styled.div`
  background-color: var(--ligthgrey);
  width: 80%;
  height: 1px;
  margin: 20px auto 20px;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  align-items: center;

  @media (min-width: 720px) {
    flex-direction: row;
    align-items: start;
    justify-content: space-evenly;
    width: 90vw;
    max-width: 1300px;
    margin: auto;
  }
`;

export const DescriptionContainer = styled.div`
  background-color: var(--ligthblue);
  padding: 15px;
  border-radius: 10px;
  width: 90%;

  div {
    display: flex;
    align-items: center;

    h1 {
      color: var(--darkblue);
      font-weight: 600;
      margin-right: 10px;
      font-size: 28px;
    }
    button {
      width: 25px;
      height: 15px;
      background-color: transparent;
    }
  }

  p {
    margin-top: 15px;
    color: var(--grey-80);
  }

  @media (min-width: 720px) {
    width: 50%;
    margin-right: 20px;
    min-height: 300px;
  }
`;

export const ContactContainer = styled.div`
  background-color: var(--ligthblue);
  padding: 15px;
  border-radius: 10px;
  width: 90%;
  margin: 30px 0px 30px;

  .Title_contact {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    h1 {
      color: var(--darkblue);
      font-weight: 600;
      margin-right: 10px;
      font-size: 28px;
    }
    button {
      width: 25px;
      height: 15px;
      background-color: transparent;
    }
  }

  .dot_contact {
    min-width: 35px;
    height: 35px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--orange);
    margin-right: 10px;
  }

  @media (min-width: 720px) {
    width: 30%;
    margin: 0px;
    margin-left: 20px;
    min-width: 360px;
  }
`;

export const ContactDiv = styled.div`
  margin: auto;
  margin-bottom: 20px;
  width: 90%;
  height: 55px;
  display: flex;

  p {
    font-size: 12px;
  }

  .Bimap,
  .MdEmail,
  .BiLink {
    color: white;
    width: 22px;
    height: 28px;
  }

  .topics_contact {
    width: 50%;
    color: var(--darkblue);
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 5px;
  }
`;
