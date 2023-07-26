import styled from "styled-components";

import { UserChallengePropsType } from "types/view";

import { Images } from "assets/images";
import SVButton from "components/SVButton";

type PropsType = UserChallengePropsType & {
  onClickDetailButton: (props: UserChallengePropsType) => void;
  onClickCertificationButton: () => void;
};

function ChallengeCard({
  title,
  savedMoney,
  reward,
  username,
  cnt,
  onClickCertificationButton,
  onClickDetailButton,
}: PropsType) {
  const onClickDetail = () => {
    onClickDetailButton({
      title: title,
      savedMoney: savedMoney,
      reward: reward,
      username: username,
      cnt: cnt,
    });
  };

  return (
    <Container>
      <HeaderContainer>
        <ChallengeImage src={Images.coffee} />
        <ChallengeContainer>
          <TitleText>{title}</TitleText>
          <ContentContainer>
            <ContentText>{`현재 절약 금액`}</ContentText>
            <ContentText>{`${savedMoney}원`}</ContentText>
          </ContentContainer>
          <ContentContainer>
            <ContentText>{`수령 리워드액`}</ContentText>
            <ContentText>{`${reward}원`}</ContentText>
          </ContentContainer>
        </ChallengeContainer>
      </HeaderContainer>
      <ButtonContainer>
        <SVButton
          buttonText="인증하기"
          onClickButton={onClickCertificationButton}
          color={"#E9F9AC"}
        />
      </ButtonContainer>
      <ButtonContainer>
        <SVButton
          buttonText="챌린지 상세보기"
          onClickButton={onClickDetail}
          color={"#E3E3E3"}
        />
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ChallengeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ChallengeImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  border: 1px solid #e8e8e8;
  margin: 4px 10px 0px 0px;
`;

const TitleText = styled.p`
  margin: 0px;
  font-size: 12px;
  margin-bottom: 8px;
  font-weight: 700;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const ContentText = styled.p`
  margin: 0px;
  margin-bottom: 4px;
  font-size: 10px;
`;

const ButtonContainer = styled.div`
  margin-top: 4px;
`;

export default ChallengeCard;
