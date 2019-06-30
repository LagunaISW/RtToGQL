import { RESTDataSource } from "apollo-datasource-rest";

export class pokeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://pokeapi.co/api/v2/";
  }
}
