import { Images } from "assets/images";
import styled from "styled-components";

type PropsType = {
  savedMoney: number;
  reward: number;
  username: string;
};

function SavingHeader({ savedMoney, reward, username }: PropsType) {
  return (
    <Container>
      <SavedMoneyContainer>
        <MoneyImage src={Images.money} />
        <SavedMoneyText>{`${reward.toLocaleString()}원`}</SavedMoneyText>
        <ContentText>{`세이버 ${username}님의\n 포인트 적립금`}</ContentText>
      </SavedMoneyContainer>
      <DescriptionText>{`7월에 ${`${savedMoney.toLocaleString()}원`} 절약하고\n ${`${reward.toLocaleString()}원`} 받았어요`}</DescriptionText>
      <Divider />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const SavedMoneyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  border: 5px solid #9bbe0f;
  border-radius: 100px;
  margin-bottom: 22px;
`;

const MoneyImage = styled.img`
  width: 80px;
  height: 80px;
`;

const SavedMoneyText = styled.p`
  margin: 10px 0px;
  font-size: 24px;
  font-weight: 800;
  color: #9bbe0f;
`;

const ContentText = styled.p`
  margin: 0px;
  font-size: 12px;
  font-weight: 700;
  white-space: pre-line;
  text-align: center;
`;

const Divider = styled.div`
  height: 2px;
  width: 100%;
  background-color: #cfcfcf;
  margin: 32px 0px;
`;

const DescriptionText = styled.p`
  margin: 0px;
  font-size: 16px;
  font-weight: 700;
  white-space: pre-line;
  text-align: center;
`;

export default SavingHeader;
