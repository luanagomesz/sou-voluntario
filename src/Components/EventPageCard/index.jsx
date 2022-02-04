import { CardContainer } from "./style";
import PlaceHolder from "../../assets/img/placeholder.png";
import { GoLocation } from "react-icons/go";
import { useEffect, useState } from "react";
import { MdAttachMoney } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { ModalEvent } from "../ModalEvent";
import { useEventsPageContext } from "../../Contexts/EventPage";
import { useCategoryImg } from "../../Contexts/CategoryImg";
export const EventPageCard = ({ event }) => {
  const { refresh, setRefresh } = useEventsPageContext();
  const [openModal, SetModal] = useState(false);
  const { imgUrl } = useCategoryImg();
  return event.workType === "donation" ? (
    <>
      {openModal === true ? (
        <ModalEvent SetModal={SetModal} event={event} />
      ) : (
        ""
      )}
      <CardContainer>
        {" "}
        <div className="imgContainer">
          <div className="containerType">
            <MdAttachMoney />

            <span>
              {event.amountDonated}/{event.donationGoal}
            </span>
          </div>
          <img src={imgUrl[event.category]} alt={PlaceHolder} srcset="" />
        </div>
        <h3>{event.title}</h3>
        <span className="ong">{event.ongName}</span>
        <p>{event.description}</p>
        <div className="bottomDiv">
          <GoLocation />
          <p>{event.state}</p>
          <button
            onClick={() => {
              SetModal(true);
              refresh === true ? setRefresh(false) : setRefresh(true);
            }}
          >
            Saber Mais
          </button>
        </div>
      </CardContainer>{" "}
    </>
  ) : event.workType === "volunteering" ? (
    <>
      {openModal === true ? (
        <ModalEvent SetModal={SetModal} event={event} />
      ) : (
        ""
      )}
      <CardContainer>
        {" "}
        <div className="imgContainer">
          <div className="containerType">
            <BsPeopleFill />
            <span>
              {event.voluntaries.length}/{event.necessaryVoluntaries}
            </span>
          </div>
          <img src={imgUrl[event.category]} alt={PlaceHolder} srcset="" />
        </div>
        <h3>{event.title}</h3>
        <span className="ong">{event.ongName}</span>
        <p>{event.description}</p>
        <div className="bottomDiv">
          <GoLocation />
          <p>{event.state}</p>
          <button
            onClick={() => {
              SetModal(true);
              refresh === true ? setRefresh(false) : setRefresh(true);
            }}
          >
            Saber Mais
          </button>
        </div>
      </CardContainer>
    </>
  ) : (
    ""
  );
};
