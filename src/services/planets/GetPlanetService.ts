import { AxiosService } from "../AxiosService";
import { PLANET } from "../../types/Planets";
import { PlanetsResponse } from "../../types/PlanetsResponse";
import { AxiosResponse } from "axios";

export class GetPlanetService extends AxiosService {
  async getPlanetData(planet: PLANET): Promise<PlanetsResponse> {
    const res: AxiosResponse<PlanetsResponse> = await this.service.get(planet);
    const data = res.data;
    return data;
  }
}
