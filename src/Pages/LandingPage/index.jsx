import Logo from "../../assets/img/logo-Header-Lp.png";
import ImgGirl from "../../assets/img/blackWoman-poster.png";
import ImgGirl2 from "../../assets/img/woman-poster2.png";
import ImgFamily from "../../assets/img/family-landscape.png";
import IconGithub from "../../assets/img/101-1017465_github-github-icon-png-grey.png";
import IconLinkedin from "../../assets/img/Linkedin-Icon-Image.png";
import ImgHands from "../../assets/img/391-3912187_body-parts-icon-of-helping-people.png";
import {
  Header,
  PageContainer,
  TopPage,
  MiddlePage,
  BottomPage,
  Footer,
} from "./style";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useHistory } from "react-router-dom";

export const LandingPage = () => {
  const goDown = () => {
    document
      .getElementById("middlepage")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const goBottom = () => {
    document
      .getElementById("bottom")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const history = useHistory();

  return (
    <PageContainer>
      <Header>
        {" "}
        <img src={Logo} alt="" srcset="" />
        <h3 className="textH" onClick={() => goBottom()}>
          Para Instuições
        </h3>
        <h3 className="textH" onClick={() => goBottom()}>
          Para Voluntarios
        </h3>
        <div>
          <h3 className="menu" onClick={() => history.push("/login")}>
            Login
          </h3>
          <h3 className="menu" onClick={() => history.push("/register")}>
            Cadastro
          </h3>
          <button className="login" onClick={() => history.push("/login")}>
            Login
          </button>
          <button
            className="register"
            onClick={() => history.push("/register")}
          >
            {" "}
            Cadastrar
          </button>
        </div>
      </Header>
      <TopPage>
        <img src={ImgGirl2} alt="" srcset="" className="girl2" />
        <div>
          <h1>Faça a diferença em sua comunidade</h1>
          <p>
            O Sou Voluntário ajuda você a se conectar com ONGs e a fazer uma
            mudança positiva na sociedade{" "}
          </p>
          <span className="Icontop">
            {" "}
            <BsArrowDownCircleFill onClick={() => goDown()} />
          </span>
        </div>
        <img src={ImgGirl} alt="girl1" srcset="" className="girl1" />
        <span className="IconBottom" onClick={() => goDown()}>
          {" "}
          <BsArrowDownCircleFill onClick={() => goDown()} />
        </span>
      </TopPage>
      <MiddlePage>
        <img src={ImgHands} alt="" srcset="" className="HandTop" />
        <div>
          <h2>Encontre ONGs em sua região</h2>
          <p id="middlepage">
            O Sou voluntário é um site sem fins lucrativos, com o propósito de
            unir forças e conectar o maior numero possivel de voluntarios e
            doadores a ações e eventos que buscam ajudar a melhorar a sociedade,
            sendo atrávez de ações voltadas a Educação, Meio ambiente,
            Vulnerabilidade Social, inclusão social entre outros...
          </p>
          <img src={ImgHands} alt="" srcset="" className="HandBottom" />

          <div className="containerbutton">
            <button onClick={() => history.push("/register")}>
              Seja um voluntário
            </button>
            <button onClick={() => history.push("/register")}>
              Cadastrar instituição
            </button>
          </div>
        </div>
      </MiddlePage>
      <BottomPage>
        <div className="container" id="bottom">
          <h1>Formas de ajudar</h1>
          <div className="cardContainer">
            <div className="card">
              <h3>Conecte sua instituição</h3>
              <p>
                Deseja cadastrar sua instituição e receber voluntários para suas
                ações assim como doações?
              </p>
              <span>
                <span>1.</span> Cadastre sua instituição
              </span>
              <span>
                <span>2.</span> Cadastre um evento
              </span>
              <span>
                <span>3.</span> acompanhe a ação
              </span>
              <span>
                <span>4.</span> Compartilhe!
              </span>
            </div>

            <div className="card">
              <h3>Seja um voluntario</h3>
              <p>
                Deseja contribuir com alguma causa social da sua comunidade?
              </p>
              <span>
                <span>1.</span> Cadastre-se como voluntario
              </span>
              <span>
                <span>2.</span> Busque por uma vaga
              </span>
              <span>
                <span>3.</span> Confirme sua presença
              </span>
              <span>
                <span>4.</span> Participe da ação!
              </span>
            </div>

            <div className="card">
              <h3>Seja um doador</h3>
              <p>
                Faça doações diretamente para instituições do brasil inteiro{" "}
              </p>
              <span>
                <span>1.</span> Busque por uma instituição
              </span>
              <span>
                <span>2.</span> Busque por uma campanha
              </span>
              <span>
                <span>3.</span> Faça doações
              </span>
              <span>
                <span>4.</span> Compartilhe!
              </span>
            </div>
          </div>
        </div>
        <img src={ImgFamily} alt="" srcset="" />
      </BottomPage>
      <button
        className="bottomButton"
        onClick={() => history.push("/register")}
      >
        Quero fazer a diferença
      </button>
      <Footer>
        <p>Desenvolvedores:</p>
        <div>
          <p>Luana Gomes</p>
          <img src={IconLinkedin} alt="" srcset="" />
          <img src={IconGithub} alt="" srcset="" className="github" />
        </div>
        <div>
          <p>Nicolly Kasuga</p>
          <img src={IconLinkedin} alt="" srcset="" />
          <img src={IconGithub} alt="" srcset="" className="github" />
        </div>
        <div>
          <p>Rafael Carvalho</p>
          <img src={IconLinkedin} alt="" srcset="" />
          <img src={IconGithub} alt="" srcset="" className="github" />
        </div>
        <div>
          <p>Théo Gândara</p>
          <img src={IconLinkedin} alt="" srcset="" />
          <img src={IconGithub} alt="" srcset="" className="github" />
        </div>
        <div>
          <p>Douglas Alencar</p>
          <img src={IconLinkedin} alt="" srcset="" />
          <img src={IconGithub} alt="" srcset="" className="github" />
        </div>
      </Footer>
    </PageContainer>
  );
};
