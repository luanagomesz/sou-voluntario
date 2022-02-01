import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input";
import { Form, Button,Center } from "./style";

export const FormInst = () => {
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
          type="text"
          placeholder="Selecione sua categoria"
          error={errors.category?.message}
          {...register("category")}
          label="Categoria:"
        />

        <Input
          type="number"
          placeholder="Digite seu CEP"
          error={errors.cep?.message}
          {...register("cep")}
          label="CEP:"
        />

        <Center>
          <Button type="submit">Cadastrar</Button>
        </Center>
      </Form>
    </>
  );
};
