import { ChangeEventHandler } from "react";
import "./image_option.css";

interface Props {
  radioGroupName: string;
  id: string;
  isChecked: boolean;
  handleChange: ChangeEventHandler;
}

export const ImageOption = ({
  radioGroupName,
  id,
  isChecked,
  handleChange,
}: Props) => {
  return (
    <div>
      <input
        type="radio"
        className="sr-only"
        name={radioGroupName}
        id={id}
        value={id}
        checked={isChecked}
        onChange={handleChange}
      />
      <label
        htmlFor={id}
        className="py-2 cursor-pointer block md:p-3 md:outline-checked"
      >
        <span className="option uppercase">{id}</span>
      </label>
    </div>
  );
};
