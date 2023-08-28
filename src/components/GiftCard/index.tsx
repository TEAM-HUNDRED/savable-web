import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContext } from "lib/context/ToastContext";
import styled from "styled-components";
import { GiftCardPropsType } from "types/view";
import { Amplitude } from "lib/hooks";

type PropsType = GiftCardPropsType & {
  kakaoId: string;
  userReward: number;
};

function GiftCard({ id, name, price, image, kakaoId, userReward }: PropsType) {
  const canPurchase = userReward >= price;
  const navigate = useNavigate();

  const { showToast } = useContext(ToastContext);

  const navigateToCreateOrder = () => {
    Amplitude.logClick({
      buttonName: `try_purchase_${id}`,
      currentRouteName: "/savable_shop",
    });
    navigate("/savable_shop/order", {
      state: {
        kakaoId: kakaoId,
        giftcardId: id,
        gifticonName: name,
        price: price,
        userReward: userReward,
      },
    });
  };

  const blockPurchase = () => {
    Amplitude.logClick({
      buttonName: `can't_purchase_${id}`,
      currentRouteName: "/savable_shop",
    });
    showToast({ description: "금액을 확인해주세요", toastVisible: true });
  };

  const handlePurchaseButton = canPurchase
    ? navigateToCreateOrder
    : blockPurchase;

  return (
    <Container>
      <GiftImage src={image} />
      <ContentContainer>
        <TextContainer>
          <GiftNameText>{name}</GiftNameText>
          <GiftPriceText>{`${price.toLocaleString()}원`}</GiftPriceText>
        </TextContainer>
        <PurchaseButton
          onClick={handlePurchaseButton}
          canPurchase={canPurchase}
        >
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
  font-size: 10px;
  font-weight: 700;
`;

const GiftPriceText = styled.p`
  margin: 0px;
  font-size: 10px;
  font-weight: 700;
  color: #757575;
`;

const PurchaseButton = styled.button<{ canPurchase: boolean }>`
  width: 100%;
  height: 14px;
  justify-content: center;
  align-text: center;
  background-color: ${(props) => (props.canPurchase ? "#e9f9ac" : "#E3E3E3")};
  border: none;
  border-radius: 8px;
  margin-top: 8px;
`;

const ButtonText = styled.p`
  margin: 0px;
  font-size: 10px;
  font-weight: 700;
  color: black;
`;

export default GiftCard;
