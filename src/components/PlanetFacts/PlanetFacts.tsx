import { PlanetsResponse } from "../../types/PlanetsResponse";
import { FactBox } from "../FactBox/FactBox";

export const PlanetFacts = ({ facts }: { facts: PlanetsResponse }) => {
  return (
    <aside className="px-6 pb-6 flex flex-col gap-4 md:p-0 md:col-[1/2] lg:col-[2/-1] lg:row-[1/-1] lg:self-center">
      <h1 className="text-4xl text-center font-bold md:mb-2">
        {facts.englishName}
      </h1>
      <FactBox>
        <>
          <h3>Revolution Time</h3>
          <p className="text-2xl font-bold">
            {Math.abs(facts.sideralOrbit) > 366
              ? Number((Math.abs(facts.sideralOrbit) / 365).toFixed(2)) +
                " years"
              : Number(Math.abs(facts.sideralOrbit).toFixed(2)) + " days"}
          </p>
        </>
      </FactBox>
      <FactBox>
        <>
          <h3>Rotation Time</h3>
          <p className="text-2xl font-bold">
            {Math.abs(facts.sideralRotation) > 25
              ? Number((Math.abs(facts.sideralRotation) / 24).toFixed(2)) +
                " days"
              : Number(Math.abs(facts.sideralRotation).toFixed(2)) + " hours"}
          </p>
        </>
      </FactBox>
      <FactBox>
        <>
          <h3>Average Temp</h3>
          <p className="text-2xl font-bold">
            {Number((facts.avgTemp - 273.15).toFixed(2))} <sup>º</sup>C
          </p>
        </>
      </FactBox>
      <FactBox>
        <>
          <h3>Gravity</h3>
          <p className="text-2xl font-bold">
            {Number(facts.gravity.toFixed(2))} <sup>m</sup>&frasl;
            <sub>
              s
              <small>
                <sup>2</sup>
              </small>{" "}
            </sub>
          </p>
        </>
      </FactBox>
    </aside>
  );
};
