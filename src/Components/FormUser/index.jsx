import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input";
import Logo from "../../assets/img/logo-Header-Lp.png";
import { useUserEvents } from "../../Contexts/RegisterEvents";
import { Link } from "react-router-dom";

import {
  Form,
  Button,
  Center,
  RightDiv,
  LogoImg,
  TextSignup,
  DivButton,
  TextButton,
  DivFooter,
  ButtonToggle,
  Redirect,
  ButtonToggleVolunter
} from "./style";

export const FormUser = () => {
  const { toggleForm } = useUserEvents();

  const formSchema = yup.object().shape({
    name: yup.string().required("Informe o seu nome").min(3, "Nome inválido"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Insira uma senha").min(6, "Senha fraca"),
    confirm_password: yup.string().required("Insira uma senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Digite seu nome"
          error={errors.name?.message}
          {...register("name")}
          label="Nome:"
        />

        <Input
          type="text"
          placeholder="Digite seu email"
          error={errors.email?.message}
          {...register("email")}
          label="Email:"
        />

        <Input
          type="password"
          placeholder="Digite sua senha"
          error={errors.password?.message}
          {...register("password")}
          label="Senha:"
        />

        <Input
          type="password"
          placeholder="Confirme sua senha"
          error={errors.confirm_password?.message}
          {...register("confirm_password")}
          label="Confirmar Senha:"
        />

        <Center>
          <Button type="submit">Cadastrar</Button>
        </Center>
      </Form>

      <RightDiv>
        <LogoImg src={Logo} alt="" srcset="" />
        <TextSignup>
          O Sou Voluntário ajuda você a se conectar com ONGS e fazer uma mudança
          positiva na sociedade.
        </TextSignup>

        <DivFooter>
          <TextButton>Sou:</TextButton>
          <DivButton>
            <ButtonToggleVolunter onClick={toggleForm}>Voluntário</ButtonToggleVolunter>
            <ButtonToggle onClick={toggleForm}>Instituição</ButtonToggle>
          </DivButton>
        </DivFooter>

        <Redirect>
          <Link to="/login"> Já possui uma conta?</Link>
        </Redirect>
      </RightDiv>
    </>
  );
};
