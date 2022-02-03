import {
  Main,
  CoverPhoto,
  ProfilePhoto,
  CategorySection,
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

export const DashboardOng = () => {
  const cep =
    "Rua Ribeiro do Vale, 120 - Brooklin Paulista, São Paulo - SP, Brasil";
  const googleMaps = `https://www.google.com.br/maps/search/${cep}/`;

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

  return (
    <>
      <Main>
        <div className="photos_container">
          <CoverPhoto>
            <ProfilePhoto />
          </CoverPhoto>
        </div>
        <div className="text_container">
          <p className="address">São Paulo, SP</p>
          <h1>NAIA</h1>
          <p>
            "Oportunizar condições de desenvolvimento às pessoas, transformando
            gerações através de um processo socioeducativo de qualidade."
          </p>
          <p className="category_text">
            <div class="dot_category"></div>Educação
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
          <p>
            Desenvolvemos desde 1982 o trabalho de preparar através de um
            processo educacional inclusivo, crianças e adolescentes para o
            exercício pleno da cidadania, reduzindo o risco social a que estão
            expostos, por meio de atendimento, promoção social e constituição de
            redes de apoio comunitário, que abranjam necessariamente a família.
            Alguns projetos desenvolvidos: CCA – Centro para Crianças e
            Adolescentes (6 a 14 anos). Jovem Aprendiz (Preparatório –
            Profissionalizante). Líderes do Amanhã – Cursos técnicos de
            Informática e E-commerce. Preparação para o ENEM. Janelas para o
            Mundo. Horta no Pote. Biblioteca Aberta. Óleo 360° Quer saber mais?
            Acesse nossas redes!
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
                Rua Ribeiro do Vale, 120 - Brooklin Paulista, São Paulo - SP,
                Brasil
              </a>
            </div>
          </ContactDiv>

          <ContactDiv>
            <div className="dot_contact">
              <MdAlternateEmail className="MdEmail" />
            </div>
            <div className="info_contact">
              <p className="topics_contact">Email:</p>
              <p>diretoria@naia.org.br</p>
            </div>
          </ContactDiv>

          <ContactDiv>
            <div className="dot_contact">
              <BiLink className="BiLink" />
            </div>
            <div className="info_contact">
              <p className="topics_contact">Website:</p>
              <p>https://www.naia.org.br</p>
            </div>
          </ContactDiv>
        </ContactContainer>
      </InfoSection>

      <EventSection>
        <div className="header_events">
          <h1>Eventos Criados</h1>
        </div>
        <div className="card_events">
          {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            <EventDashContainer>
              <EventDashImage>
                <img src={biblio} alt="biblioteca"></img>
                <WorkTypeEvent>
                  {workType === "volunteering" ? (
                    <>
                      <IoPeopleCircle className="icon_volunteer" />
                      <span>{voluntaries.length}</span>
                    </>
                  ) : (
                    <>
                      <MdOutlineAttachMoney className="icon_donate" />
                      <span className="donate_numbers">
                        {amountDonated.toFixed(2)} / {donationGoal.toFixed(2)}
                      </span>
                    </>
                  )}
                </WorkTypeEvent>
              </EventDashImage>
              <EventDashInfo>
                <h2>{title}</h2>
                <h4>{ongName}</h4>
                <p>{description}</p>
                <EventDashLocationAndStatus>
                  <span>
                    <GrLocation className="icon_map" />
                    {state}
                  </span>
                  {!completed ? (
                    <button>Concluir</button>
                  ) : (
                    <button>Deletar</button>
                  )}
                </EventDashLocationAndStatus>
              </EventDashInfo>
            </EventDashContainer>
          ))}
        </div>
      </EventSection>
    </>
  );
};
