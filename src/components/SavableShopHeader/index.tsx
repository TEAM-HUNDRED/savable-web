import { Icons } from "assets/icons";
import { Images } from "assets/images";
import SBBar from "components/common/SBBar";
import styled from "styled-components";

type PropsType = {
  savedMoney: number;
  reward: number;
  username: string;
};

function SavableShopHeader({ savedMoney, reward, username }: PropsType) {
  // const currentMonth = new Date().getMonth() + 1;
  const descriptionText = `지금까지 ${savedMoney.toLocaleString()}원 절약하고\n${reward.toLocaleString()}원 받았어요!`;
  const warningText = `기프티콘 신청 후 즉시 발급되지 않습니다.\n신청 이후 승인, 전송까지 최대 2주 소요되니 참고 부탁드립니다:D`;

  return (
    <Container>
      <SavedMoneyContainer>
        <MoneyImage src={Images.money} />
        <ContentContainer>
          <ContentText>{`세이버 ${username}님의 포인트 적립금`}</ContentText>
          <SavedMoneyText>{`${reward.toLocaleString()}원`}</SavedMoneyText>
        </ContentContainer>
      </SavedMoneyContainer>
      <SBBar
        title={"기프티콘 주문 현황 보러 가기"}
        pathName={"/savable_shop/order_history"}
        icon={Icons.SvgElement.giftIcon}
      />
      <DescriptionContainer>
        <CoinIcon fill="#9bbe0f" width="24" height={"24"} />
        <DescriptionText>{descriptionText}</DescriptionText>
      </DescriptionContainer>
      <DescriptionContainer>
        <WarningIcon fill="#ffaea5" width="24" height={"24"} />
        <DescriptionText>{warningText}</DescriptionText>
      </DescriptionContainer>
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
  padding: 0px 24px;
  box-sizing: border-box;
`;

const SavedMoneyContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  padding: 0px 24px;
  box-sizing: border-box;
`;

const MoneyImage = styled.img`
  width: 40px;
  height: 40px;
`;

const SavedMoneyText = styled.p`
  margin: 5px 0px;
  font-size: 24px;
  font-weight: 800;
  color: #9bbe0f;
`;

const ContentText = styled.p`
  margin: 0px;
  font-size: 12px;
  font-weight: 700;
  white-space: pre-line;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: #e8e8e8;
  border-radius: 16px;
  margin: 4px 0px;
  box-sizing: border-box;
`;

const CoinIcon = styled(Icons.SvgElement.coinIcon)`
  margin-right: 8px;
`;

const WarningIcon = styled(Icons.SvgElement.warningIcon)`
  margin-right: 8px;
`;

const DescriptionText = styled.p`
  margin: 0px;
  font-size: 12px;
  font-weight: 700;
  color: #757575;
  white-space: pre-line;
`;

export default SavableShopHeader;
