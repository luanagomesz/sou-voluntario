import { ModalContainer, PageContainer } from "./style";
import placeHolder from "../../assets/img/placeholder.png";
import { MdAttachMoney } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiFillCloseSquare } from "react-icons/ai";
import { api } from "../../Service";
import { useAuth } from "../../Contexts/Auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useEventsPageContext } from "../../Contexts/EventPage";
export const ModalEvent = ({ event, SetModal }) => {
  const { refresh, setRefresh } = useEventsPageContext();
  const { accessToken, user } = useAuth();
  const [userIds, setUserId] = useState([]);

  useEffect(() => {
    setUserId(event.voluntaries);
    console.log(event);
    console.log(user);
  }, []);

  const EnterEvent = () => {
    if (userIds.includes(user.id)) {
      toast("Já registrado no evento");
    } else {
      api
        .patch(
          `events/${event.id}`,
          { voluntaries: [...userIds, user.id] },
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        )
        .then((res) => {
          refresh === true ? setRefresh(false) : setRefresh(true);
          setUserId(...userIds, user.id);
          toast("Confirmado com sucesso");

          SetModal(false);
        });
    }
  };

  return (
    <PageContainer>
      <ModalContainer>
        <AiFillCloseSquare id="close" onClick={() => SetModal(false)} />
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
              </span>
            </>
          ) : (
            <>
              <p>Voluntários:</p>
              <span>
                {event.voluntaries.length} / {event.necessaryVoluntaries}
              </span>
              <BsPeopleFill />
            </>
          )}
        </div>
        {event.workType === "donation" ? (
          <button>Doar</button>
        ) : (
          <button onClick={() => EnterEvent()}>Confirma Presença </button>
        )}

        <div className="bottomDiv">
          <GoLocation />
          <p>{event.state}</p>
        </div>
      </ModalContainer>
    </PageContainer>
  );
};
