import { SelectBase, Label, Option } from "./style";

export const Select = ({ label, options, data, register }) => {
  return (
    <>
      <Label>{label}</Label>
      <SelectBase {...register(data)}>
        {options.map((option) => (
          <Option key={option} value={option}>{option}</Option>
        ))}
      </SelectBase>
    </>
  );
};
