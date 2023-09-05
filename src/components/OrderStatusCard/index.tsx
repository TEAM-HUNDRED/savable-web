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

    const getDateString =
      currentDate.getDate() >= 10
        ? `${currentDate.getDate()}`
        : `0${currentDate.getDate()}`;

    const getDay = currentDate.getDay();
    const day = ["일", "월", "화", "수", "목", "금", "토"];

    const getHour =
      currentDate.getHours() >= 10
        ? `${currentDate.getHours()}`
        : `0${currentDate.getHours()}`;

    const getMinutes =
      currentDate.getMinutes() >= 10
        ? `${currentDate.getMinutes()}`
        : `0${currentDate.getMinutes()}`;

    return `${getMonthString}.${getDateString}(${day[getDay]}) ${getHour}:${getMinutes}`;
  };

  const contentArray = [
    { index: "주문 일자", value: calculateDate(orderDate) },
    { index: "수량", value: `${quantity.toLocaleString()}개` },
    { index: "가격", value: `${price.toLocaleString()}원` },
  ];

  const statusColor = (status === "승인대기" && {
    backgroundColor: "#ffaea5",
    fontColor: "#000",
  }) ||
    (status === "발송준비" && {
      backgroundColor: " #9bbe0f",
      fontColor: "#000",
    }) ||
    (status === "발송완료" && {
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
  margin: 8px 0px;
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
  align-items: start;
  margin-bottom: 8px;
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
  height: 12px;
  padding: 4px 8px;
  margin-bottom: 8px;
  border-radius: 24px;
  font-size: 12px;
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
