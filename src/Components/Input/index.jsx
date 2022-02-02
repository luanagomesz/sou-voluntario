import { InputBase, Erro, Label } from "./style";

export const Input = ({ type, placeholder, error, label, register, data }) => {
  return (
    <>
      <Label>{label}</Label>
      <InputBase type={type} placeholder={placeholder} {...register(data)} />
      <Erro>{error}</Erro>
    </>
  );
};
