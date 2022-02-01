import styled from "styled-components";

export const EventContainer = styled.li`
  width: 100%;
  max-width: 320px;
  height: 360px;
  border-radius: 15px;

  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const EventUserImage = styled.figure`
  width: 100%;
  height: 135px;
  display: flex;

  position: relative;

  img {
    object-fit: cover;
    width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
`;

export const WorkTypeEvent = styled.div`
  width: fit-content;
  height: 30px;
  padding-right: 6px;
  padding-left: 4px;
  border-radius: 8px;
  font-size: 1.2rem;

  background-color: var(--cyan);
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5px;

  position: absolute;
  bottom: 7px;
  left: 13px;

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const DonationEvent = styled.div``;

export const EventUserInfo = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 12px;
  padding-left: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h2 {
    font-size: 1.5rem;
    font-weight: 400;

    padding-right: 20px;

    color: var(--darkblue);
  }

  h4 {
    font-size: 1rem;
    font-weight: 400;

    padding-right: 20px;
    margin-top: 5px;

    color: var(--grey-50);
  }

  p {
    font-size: 1rem;
    font-weight: 400;

    padding-right: 20px;
    margin-top: auto;

    color: var(--grey-100);

    flex-grow: 1;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 1rem;
    max-height: 5rem;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }

  div {
    width: 100%;
    height: 50px;

    margin-top: 13px;
  }
`;

export const EventUserLocationAndStatus = styled.div`
  width: 100%;
  height: 50px;

  margin-top: auto;

  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    width: 24px;
    height: 24px;
  }
  span {
    font-size: 1.25rem;
    flex-grow: 1;
  }

  button {
    width: 140px;
    height: 100%;
    border-bottom-right-radius: 15px;
    border-top-left-radius: 5px;

    font-size: 1.5rem;
    font-weight: 500;

    background-color: var(--cyan);
    color: #fff;
  }
`;
