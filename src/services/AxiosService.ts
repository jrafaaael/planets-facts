import axios from "axios";

export class AxiosService {
  protected service = axios.create({
    baseURL: "https://api.le-systeme-solaire.net/rest/bodies",
  });
}
