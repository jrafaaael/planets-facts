import { ImageOptions } from "../../types/PlanetImageOptions";
import { PLANET } from "../../types/Planets";

interface Props {
  planet: PLANET;
  type: keyof typeof ImageOptions;
}

export const PlanetImage = ({ planet, type }: Props) => {
  return (
    <img
      className="w-52 m-auto block md:col-[1/-1] lg:col-[1/2]"
      src={
        new URL(
          `../../assets/svg/planet-${planet}-${type}.svg`,
          import.meta.url
        ) as unknown as string
      }
      alt="earth"
    />
  );
};
