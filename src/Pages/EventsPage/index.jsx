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
import { FilterCategoriesModal } from "../../Components/EventPageModalCategory";
import { Header } from "../../Components/Header";
import { ModalCreateEvent } from "../../Components/ModalCreateEvent";
export const Events = () => {
  const [search, setSearch] = useState("");
  const [searchedValue, SetSearchedValue] = useState("");
  const {
    stateModal,
    setStateModal,
    setCategoryModal,
    categoryModal,
    filteredEvents,
    setFilteredEvents,
    filteredDonation,
    SetFilteredDonation,
    Searched,
    setSearched,
    Events,
    setEvents,
    createEventModal,
    setCreateEventModal,
  } = useEventsPageContext();

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

  useEffect(() => {
    if (categoryModal === true) {
      document.getElementById("category").style.backgroundColor =
        "var(--ligthorange)";
      document.getElementById("category").style.color = "white";
    } else {
      document.getElementById("category").style.backgroundColor = "white";
      document.getElementById("category").style.color = "var(--grey-50)";
    }
  }, [categoryModal]);

  useEffect(() => {
    if (stateModal === true) {
      document.getElementById("state").style.backgroundColor =
        "var(--ligthorange)";
      document.getElementById("state").style.color = "white";
    } else {
      document.getElementById("state").style.backgroundColor = "white";
      document.getElementById("state").style.color = "var(--grey-50)";
    }
  }, [stateModal]);

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

  const SearchFilter = () => {
    setSearched(true);
    SetSearchedValue(search);
    api.get("/events").then((res) => {
      setFilteredEvents(
        res.data.filter(
          (item) =>
            item.category.toUpperCase().includes(search.toUpperCase()) ||
            item.state.toUpperCase().includes(search.toUpperCase()) ||
            item.title.toUpperCase().includes(search.toUpperCase()) ||
            item.ongName.toUpperCase().includes(search.toUpperCase())
        )
      );
    });
  };

  return (
    <PageContainer>
      <FakeHeader>Fake Header</FakeHeader>

      {createEventModal === true ? <ModalCreateEvent /> : ""}

      <button
        onClick={() => {
          setCreateEventModal(true);
        }}
      >
        teste
      </button>
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
        <div className="button">
          <button
            onClick={() => {
              categoryModal === true
                ? setCategoryModal(false)
                : setCategoryModal(true);
            }}
            id="category"
          >
            Categoria
          </button>
          {categoryModal === true ? (
            <FilterCategoriesModal IsOpen={categoryModal} />
          ) : (
            ""
          )}
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Digite sua pesquisa"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => SearchFilter()}>
            <AiOutlineSearch />
          </button>
        </div>
      </SearchContainer>
      <div>
        {Searched === true ? (
          filteredEvents.length > 0 && searchedValue.length > 0 ? (
            <p className="result">resultados para: {searchedValue}</p>
          ) : searchedValue.length > 0 ? (
            <p className="result">nenhum resultado para: {searchedValue}</p>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>
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
