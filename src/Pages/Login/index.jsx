import {
  BackgroundBottom,
  BackgroundTop,
  ButtonNoAccountForm,
  ButtonNoAccountInfo,
  Container,
  ContainerForm,
  ContainerInfo,
  ContainerLogin,
  Logo,
  VolunteersImage,
} from "./style";
import souVoluntario from "../../Assets/souvol.svg";
import volunteers from "../../Assets/volunteers.svg";
import { FormLogin } from "../../Components/FormLogin";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();
  return (
    <Container>
      <BackgroundTop />
      <ContainerLogin>
        <ContainerInfo>
          <Logo src={souVoluntario} alt="logo" className="logo" />
          <VolunteersImage
            src={volunteers}
            alt="volunteers"
            className="volunteers"
          />
          <ButtonNoAccountInfo onClick={() => history.push("/Register")}>
            Ainda não possui uma conta?
          </ButtonNoAccountInfo>
        </ContainerInfo>
        <ContainerForm>
          <h1>Login</h1>
          <FormLogin />
          <ButtonNoAccountForm onClick={() => history.push("/Register")}>
            Ainda não possui uma conta?
          </ButtonNoAccountForm>
        </ContainerForm>
      </ContainerLogin>
      <BackgroundBottom />
    </Container>
  );
};
