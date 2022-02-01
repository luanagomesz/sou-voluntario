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

export const Login = () => {
  return (
    <Container>
      <BackgroundTop />
      <ContainerLogin>
        <ContainerInfo>
          <img src={souVoluntario} alt="logo" className="logo" />
          <img src={volunteers} alt="volunteers" className="volunteers" />
        </ContainerInfo>
        <ContainerForm>
          <h1>Login</h1>

          <Input>
            <p>Email:</p>
            <input placeholder="Digite seu email" />
          </Input>
          <Input>
            <p>Senha:</p>
            <input placeholder="Digite sua senha" />
          </Input>
          <Button>Entrar</Button>
        </ContainerForm>
      </ContainerLogin>
      <BackgroundBottom />
    </Container>
  );
};
