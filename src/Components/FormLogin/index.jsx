import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input";
import { Form, Button, Center } from "./style";
import { useAuth } from "../../Contexts/Auth";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export const FormLogin = () => {
  const { login } = useAuth();
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Insira uma senha").min(6, "Senha fraca"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleLogin = (data) => {
    const { email, password } = data;
    login(email, password)
      .then((response) => {
        const {
          user: { userType },
        } = response;

        if (userType === "voluntary") {
          history.push("/DashboardUser");
        } else if (userType === "ong") {
          history.push("/DashboardOng");
        }
      })
      .catch((_) => {
        toast.error("Email e/ou senha incorretos !", {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <Input
          type="text"
          placeholder="Digite seu email"
          error={errors.email?.message}
          data="email"
          register={register}
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

        <Center>
          <Button type="submit">Entrar</Button>
        </Center>
      </Form>
    </>
  );
};
