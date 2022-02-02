import {
  BackgroundBottom,
  BackgroundTop,
  Button,
  Container,
  ContainerForm,
  ContainerInfo,
  ContainerLogin,
  Input,
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
          <img src={souVoluntario} alt="logo" className="logo" />
          <img src={volunteers} alt="volunteers" className="volunteers" />
          <button onClick={() => history.push("/Register")}>
            Ainda não possui uma conta?
          </button>
        </ContainerInfo>
        <ContainerForm>
          <h1>Login</h1>
          <FormLogin />
        </ContainerForm>
      </ContainerLogin>
      <BackgroundBottom />
    </Container>
  );
};
