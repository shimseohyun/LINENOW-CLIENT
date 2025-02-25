import { IconLabel } from "@linenow/design-system";
import * as S from "./Select.styled";

export interface OptionProps
  extends React.OptionHTMLAttributes<HTMLOptionElement> {
  label: string;
  value: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: OptionProps[];
}
const Select = ({ options, ...props }: SelectProps) => {
  return (
    <IconLabel
      iconPosition="right"
      gap={"0.25rem"}
      icon={{ name: "down_gray_light", size: "1rem" }}
    >
      <S.SelectWrapper {...props}>
        {options.map((option) => (
          <option key={option.value} {...option}>
            {option.label}
          </option>
        ))}
      </S.SelectWrapper>
    </IconLabel>
  );
};

export default Select;
