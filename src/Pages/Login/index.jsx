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
// import SouVoluntario from "../../Assets/souvol.png";
// import bgbottom from "../../Assets/bgbottom.png";

export const Login = () => {
  return (
    <Container>
      <BackgroundTop />
      <h1>Login</h1>
      <ContainerLogin>
        <ContainerInfo>
          <image src="../../Assets/souvol.png" alt="logo" />
        </ContainerInfo>
        <ContainerForm>
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
