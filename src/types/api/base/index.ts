export type MemberGetParams = {
  kakaoId: string;
};

export type SavableShopGetParams = MemberGetParams;
export type RankingGetParams = MemberGetParams;
export type ChallengeGetParams = MemberGetParams;
export type SavingStatusGetParams = MemberGetParams;

export type CreateOrderGiftPayload = {
  kakaoId: string;
  giftcardId: number;
  quantity: number;
  phoneNumber: string;
  positivePoints: string;
  negativePoints: string;
};

export type MemberApiResponse = {
  savedMoney: number;
  reward: number;
  username: string;
};

export type GificonListApiResponse = {
  giftcards: { [key: string]: GiftCard[] };
  member: Member;
};

export type GifticonApiResponse = {
  giftcard: GiftCard;
  member: PhoneMember;
};

export type RankingApiResponse = {
  privateRankingInfo: PrivateRankingInfo;
  rankingListInfo: RankingListInfo[];
};

export type UserChallengeApiResponse = {
  title: string;
  savedMoney: number;
  reward: number;
  username: string;
  cnt: number;
  challengeId: number;
}[];

export type UserChallengeCertListResponse = {
  date: string;
  count: number;
}[];

export type PrivateRankingInfo = {
  username: string;
  certRank: number;
  certNum: number;
  gap: number;
  savedMoney: number;
};

export type RankingListInfo = {
  username: string;
  certRank: number;
};

export type GiftCard = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export type PhoneMember = {
  username: string;
  reward: number;
  savedMoney: number;
  phoneNumber: string;
};

export type Member = {
  username: string;
  kakaoName: string;
  kakaoId: string;
  savedMoney: number;
  reward: number;
  participationList: ParticipatedChallenge[];
};

export type ParticipatedChallenge = {
  challengeId: number;
  certificationCnt: number;
  startDate: string;
  endDate: null;
};
