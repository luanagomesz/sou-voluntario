import { InputBase, Erro,Label } from "./style";

export const Input = ({ type, placeholder, error, label }) => {
  return (
    <>
      <Label>{label}</Label>
      <InputBase type={type} placeholder={placeholder} />
      <Erro>{error}</Erro>
    </>
  );
};
