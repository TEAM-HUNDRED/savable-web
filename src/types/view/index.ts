export type MemberPropsType = {
  username: string;
  kakaoName: string;
  kakaoId: string;
  savedMoney: number;
  reward: number;
  participationList: ParticipatedChallengePropsType[];
};

export type UserOrderPropsType = {
  productName: string;
  orderDate: string;
  quantity: number;
  price: number;
  image: string;
  status: string;
};

export type GiftCardPropsType = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export type UserChallengePropsType = {
  title: string;
  savedMoney: number;
  reward: number;
  username: string;
  cnt: number;
  challengeId: number;
};

export type ParticipatedChallengePropsType = {
  challengeId: number;
  certificationCnt: number;
  startDate: string;
  endDate: null;
};

export type UserRankingPropsType = {
  username: string;
  certRank: number;
  certNum: number;
  gap: number;
  savedMoney: number;
};

export type RankingPropsType = {
  username: string;
  certRank: number;
};

export type MemberInfoPropsType = {
  savedMoney: number;
  reward: number;
  username: string;
};

export type UserChallengeCertList = {
  date: string;
  count: number;
};
