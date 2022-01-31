import { GrLocation } from "react-icons/gr";
import { IoPeopleCircle } from "react-icons/io5";

import {
  EventContainer,
  EventUserImage,
  EventUserInfo,
  VoluntariesOfEvent,
  EventUserLocationAndStatus,
} from "./style";
const bibliotecario = require("../../assets/img/bibliotecario.jpg");

export const EventUserCard = () => {
  return (
    <EventContainer className="events__list__item">
      <EventUserImage className="image__container">
        <img src={bibliotecario} alt="event" />
        <VoluntariesOfEvent>
          <IoPeopleCircle />
          <span>20</span>
        </VoluntariesOfEvent>
      </EventUserImage>
      <EventUserInfo>
        <h2>Agente de Biblioteca</h2>
        <h4>Nome da ONG</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum modi
          beatae alias, veniam eveniet porro amet, atque non excepturi
          accusantium autem ea commodi voluptatem velit, nesciunt incidunt
          placeat molestias. Voluptatum?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Repudiandae doloremque recusandae beatae quas
          similique magnam aliquid molestiae explicabo pariatur dolorum
          distinctio qui, minima, aspernatur rerum hic, quam vitae quis
          veritatis.
        </p>
        <EventUserLocationAndStatus>
          <GrLocation />
          <span>São Paulo,...</span>
          <button>Concluir</button>
        </EventUserLocationAndStatus>
      </EventUserInfo>
    </EventContainer>
  );
};
