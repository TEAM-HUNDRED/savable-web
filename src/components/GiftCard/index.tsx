import styled from "styled-components";
import { GiftCardPropsType } from "types/view";

type PropsType = GiftCardPropsType & {
  onClickPurchase: () => void;
};

function GiftCard({ id, name, price, image, onClickPurchase }: PropsType) {
  return (
    <Container>
      <GiftImage src={image} />
      <ContentContainer>
        <TextContainer>
          <GiftNameText>{name}</GiftNameText>
          <GiftPriceText>{`${price.toLocaleString()}원`}</GiftPriceText>
        </TextContainer>
        <PurchaseButton onClick={onClickPurchase}>
          <ButtonText>{`구매하기`}</ButtonText>
        </PurchaseButton>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 4px;
  min-width: 100px;
  width: 100px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
`;

const GiftImage = styled.img`
  width: 100%;
  min-height: 100px;
  border-bottom: 1px solid #e8e8e8;
  border-radius: 8px;
  object-fit: contain;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 3px 6px 6px 6px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const GiftNameText = styled.p`
  margin: 0px;
  font-size: 6px;
  font-weight: 700;
  //   white-space: nowrap;
  //   overflow: hidden;
  //   text-overflow: ellipsis;
`;

const GiftPriceText = styled.p`
  margin: 0px;
  font-size: 6px;
  font-weight: 700;
  color: #757575;
`;

const PurchaseButton = styled.button`
  width: 100%;
  height: 14px;
  justify-content: center;
  align-text: center;
  background-color: #e9f9ac;
  border: none;
  border-radius: 8px;
  margin-top: 8px;
`;

const ButtonText = styled.p`
  margin: 0px;
  font-size: 6px;
  font-weight: 700;
`;

export default GiftCard;
