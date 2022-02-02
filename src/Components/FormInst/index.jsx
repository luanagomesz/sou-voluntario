import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input";
import Logo from "../../assets/img/logo-Header-Lp.png";
import { useRegisterEvents } from "../../Contexts/RegisterEvents";
import { Link, useHistory } from "react-router-dom";
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
  ButtonToggleInst,
} from "./style";
import { api } from "../../Service";
import { toast } from "react-toastify";

export const FormInst = ({ userType}) => {

  const history = useHistory()

  const { toggleForm } = useRegisterEvents();

  const formSchema = yup.object().shape({
    name: yup.string().required("Informe o seu nome").min(3, "Nome inválido"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Insira uma senha").min(6, "Senha fraca"),
    category: yup.string().required("Selecione sua categoria"),
    cep: yup.string().required("Digite seu CEP"),
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
    console.log(data);

    try {
      const response = await api.post("/signup", data);
      console.log(response.data);

      toast.success('Cadastrado com sucesso !', {
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
          data="name"
          register={register}
          label="Nome:"
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
          register={register}
          data="password"
          label="Senha:"
        />

        <Input
          type="text"
          placeholder="Selecione sua categoria"
          error={errors.category?.message}
          register={register}
          data="category"
          label="Categoria:"
        />

        <Input
          type="number"
          placeholder="Digite seu CEP"
          error={errors.cep?.message}
          register={register}
          data="cep"
          label="CEP:"
        />

        <Center>
          <Button type="submit">Cadastrar</Button>
        </Center>
      </Form>
      <RightDiv>
        <LogoImg src={Logo} alt="" srcset="" />
        <TextSignup>
          Registre sua instituição, faça projetos e eventos, obtenha doações e
          voluntários realize uma mudança positiva em sua comunidade.
        </TextSignup>

        <DivFooter>
          <TextButton>Sou:</TextButton>
          <DivButton>
            <ButtonToggle onClick={toggleForm}>Voluntário</ButtonToggle>
            <ButtonToggleInst onClick={toggleForm}>
              Instituição
            </ButtonToggleInst>
          </DivButton>
        </DivFooter>

        <Redirect>
          <Link to="/login"> Já possui uma conta?</Link>
        </Redirect>
      </RightDiv>
    </>
  );
};
