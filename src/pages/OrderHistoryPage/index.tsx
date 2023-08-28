import { Icons } from "assets/icons";
import OrderStatusCard from "components/OrderStatusCard";
import { Link } from "react-router-dom";
import styled from "styled-components";

function OrderHistoryPage() {
  const LeftArrowIcon = Icons.SvgElement.leftArrowIcon;

  const warningText = `기프티콘 신청 현황이 "발송 준비"가 되면\n기프티콘 전송이 1일 이내 완료됩니다.`;

  const DummyOrderItem = [
    {
      title: "아이템 명",
      imageUrl:
        "https://chatbot-budket.s3.ap-northeast-2.amazonaws.com/giftcard/giftcard-3.png",
      status: "승인 대기",
      date: "일자",
      amountOfGift: 2,
      totalPrice: 2000,
    },
  ];

  return (
    <Container>
      <HeaderContainer>
        <IconContainer to="/savable_shop">
          <LeftArrowIcon />
        </IconContainer>
        <HeaderText>{"기프티콘 구매하기"}</HeaderText>
        <RightIconContainer />
      </HeaderContainer>
      <ContentContainer>
        <DescriptionContainer>
          <WarningIcon fill="#ffaea5" width="24" height={"24"} />
          <DescriptionText>{warningText}</DescriptionText>
        </DescriptionContainer>
        {DummyOrderItem.map((item) => {
          return <OrderStatusCard {...item} />;
        })}
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0;
  box-sizing: border-box;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  position: relative;
  overflow: overlay;
  box-sizing: border-box;
  padding: 12px 24px;
  max-width: 768px;
  width: 100%;
  height: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  padding: 0px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e8e8e8;
  background-color: #fff;
  box-sizing: border-box;
`;

const IconContainer = styled(Link)`
  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;

const RightIconContainer = styled.div`
  width: 24px;
  height: 24px;
`;

const HeaderText = styled.p`
  max-width: 725px;
  font-size: 16px;
  margin: 0px;
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

export default OrderHistoryPage;
