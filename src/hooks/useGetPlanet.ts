import { useEffect, useState } from "react";
import { GetPlanetService } from "../services/planets/GetPlanetService";
import { PLANET } from "../types/Planets";
import { PlanetsResponse } from "../types/PlanetsResponse";

interface States {
  loading: boolean;
  data: PlanetsResponse | null;
  error: Error | null;
}

export const useGetPlanet = (planet: PLANET): States => {
  const service = new GetPlanetService();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<States["data"]>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPlanet = async () => {
      try {
        setLoading(true);
        setData(null);
        setError(null);
        const res = await service.getPlanetData(planet);
        setData(res);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setData(null);
        setError(error);
      }
    };

    getPlanet();
  }, [planet]);

  return {
    loading,
    data,
    error,
  };
};
