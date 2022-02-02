import { CardContainer } from "./style";
import PlaceHolder from "../../assets/img/placeholder.png";
import { GoLocation } from "react-icons/go";
import { useEffect } from "react";
import { MdAttachMoney } from "react-icons/md";
import { IoPeopleCircleSharp } from "react-icons/io";
export const EventPageCard = ({ event }) => {
  return event.workType === "donation" ? (
    <CardContainer>
      {" "}
      <div className="imgContainer">
        <div className="containerType">
          <span>
            <MdAttachMoney />
            {event.amountDonated}/{event.donationGoal}
          </span>
        </div>
        <img src={PlaceHolder} alt="" srcset="" />
      </div>
      <h3>{event.title}</h3>
      <span>{event.ongName}</span>
      <p>{event.description}</p>
      <div className="bottomDiv">
        <GoLocation />
        <p>{event.state}</p>
        <button>Saber Mais</button>
      </div>
    </CardContainer>
  ) : (
    <CardContainer>
      {" "}
      <div className="imgContainer">
        <div className="containerType">
          <span>
           
            {event.voluntaries.length}
          </span>
        </div>
        <img src={PlaceHolder} alt="" srcset="" />
      </div>
      <h3>{event.title}</h3>
      <span>{event.ongName}</span>
      <p>{event.description}</p>
      <div className="bottomDiv">
        <GoLocation />
        <p>{event.state}</p>
        <button>Saber Mais</button>
      </div>
    </CardContainer>
  );
};
