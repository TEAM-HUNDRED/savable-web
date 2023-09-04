import axios, { AxiosStatic } from "axios";
import { CreateOrderGiftPayload } from "types/api/base";

import { ISVApi } from "./ISVApi";

export default class ProductionApi implements ISVApi {
  static instance: ISVApi;
  _axios: AxiosStatic;

  private constructor() {
    this._axios = axios;
  }

  load() {
    console.log("[AxiosService] Start axios service");

    this._axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
    this._axios.defaults.timeout = 4000;
  }

  static get shared() {
    if (!ProductionApi.instance) ProductionApi.instance = new ProductionApi();
    return ProductionApi.instance;
  }

  public getGifticonList = async (kakaoId: string) => {
    const data = await this._axios.get(`shop/${kakaoId}`);

    return data;
  };

  public getGifticon = async (giftcardId: number, kakaoId: string) => {
    const data = await this._axios.get(`order/${giftcardId}/${kakaoId}`);

    return data;
  };

  public createOrder = async (payload: CreateOrderGiftPayload) => {
    const data = await this._axios.post(`order`, payload);

    return data;
  };

  public getRankingList = async (kakaoId: string) => {
    const data = await this._axios.get(`ranking?kakaoId=${kakaoId}`);

    return data;
  };

  public getUserChallenge = async (kakaoId: string) => {
    const data = await this._axios.get(`challenges/users/${kakaoId}`);

    return data;
  };

  public getUserChallengeCertList = async (
    kakaoId: string,
    challengeId: number
  ) => {
    const data = await this._axios.get(
      `challenges/${challengeId}/users/${kakaoId}`
    );

    return data;
  };

  public getUserOrderList = async (kakaoId: string) => {
    const data = await this._axios.get(`gift-histories/${kakaoId}`);

    return data;
  };

  public getUserSavingStatus = async (kakaoId: string) => {
    const data = await this._axios.get(`main?kakaoId=${kakaoId}`);

    return data;
  };
}
