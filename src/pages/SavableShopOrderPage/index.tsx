import { ChangeEvent, useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Icons } from "assets/icons";

import BottomNavigationBar from "components/BottomNavigationBar";
import CreateOrderInputCard from "components/CreateOrderInputCard";
import Api from "lib/api/Api";
import { CreateOrderGiftPayload } from "types/api/base";
import { ToastContext } from "lib/context/ToastContext";

function SavableShopOrderPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const { showToast } = useContext(ToastContext);

  const { kakaoId, giftcardId, gifticonName, price, userReward } =
    location.state;

  const [quantity, setQuantity] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [positivePoints, setPositivePoints] = useState<string>("");
  const [negativePoints, setNegativePoints] = useState<string>("");

  const [isFocus, setIsFocus] = useState<boolean>(false);

  const quantityInput = {
    label: `${gifticonName} (${price.toLocaleString()}원) 구매 수량`,
    placeholder: "구매할 기프티콘의 수량을 [숫자] 만 적어주세요",
    limitLength: 24,
    limitRow: 1,
    value: quantity,
    onChangeValue: (value: string) => {
      const regex = /^[0-9]$/;

      if (regex.test(value)) {
        setQuantity(value);
      }
    },
  };

  const inputCardList = [
    {
      label: "전화번호",
      placeholder: "'-'없이 전화번호를 작성해주세요",
      value: phoneNumber,
      limitRow: 1,
      onChangeValue: (value: string) => {
        const regex = /^[0-9\b]{0,11}$/;

        if (regex.test(value)) {
          setPhoneNumber(value);
        }
      },
    },
    {
      label: "좋았던 점을 적어주세요!",
      placeholder:
        "챌린지를 진행하면서 만족했거나, \n재밌었던 경험을 자유롭게 적어주세요!",
      value: positivePoints,
      onChangeValue: (value: string) => setPositivePoints(value),
    },
    {
      label: "아쉬웠던 점을 적어주세요!",
      placeholder: `챌린지를 진행하면서 불편했던 경험이나, \n이런 것이 있으면 더 좋았겠다라는 생각을 \n자유롭게 적어주세요!`,
      value: negativePoints,
      onChangeValue: (value: string) => setNegativePoints(value),
    },
  ];

  const LeftArrowIcon = Icons.SvgElement.leftArrowIcon;

  const handleSubmit = async () => {
    try {
      const payload: CreateOrderGiftPayload = {
        kakaoId: kakaoId,
        giftcardId: giftcardId,
        quantity: Number(quantity),
        phoneNumber: phoneNumber,
        positivePoints: positivePoints,
        negativePoints: negativePoints,
      };

      await Api.shared.createOrder(payload);
    } catch (error) {}
  };

  const verifyCanSubmit =
    quantity &&
    phoneNumber &&
    positivePoints &&
    negativePoints &&
    userReward >= price * Number(quantity);

  const navigateToShop = () => {
    navigate("/savable_shop", { replace: true, state: { kakaoId: kakaoId } });
  };

  const onClickSubmitButton = () => {
    if (verifyCanSubmit) {
      navigateToShop();
      handleSubmit();
      showToast({ description: "주문이 완료되었어요:D", toastVisible: true });
    } else {
      showToast({ description: "입력값을 확인하세요!", toastVisible: true });
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <IconContainer to="/savable_shop">
          <LeftArrowIcon />
        </IconContainer>
        <HeaderText>{"기프티콘 구매하기"}</HeaderText>
        <div />
      </HeaderContainer>
      <ContentContainer>
        <LabelText isFocus={isFocus}>{quantityInput.label}</LabelText>
        <InputBar
          placeholder={quantityInput.placeholder}
          value={quantity}
          type={"number"}
          onChange={quantityInput.onChangeValue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          min={0}
        />
        {inputCardList.map((item, idx) => {
          return (
            <CreateOrderInputCard
              key={`${item.label}-${idx}`}
              label={item.label}
              placeholder={item.placeholder}
              value={item.value}
              limitRow={item.limitRow}
              onChangeValue={item.onChangeValue}
            />
          );
        })}
        <SubmitButton canSubmit onClick={onClickSubmitButton}>
          <ButtonText>{"신청하기"}</ButtonText>
        </SubmitButton>
      </ContentContainer>
      <BottomNavigationBar />
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

const HeaderText = styled.p`
  max-width: 725px;
  font-size: 16px;
  margin: 0px;
`;

const ContentContainer = styled.div`
  flex: 1;
  position: relative;
  overflow: overlay;
  box-sizing: border-box;
  padding: 28px 24px;
  max-width: 768px;
  width: 100%;
  height: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const LabelText = styled.p<{ isFocus: boolean }>`
  margin: 0px;
  color: ${(props) => (props.isFocus ? "#9BBE0F" : "#000000")};
`;

const InputBar = styled.input`
  width: 100%;
  box-sizing: border-box;
  margin: 12px 0px;
  padding: 16px;
  border: 0px;
  overflow: auto;
  height: ${({ height }) => height};
  caret-color: #e9f9ac;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  resize: none;
  line-height: 1.5rem;
  ::placeholder {
    color: #e9e8e8;
  }
  &:focus {
    outline: none;
    border-top: 1px solid #e9f9ac;
    border-bottom: 1px solid #e9f9ac;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SubmitButton = styled.button<{ canSubmit: boolean }>`
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => (props.canSubmit ? "#e9f9ac" : "#e3e3e3")};
`;

const ButtonText = styled.p`
  margin: 0px;
  font-size: 16px;
  font-weight: 700;
  white-space: pre-line;
`;

export default SavableShopOrderPage;
