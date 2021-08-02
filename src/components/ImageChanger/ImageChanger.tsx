import { ChangeEventHandler, CSSProperties } from "react";
import { Option } from "../../types/PlanetImageOptions";
import { ImageOption } from "../ImageOption/ImageOption";
import './image_changer.css'

interface Props {
  options: Option[];
  current: string;
  color: string;
  handleChange: ChangeEventHandler;
}

interface CSSProp extends CSSProperties {
  "--color": string;
}

export const ImageChanger = ({
  options,
  current,
  color,
  handleChange,
}: Props) => {
  return (
    <aside
      className="options"
      style={
        {
          "--color": color,
        } as CSSProp
      }
    >
      {options.map((option) => (
        <ImageOption
          radioGroupName="img-planet-option"
          key={option.value}
          id={option.value}
          isChecked={current === option.value}
          handleChange={handleChange}
        />
      ))}
    </aside>
  );
};
