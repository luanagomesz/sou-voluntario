import { GrLocation } from "react-icons/gr";
import { IoPeopleCircle } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";

import {
  EventContainer,
  EventUserImage,
  EventUserInfo,
  WorkTypeEvent,
  EventUserLocationAndStatus,
} from "./style";
const bibliotecario = require("../../assets/img/bibliotecario.jpg");

export const EventUserCard = ({ event }) => {
  const {
    title,
    description,
    workType,
    donationGoal,
    amountDonated,
    category,
    state,
    completed,
    voluntaries,
    ongName,
  } = event;

  return (
    <EventContainer className="events__list__item">
      <EventUserImage className="image__container">
        <img src={bibliotecario} alt="event" />
        <WorkTypeEvent>
          {workType === "volunteering" ? (
            <>
              <IoPeopleCircle />
              <span>{voluntaries.length}</span>
            </>
          ) : (
            <>
              <MdOutlineAttachMoney />
              <span>
                {amountDonated.toFixed(2)} / {donationGoal.toFixed(2)}
              </span>
            </>
          )}
        </WorkTypeEvent>
      </EventUserImage>
      <EventUserInfo>
        <h2>{title}</h2>
        <h4>{ongName}</h4>
        <p>{description}</p>
        <EventUserLocationAndStatus>
          <GrLocation />
          <span>{state}</span>
          {!completed && workType === "volunteering" ? (
            <button>Concluir</button>
          ) : (
            !completed && workType === "donation" && <button>Doar</button>
          )}
        </EventUserLocationAndStatus>
      </EventUserInfo>
    </EventContainer>
  );
};
