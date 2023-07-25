import { AxiosResponse } from "axios";
import {
  CreateOrderGiftPayload,
  GificonListApiResponse,
  GifticonApiResponse,
  MemberApiResponse,
  RankingApiResponse,
  UserChallengeApiResponse,
} from "types/api/base";

export type ISVApi = {
  load(): void;

  getGifticonList(
    kakaoId: string
  ): Promise<AxiosResponse<GificonListApiResponse>>;

  getGifticon(
    giftcardId: number,
    kakaoId: string
  ): Promise<AxiosResponse<GifticonApiResponse>>;

  createOrder(payload: CreateOrderGiftPayload): Promise<AxiosResponse>;

  getRankingList(kakaoId: string): Promise<AxiosResponse<RankingApiResponse>>;

  getUserChallenge(
    kakaoId: string
  ): Promise<AxiosResponse<UserChallengeApiResponse>>;

  getUserSavingStatus(
    kakaoId: string
  ): Promise<AxiosResponse<MemberApiResponse>>;
};
