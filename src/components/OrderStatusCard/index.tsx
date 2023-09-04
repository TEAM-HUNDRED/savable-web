import styled from "styled-components";

type PropsType = {
  productName: string;
  orderDate: string;
  quantity: number;
  price: number;
  image: string;
  status: string;
};

function OrderStatusCard({
  productName,
  image,
  status,
  orderDate,
  quantity,
  price,
}: PropsType) {
  const calculateDate = (date: string) => {
    const currentDate = new Date(date);

    const getMonthString =
      currentDate.getMonth() > 9
        ? `${currentDate.getMonth() + 1}`
        : `0${currentDate.getMonth() + 1}`;

    const getUTCDateString =
      currentDate.getUTCDate() > 10
        ? `${currentDate.getUTCDate()}`
        : `0${currentDate.getUTCDate()}`;

    const getDay = currentDate.getUTCDay();
    const day = ["일", "월", "화", "수", "목", "금", "토"];

    const getHour =
      currentDate.getUTCHours() > 10
        ? `${currentDate.getUTCHours()}`
        : `0${currentDate.getUTCHours()}`;

    const getMinutes =
      currentDate.getUTCMinutes() > 10
        ? `${currentDate.getUTCMinutes()}`
        : `0${currentDate.getUTCMinutes()}`;

    return `${getMonthString}.${getUTCDateString}(${day[getDay]}) ${getHour}:${getMinutes}`;
  };

  const contentArray = [
    { index: "주문 일자", value: calculateDate(orderDate) },
    { index: "수량", value: `${quantity.toLocaleString()}개` },
    { index: "가격", value: `${price.toLocaleString()}원` },
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
      <GiftImage src={image} />
      <ContentContainer>
        <TitleContainer>
          <StatusContainer
            fontColor={statusColor.fontColor}
            backgroundColor={statusColor.backgroundColor}
          >
            {status}
          </StatusContainer>
          <OrderTitle>{productName}</OrderTitle>
        </TitleContainer>
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
  flex-direction: column;
  width: 100%;
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
