import { ChangeEventHandler, CSSProperties } from "react";
import { Option } from "../../types/PlanetImageOptions";
import { ImageOption } from "../ImageOption/ImageOption";

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
      className="border-b-2 border-gray-700 flex justify-around md:col-[2/3] md:row-[2/3] md:flex-col md:justify-center md:gap-5 md:border-none lg:col-[1/2]"
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
