import { ChangeEvent, useState } from "react";
import { Redirect } from "wouter";
import { ImageChanger } from "../../components/ImageChanger/ImageChanger";
import { Loading } from "../../components/Loading/Loading";
import { PlanetFacts } from "../../components/PlanetFacts/PlanetFacts";
import { PlanetImage } from "../../components/PlanetImage/PlanetImage";
import { useGetPlanet } from "../../hooks/useGetPlanet";
import { Option, OPTIONS } from "../../types/PlanetImageOptions";
import { PLANET, PLANETS } from "../../types/Planets";
import './planet.css'

interface Props {
  params: {
    planet: PLANET;
  };
}

export const Planet = ({ params: { planet } }: Props) => {
  const { loading, data, error } = useGetPlanet(planet);
  const [selectedOption, setSelectedOption] = useState<Option>(OPTIONS[0]);

  const handleChange = (e: ChangeEvent) => {
    const option = OPTIONS.find(
      (option) => option.value === (e.target as HTMLInputElement).value
    )!;
    setSelectedOption(option);
  };

  return (
    <>
      {!PLANETS.includes(planet) && <Redirect to="/" />}
      {loading && <Loading />}
      {data && (
        <section className="planet-section">
          <ImageChanger
            options={OPTIONS}
            current={selectedOption.value}
            color={selectedOption.color}
            handleChange={handleChange}
          />
          <PlanetImage planet={planet} type={selectedOption.value} />
          <PlanetFacts facts={data} />
        </section>
      )}
      {error && <pre>{JSON.stringify(error, null, "\t")}</pre>}
    </>
  );
};
