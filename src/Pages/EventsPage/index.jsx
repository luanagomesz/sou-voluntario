<<<<<<< HEAD
import { useLocation } from "react-router-dom";

export const Events = () => {
  const location = useLocation();
  console.log(location);
=======
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
export const Events = () => {
  const [Events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  useEffect(() => {
    api.get("/events").then((res) => {
      console.log(res.data);
      setEvents(res.data);
    });
  }, []);

  const filterByState = (states) => {};
  const filterByCategory = (type) => {};

>>>>>>> 99dc0f998a26abf30a824d34d7394137c2c243a3
  return (
    <PageContainer>
      <FakeHeader>Fake Header</FakeHeader>
      <SearchContainer>
        {" "}
        <button>Somente doações</button>
        <button>Estado</button>
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
          : Events.map((item) => <EventPageCard event={item} />)}
        {filteredEvents.length === 0 && Events.length === 0 ? (
          <p>nenhum evento encontrado</p>
        ) : (
          ""
        )}
      </CardContainer>
    </PageContainer>
  );
};
