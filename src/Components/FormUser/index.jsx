import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input";
import { useState } from "react";

import { Form, Button, Center } from "./style";

export const FormUser = () => {
  const [volunter, setVolunter] = useState(true);

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
    </>
  );
};
