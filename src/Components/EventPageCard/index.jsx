import { CardContainer } from "./style";
import PlaceHolder from "../../assets/img/placeholder.png";
import { GoLocation } from "react-icons/go";
import { useEffect } from "react";
import { MdAttachMoney } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { ModalEvent } from "../ModalEvent";
import { useState } from "react/cjs/react.development";
export const EventPageCard = ({ event }) => {
  const [openModal, SetModal] = useState(false);
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
          <img src={PlaceHolder} alt="" srcset="" />
        </div>
        <h3>{event.title}</h3>
        <span className="ong">{event.ongName}</span>
        <p>{event.description}</p>
        <div className="bottomDiv">
          <GoLocation />
          <p>{event.state}</p>
          <button onClick={() => SetModal(true)}>Saber Mais</button>
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
          <img src={PlaceHolder} alt="" srcset="" />
        </div>
        <h3>{event.title}</h3>
        <span className="ong">{event.ongName}</span>
        <p>{event.description}</p>
        <div className="bottomDiv">
          <GoLocation />
          <p>{event.state}</p>
          <button onClick={() => SetModal(true)}>Saber Mais</button>
        </div>
      </CardContainer>
    </>
  ) : (
    ""
  );
};
