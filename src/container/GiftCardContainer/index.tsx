import GiftCard from "components/GiftCard";
import styled from "styled-components";
import { GiftCardPropsType } from "types/view";

type PropsType = {
  priceRange: number;
  giftCardList: GiftCardPropsType[];
};

function GiftCardContainer({ priceRange, giftCardList }: PropsType) {
  return (
    <Container>
      <PriceRangeText>{`${priceRange.toLocaleString()}원 대`}</PriceRangeText>
      <CardContainer>
        {giftCardList.map((item, idx) => {
          return (
            <GiftCard
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              onClickPurchase={() => {}}
            />
          );
        })}
      </CardContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 12px 0px;
  overflow: scroll-x;
`;

const PriceRangeText = styled.p`
  margin: 0px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: scroll;
`;

export default GiftCardContainer;
