import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

import { Background, Modal, Form, Title } from "./style";

export const Register = () => {
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
    <Background>
      <Modal>

        {volunter ? (
          <>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Title>Cadastro de usuário</Title>
              <input
                type="text"
                placeholder="Digite seu nome"
                {...register("name")}
              />
              <p>{errors.name?.message}</p>

              <input
                type="text"
                placeholder="Digite seu email"
                {...register("email")}
              />
              <p>{errors.email?.message}</p>

              <input
                type="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
              <p>{errors.password?.message}</p>

              <input
                type="password"
                placeholder="Confirme sua senha"
                {...register("confirm_password")}
              />
              <p>{errors.confirm_password?.message}</p>

              <button type="submit">Cadastrar</button>
            </Form>
          </>
        ) : (
          <>
            
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Title>Cadastro de instituição</Title>
              <input
                type="text"
                placeholder="Digite seu nome"
                {...register("name")}
              />
              <p>{errors.name?.message}</p>

              <input
                type="text"
                placeholder="Digite seu email"
                {...register("email")}
              />
              <p>{errors.email?.message}</p>

              <input
                type="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
              <p>{errors.password?.message}</p>

              <input
                type="password"
                placeholder="Confirme sua senha"
                {...register("confirm_password")}
              />
              <p>{errors.confirm_password?.message}</p>

              <button type="submit">Cadastrar</button>
            </Form>
          </>
        )}

        <div>
          <button onClick={() => setVolunter(true)}>voluntário</button>
          <button onClick={() => setVolunter(false)}>instituição</button>
        </div>
      </Modal>
    </Background>
  );
};
