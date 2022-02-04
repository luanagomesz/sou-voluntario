import coverImg from "./assets/coverImg.png";
import profileImg from "./assets/profileImg.jpeg";
import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Main = styled.main`
  background-color: var(--ligthblue);
  margin-top: 120px;
  padding-bottom: 15px;
  width: 100vw;

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

  .dot_category {
    width: 20px;
    height: 20px;
    background-color: var(--red);
    border-radius: 50px;
    margin-right: 5px;
  }

  .category_text {
    display: flex;
    width: 50%;
    margin-left: 10px;
    margin-top: 15px;
    align-items: center;
    color: var(--grey-80);
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

    .category_text {
      margin-left: 7vw;
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
  width: 100%;
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
    color: var(--grey-80);
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

  a {
    font-size: 13px;
  }

  a:visited {
    color: var(--darkblue);
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

export const EventSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--ligthblue);
  width: 85vw;
  margin: auto;
  margin-top: auto;
  border-radius: 10px;
  margin-top: 20px;
  padding-bottom: 20px;

  .header_events {
    display: flex;
    background-color: var(--ice);
    align-items: center;
    justify-content: center;
    height: 45px;
    border-radius: 10px 10px 0px 0px;

    h1 {
      font-size: 20px;
    }
  }

  .card_events {
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 200px;
    margin-bottom: 30px;
    justify-content: center;
  }

  @media (min-width: 720px) {
    max-width: 1150px;
    box-sizing: border-box;

    .card_events {
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      min-height: 300px;
    }

    .Add_event {
    }
  }
`;

export const EventDashContainer = styled.div`
  background-color: white;
  width: 90%;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;

  @media (min-width: 720px) {
    max-width: 250px;
    margin-left: 15px;
  }
`;

export const EventDashImage = styled.div`
  position: relative;
  img {
    width: 100%;
    border-radius: 10px 10px 0px 0px;
  }
`;

export const WorkTypeEvent = styled.div`
  position: absolute;
  top: 110px;
  left: 10px;
  background-color: var(--cyan);
  min-width: 40px;
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  padding: 2px;

  .icon_volunteer,
  .icon_donate {
    color: white;
  }

  span,
  .donate_numbers {
    color: white;
    font-size: 14px;
  }
`;

export const EventDashInfo = styled.div`
  h2 {
    font-size: 20px;
    font-weight: 600;
    margin-left: 15px;
  }

  h4 {
    font-size: 15px;
    margin: 5px 0px 5px 15px;
  }

  p {
    font-size: 15px;
    margin-left: 15px;
    margin-bottom: 10px;
  }
`;

export const EventDashLocationAndStatus = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
    color: black;
    width: 50%;
    margin-left: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-overflow: "...";

    .icon_map {
      color: white;
      min-width: 20px;
      margin: 0px 3px 2px 0px;
    }
  }

  button {
    background-color: var(--orange);
    width: 40%;
    height: 30px;
    border-radius: 10px 0px 10px 0px;
    color: white;
    font-weight: 700;
    cursor: pointer;
  }
`;
