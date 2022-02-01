import coverImg from "./assets/coverImg.png";
import profileImg from "./assets/profileImg.jpeg";
import styled from "styled-components";

export const Main = styled.main`
  background-color: var(--ligthblue);
  padding-bottom: 15px;

  .photos_container {
    background-color: var(--ligthblue);
    height: 340px;
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
`;

export const CoverPhoto = styled.div`
  width: 100vw;
  background-image: url(${coverImg});
  height: 274px;
  background-position-x: center;
  background-size: cover;
  border: 1px solid;
  border-radius: 0px 0px 20px 20px;
`;

export const ProfilePhoto = styled.div`
  background-image: url(${profileImg});
  width: 100px;
  height: 100px;
  background-size: cover;
  border: 1px solid;
  border-radius: 10px;
  position: relative;
  bottom: 60px;
  left: 10px;
`;

export const CategorySection = styled.div`
  display: flex;
  margin-top: 15px;
  height: 40px;
  align-items: center;

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
`;

export const Divisory = styled.div`
  background-color: #dedede;
  width: 90%;
  height: 1px;
  margin: 20px auto 20px;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  align-items: center;
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
    color: #333131;
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
