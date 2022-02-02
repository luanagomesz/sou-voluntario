import { useEffect, useState } from "react";
import {
  PageContainer,
  FakeHeader,
  SearchContainer,
  CardContainer,
} from "./style";
import { api } from "../../Service";
import { AiOutlineSearch } from "react-icons/ai";
import { EventPageCard } from "../../Components/EventPageCard";
import { FilterStatesModal } from "../../Components/EventPageModalState";
import { useEventsPageContext } from "../../Contexts/EventPage";
export const Events = () => {
  const [Events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filteredDonation, SetFilteredDonation] = useState(false);
  const [selectedStates, setSelectedStates] = useState([]);

  const { stateModal, setStateModal } = useEventsPageContext();

  useEffect(() => {
    if (filteredDonation === true) {
      document.getElementById("donation").style.backgroundColor =
        "var(--ligthorange)";
      document.getElementById("donation").style.color = "white";
      console.log(filteredDonation);
      if (filteredEvents.length > 0) {
        setFilteredEvents(
          filteredEvents.filter((item) => item.workType === "donation")
        );
      } else {
        setEvents(Events.filter((item) => item.workType === "donation"));
      }
    } else {
      document.getElementById("donation").style.backgroundColor = "white";
      document.getElementById("donation").style.color = "var(--grey-50)";
      getallEvents();
    }
  }, [filteredDonation]);

  const getallEvents = () => {
    api
      .get(`/events`)
      .then((res) => {
        console.log(res.data);
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const filterByState = (states) => {};
  const filterByCategory = (type) => {};

  return (
    <PageContainer>
      <FakeHeader>Fake Header</FakeHeader>
      <SearchContainer>
        {" "}
        <button
          onClick={() => {
            filteredDonation === true
              ? SetFilteredDonation(false)
              : SetFilteredDonation(true);
          }}
          id="donation"
        >
          Somente doações
        </button>
        <div className="button">
          <button
            onClick={() => {
              stateModal === true ? setStateModal(false) : setStateModal(true);
            }}
            id="state"
          >
            Estado
          </button>
          {stateModal === true ? (
            <FilterStatesModal IsOpen={setStateModal} />
          ) : (
            ""
          )}
        </div>
        <button>Categoria</button>
        <div className="search">
          <input type="text" placeholder="Digite sua pesquisa" />
          <button>
            <AiOutlineSearch
              color="white
            "
            />
          </button>
        </div>
      </SearchContainer>
      <CardContainer>
        {filteredEvents.length > 0
          ? filteredEvents.map((item) => <EventPageCard event={item} />)
          : Events.length > 0
          ? Events.map((item) => <EventPageCard event={item} />)
          : ""}
        {filteredEvents.length === 0 && Events.length === 0 ? (
          <p>nenhum evento encontrado</p>
        ) : (
          ""
        )}
      </CardContainer>
    </PageContainer>
  );
};
