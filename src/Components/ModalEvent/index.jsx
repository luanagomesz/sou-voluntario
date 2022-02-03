import { ModalContainer, PageContainer } from "./style";
import placeHolder from "../../assets/img/placeholder.png";
import { MdAttachMoney } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
export const ModalEvent = ({ event }) => {
  return (
    <PageContainer>
      <ModalContainer>
        <img src={placeHolder} alt="" srcset="" />
        <h3>{event.title}</h3>
        <span>{event.ongName}</span>
        <p>{event.description}</p>
        <div className="middleDiv">
          {event.workType === "donation" ? (
            <>
              <p>Doação Necessária:</p> <MdAttachMoney />
              <span>
                {event.amountDonated}/{event.donationGoal}
              </span>{" "}
            </>
          ) : (
            <>
              <p>Voluntários:</p>
              <span>
                {event.voluntaries.length} / {event.necessaryVoluntaries}{" "}
              </span>
              <BsPeopleFill />
            </>
          )}
        </div>
        <button>
          {event.workType === "donation" ? "Doar" : "Confirmar Presença"}
        </button>
        <div className="bottomDiv"></div>
      </ModalContainer>
    </PageContainer>
  );
};
