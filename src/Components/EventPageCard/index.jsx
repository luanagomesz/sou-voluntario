import { CardContainer } from "./style";
import PlaceHolder from "../../assets/img/placeholder.png";
import { GoLocation } from "react-icons/go";
import { useEffect } from "react";
import { MdAttachMoney } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
export const EventPageCard = ({ event }) => {
  return event.workType === "donation" ? (
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
        <button>Saber Mais</button>
      </div>
    </CardContainer>
  ) : event.workType === "volunteering" ? (
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
        <button>Saber Mais</button>
      </div>
    </CardContainer>
  ) : (
    ""
  );
};
