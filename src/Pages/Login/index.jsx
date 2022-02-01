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
          <FormLogin />
        </ContainerForm>
      </ContainerLogin>
      <BackgroundBottom />
    </Container>
  );
};
