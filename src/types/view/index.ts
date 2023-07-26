export type MemberPropsType = {
  username: string;
  kakaoName: string;
  kakaoId: string;
  savedMoney: number;
  reward: number;
  participationList: ParticipatedChallengePropsType[];
};

export type GiftCardPropsType = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export type ParticipatedChallengePropsType = {
  challengeId: number;
  certificationCnt: number;
  startDate: string;
  endDate: null;
};
