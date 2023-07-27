import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

import Api from "lib/api/Api";
import { MemberInfoPropsType, UserChallengePropsType } from "types/view";

import AddChallengeButton from "components/AddChallengeButton";
import ChallengeCard from "components/ChallengeCard";
import { Icons } from "assets/icons";
import { KakaoIdContext } from "lib/context/KakaoIdContext";
import { CHATBOT_LINK_LIST } from "config";

function ChallengePage() {
  const location = useLocation();
  const navigate = useNavigate();

  const paramKakaoId = new URLSearchParams(location.search).get(
    "kakaoId"
  ) as string;

  const { updateKakaoId, kakaoId: currentKakaoId } = useContext(KakaoIdContext);

  const kakaoId = paramKakaoId ?? currentKakaoId;

  const [userChallenge, setUserChallenge] =
    useState<UserChallengePropsType[]>();
  const [userInfo, setUserInfo] = useState<MemberInfoPropsType>();

  const onClickCertificationButton = () => {
    window.open(CHATBOT_LINK_LIST.chat);
  };

  const onCLickAddButton = () => {
    window.open(CHATBOT_LINK_LIST.channel);
  };

  const onClickDetailButton = (props: UserChallengePropsType) => {
    navigate("/challenge/detail", { state: { props: props } });
  };

  const getRankingData = async () => {
    try {
      const response = await Api.shared.getUserChallenge(kakaoId);

      setUserChallenge(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserInfo = async () => {
    try {
      const response = await Api.shared.getUserSavingStatus(kakaoId);

      setUserInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!currentKakaoId) updateKakaoId(paramKakaoId);

    getRankingData();
    getUserInfo();
  }, []);

  if (!userChallenge || !userInfo) return <></>;

  const descriptionText = `안녕하세요 ${userInfo.username} 세이버님!\n 아래의 '+' 버튼을 눌러 절약 챌린지를 Savable과 함께해요!`;

  return (
    <Container>
      <TitleText>{`세이버 ${userInfo.username}의 참여 챌린지`}</TitleText>
      {userChallenge.length === 0 && (
        <DescriptionContainer>
          <CoinIcon fill="#9bbe0f" width="24" height={"24"} />
          <DescriptionText>{descriptionText}</DescriptionText>
        </DescriptionContainer>
      )}
      {userChallenge.map((item, idx) => {
        return (
          <ChallengeCard
            {...item}
            onClickDetailButton={onClickDetailButton}
            onClickCertificationButton={onClickCertificationButton}
          />
        );
      })}
      <AddButtonContainer>
        <AddChallengeButton onClickButton={onCLickAddButton} />
      </AddButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 0px 24px;
  box-sizing: border-box;
`;

const TitleText = styled.p`
  margin: 0px;
  font-size: 16px;
  font-weight: 700;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: #e8e8e8;
  border-radius: 16px;
  margin: 16px 0px;
  box-sizing: border-box;
`;

const CoinIcon = styled(Icons.SvgElement.coinIcon)`
  margin-right: 8px;
`;

const DescriptionText = styled.p`
  margin: 0px;
  font-size: 12px;
  font-weight: 700;
  color: #757575;
  white-space: pre-line;
`;

const AddButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;

export default ChallengePage;
