import { GrLocation } from "react-icons/gr";
import { IoPeopleCircle } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { toast } from "react-toastify";
import { useAuth } from "../../Contexts/Auth";
import { useUserEvents } from "../../Contexts/UserEvents";

import {
  EventContainer,
  EventUserImage,
  EventUserInfo,
  WorkTypeEvent,
  EventUserLocationAndStatus,
} from "./style";
const bibliotecario = require("../../assets/img/bibliotecario.jpg");

export const EventUserCard = ({ event }) => {
  const { setEventAsCompleted, loadSubscribedFilteredEvents, statusEvent } =
    useUserEvents();
  const {
    accessToken,
    user: { id: userId },
  } = useAuth();
  const {
    id: eventId,
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

  const handleSetEventAsCompleted = () => {
    setEventAsCompleted(eventId, accessToken).then((_) => {
      loadSubscribedFilteredEvents(userId, accessToken, statusEvent);
      toast.success("Parabéns, você concluiu este evento !!!");
    });
  };

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
            <button onClick={handleSetEventAsCompleted}>Concluir</button>
          ) : (
            !completed && workType === "donation" && <button>Doar</button>
          )}
        </EventUserLocationAndStatus>
      </EventUserInfo>
    </EventContainer>
  );
};
