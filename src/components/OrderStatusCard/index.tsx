import styled from "styled-components";

type PropsType = {
  title: string;
  imageUrl: string;
  status: string;
  date: string;
  amountOfGift: number;
  totalPrice: number;
};

function OrderStatusCard({
  title,
  imageUrl,
  status,
  date,
  amountOfGift,
  totalPrice,
}: PropsType) {
  const contentArray = [
    { index: "주문 일자", value: date },
    { index: "수량", value: `${amountOfGift.toLocaleString()}개` },
    { index: "가격", value: `${totalPrice.toLocaleString()}원` },
  ];

  const statusColor = (status === "승인 대기" && {
    backgroundColor: " #E9F9AC",
    fontColor: "#000",
  }) ||
    (status === "발송 준비" && {
      backgroundColor: " #E9F9AC",
      fontColor: "#000",
    }) ||
    (status === "발송 완료" && {
      backgroundColor: " #E9F9AC",
      fontColor: "#000",
    }) || { backgroundColor: " #E9F9AC", fontColor: "#000" };

  return (
    <Container>
      <GiftImage src={imageUrl} />
      <ContentContainer>
        <WrapperContainer>
          <OrderTitle>{title}</OrderTitle>
          <StatusContainer
            fontColor={statusColor.fontColor}
            backgroundColor={statusColor.backgroundColor}
          >
            {status}
          </StatusContainer>
        </WrapperContainer>
        {contentArray.map((item, idx) => {
          return (
            <WrapperContainer>
              <IndexText>{item.index}</IndexText>
              <ValueText>{item.value}</ValueText>
            </WrapperContainer>
          );
        })}
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 12px;
  align-items: center;
  justify-content: center;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 8px;
`;

const GiftImage = styled.img`
  border-radius: 8px;
  height: 15vh;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px;
  align-items: center;
  justify-content: center;
`;

const OrderTitle = styled.p`
  margin: 0px;
  font-size: 16px;
  font-weight: 700;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2px 0px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2px 0px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const StatusContainer = styled.div<{
  backgroundColor: string;
  fontColor: string;
}>`
  width: 56px;
  height: 16px;
  padding: 8px 16px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 700;
  align-item: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
`;

const IndexText = styled.p`
  margin: 0px;
`;
const ValueText = styled.p`
  margin: 0px;
  color: #757575;
`;

export default OrderStatusCard;
