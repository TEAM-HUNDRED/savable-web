import ProductionApi from "./ProductionApi";
import { ISVApi } from "./ISVApi";

export default class Api {
  private static instance: ISVApi;

  private constructor() {
    Api.instance = ProductionApi.shared;
  }

  static get shared(): ISVApi {
    if (!Api.instance) new Api();
    return Api.instance;
  }
}
