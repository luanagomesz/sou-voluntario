import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input";
import Logo from "../../assets/img/logo-Header-Lp.png";
import { useRegisterEvents } from "../../Contexts/RegisterEvents";
import { Link, useHistory } from "react-router-dom";
import { api } from "../../Service";

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
  ButtonToggleVolunter,
} from "./style";
import { toast } from "react-toastify";

export const FormUser = ({ userType }) => {
  const history = useHistory();

  const { toggleForm } = useRegisterEvents();

  const formSchema = yup.object().shape({
    name: yup.string().required("Informe o seu nome").min(3, "Nome inválido"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Insira uma senha").min(6, "Senha fraca"),
    confirm_password: yup
      .string()
      .required("Insira uma senha")
      .oneOf([yup.ref("password"), null], "As senhas são diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data) => {
    data.userType = userType ? "voluntary" : "ong";
    delete data.confirm_password;
    console.log(data);

    try {
      const response = await api.post("/signup", data);
      console.log(response.data);

      toast.success("Cadastrado com sucesso !", {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history.push("/login");
    } catch (error) {
      toast.error("Email já cadastrado !", {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Digite seu nome"
          error={errors.name?.message}
          register={register}
          label="Nome:"
          data="name"
        />

        <Input
          type="text"
          placeholder="Digite seu email"
          error={errors.email?.message}
          register={register}
          data="email"
          label="Email:"
        />

        <Input
          type="password"
          placeholder="Digite sua senha"
          error={errors.password?.message}
          data="password"
          register={register}
          label="Senha:"
        />

        <Input
          type="password"
          placeholder="Confirme sua senha"
          error={errors.confirm_password?.message}
          register={register}
          data="confirm_password"
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
            <ButtonToggleVolunter>
              Voluntário
            </ButtonToggleVolunter>
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
