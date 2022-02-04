import {
  Main,
  CoverPhoto,
  ProfilePhoto,
  Divisory,
  InfoSection,
  DescriptionContainer,
  ContactContainer,
  ContactDiv,
  EventSection,
  EventDashContainer,
  EventDashImage,
  WorkTypeEvent,
  EventDashInfo,
  EventDashLocationAndStatus,
  PageContainer,
} from "./style";
import {
  MdModeEditOutline,
  MdAlternateEmail,
  MdOutlineAttachMoney,
} from "react-icons/md";
import { BiMap, BiLink } from "react-icons/bi";
import biblio from "./assets/biblio.jpeg";
import { GrLocation } from "react-icons/gr";
import { IoPeopleCircle } from "react-icons/io5";
import { Header } from "../../Components/HeaderX";
import { useAuth } from "../../Contexts/Auth";
import { useEffect, useState } from "react";
import { api } from "../../Service";
import { EditModal } from "../../Components/EditModal";
import { useRef } from "react";
import { useContext } from "react";
import { OngDataContext } from "./../../Contexts/OngData/index";
export const DashboardOng = () => {
  const { user, accessToken } = useAuth();
  const [ong, setOng] = useState({});
  const [editModal, setEditModal] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [edit, setEdit] = useState("");

  const { LoadEvents, UpdateProfile, listEvents } = useContext(OngDataContext);

  useEffect(() => {
    api
      .get(`/users/${user.id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(res => {
        console.log(res.data);
        setOng(res.data);
      });
  }, []);

  useEffect(() => {
    api
      .get(`/users/${user.id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(res => {
        console.log(res.data);
        setOng(res.data);
      });
    LoadEvents(user.id);
  }, [refresh]);

  const RefreshPage = () => {
    refresh === true ? setRefresh(false) : setRefresh(true);
  };

  const Modalset = () => {
    editModal === true ? setEditModal(false) : setEditModal(true);
  };
  const cep = ong.cep;
  const nomeOng = ong.name;
  const googleMaps = `https://www.google.com.br/maps/search/${cep}${nomeOng}/`;
  const numOfEvents = listEvents;

  console.log(listEvents);

  useEffect(() => {
    console.log(editModal);
    LoadEvents(user.id);
  }, [editModal]);

  function Updatetext(tag) {
    let elemento = document.getElementById(tag).innerHTML;

    console.log(elemento);
  }

  const voluntaries = [1, 2, 3, 4];
  const workType = "volunteering";
  const amountDonated = 2;
  const donationGoal = 10;
  const title = "Agente de Biblioteca";
  const ongName = "Nome de ONG";
  const description =
    "Buscamos pessoas para colaborar na organização, catalogação de uma biblioteca organizada e para mantê-la aberta. Vamos juntos!";
  const state = "São Paulo";
  const completed = false;

  return user.userType === "ong" ? (
    <PageContainer>
      {editModal === true ? (
        <EditModal
          edit={edit}
          Modalset={Modalset}
          ong={ong}
          RefreshPage={RefreshPage}
        />
      ) : (
        ""
      )}
      <Header />
      <Main>
        <div className="photos_container">
          <CoverPhoto>
            <ProfilePhoto />
          </CoverPhoto>
        </div>
        <div className="text_container">
          <p className="address">
            {ong.location !== undefined ? ong.location : "Adicione um endereço"}{" "}
            <MdModeEditOutline
              color="black"
              onClick={() => {
                setEdit("location");
                Modalset();
              }}
            />
          </p>
          <h1>{ong.name}</h1>
          <p contentEditable="true" id="1" onBlur={() => Updatetext("1")}>
            {ong.slogan !== undefined ? ong.slogan : "Adicione seu slogan"}
          </p>
          <p className="category_text">
            <div class="dot_category"></div>
            {ong.category}
          </p>
        </div>
      </Main>

      <Divisory />
      <InfoSection>
        <DescriptionContainer>
          <div>
            <h1>Sobre a ONG</h1>
            <button>
              <MdModeEditOutline />
            </button>
          </div>
          <p
            contentEditable="true"
            id="description"
            onBlur={() => Updatetext("description")}
          >
            {ong.description !== undefined
              ? ong.description
              : "Adicione uma descrição"}
          </p>
        </DescriptionContainer>
        <ContactContainer>
          <div className="Title_contact">
            <h1>Contato</h1>
            <button>
              <MdModeEditOutline />
            </button>
          </div>

          <ContactDiv>
            <div className="dot_contact">
              <BiMap className="Bimap" />
            </div>
            <div className="info_contact">
              <p className="topics_contact">Endereço:</p>
              <a href={googleMaps} target="_blank">
                {ong.cep !== undefined ? ong.cep : "Adicione seu endereço"}
              </a>
            </div>
          </ContactDiv>

          <ContactDiv>
            <div className="dot_contact">
              <MdAlternateEmail className="MdEmail" />
            </div>
            <div className="info_contact">
              <p className="topics_contact">Email:</p>
              <p>
                {ong.email !== undefined
                  ? ong.email
                  : "Adicione email para contato"}
              </p>
            </div>
          </ContactDiv>

          <ContactDiv>
            <div className="dot_contact">
              <BiLink className="BiLink" />
            </div>
            <div className="info_contact">
              <p className="topics_contact">Website:</p>
              <p>
                {ong.website !== undefined ? ong.website : "Adicione seu site"}
              </p>
            </div>
          </ContactDiv>
        </ContactContainer>
      </InfoSection>

      <EventSection>
        <div className="header_events">
          <h1>Eventos Criados</h1>
        </div>
        <div className="card_events">
          <>
            {listEvents.map((item, index) => (
              <EventDashContainer>
                <EventDashImage>
                  <img src={biblio} alt="biblioteca"></img>
                  <WorkTypeEvent>
                    {workType === "volunteering" ? (
                      <>
                        <IoPeopleCircle className="icon_volunteer" />
                        <span>{item.voluntaries.length}</span>
                      </>
                    ) : (
                      <>
                        <MdOutlineAttachMoney className="icon_donate" />
                        <span className="donate_numbers">
                          {item.amountDonated.toFixed(2)} /{" "}
                          {item.donationGoal.toFixed(2)}
                        </span>
                      </>
                    )}
                  </WorkTypeEvent>
                </EventDashImage>
                <EventDashInfo>
                  <h2>{item.title}</h2>
                  <h4>{item.ongName}</h4>
                  <p>{item.description}</p>
                  <EventDashLocationAndStatus>
                    <span>
                      <GrLocation className="icon_map" />
                      {item.state}
                    </span>
                    {!completed ? (
                      <button>Concluir</button>
                    ) : (
                      <button>Concluído</button>
                    )}
                  </EventDashLocationAndStatus>
                </EventDashInfo>
              </EventDashContainer>
            ))}
          </>
          {listEvents < 0 ? (
            <h2 className="Add_event">Adcione um evento!</h2>
          ) : (
            ""
          )}
        </div>
      </EventSection>
    </PageContainer>
  ) : (
    ""
  );
};
