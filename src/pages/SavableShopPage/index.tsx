import { useEffect, useState } from "react";
import styled from "styled-components";

import Api from "lib/api/Api";
import { GiftCardPropsType, MemberPropsType } from "types/view";

import SavableShopHeader from "components/SavableShopHeader";
import GiftCardContainer from "container/GiftCardContainer";

const kakaoId =
  "4d82be285a8b342f32bfcdf0af2d52d0f8a5ea726b128403e972865097f23c2c48";

function SavableShopPage() {
  const [userData, setUserData] = useState<MemberPropsType>();
  const [giftIconList, setGiftIconList] = useState<{
    [key: string]: GiftCardPropsType[];
  }>();
  const [giftPriceRageArray, setPriceRangeArray] = useState<string[]>([]);

  const getGiftCardList = async () => {
    try {
      const response = await Api.shared.getGifticonList(kakaoId);

      setUserData(response.data.member);
      setGiftIconList(response.data.giftcards);
      setPriceRangeArray(Object.keys(response.data.giftcards).sort());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGiftCardList();
  }, []);

  if (!userData || !giftIconList) return <></>;

  return (
    <Container>
      <SavableShopHeader
        reward={userData.reward}
        savedMoney={userData.savedMoney}
        username={userData.username}
      />
      <Divider />
      <GiftContainer>
        {giftPriceRageArray.map((item, idx) => {
          return (
            <GiftCardContainer
              key={`${item}-${idx}`}
              priceRange={Number(item)}
              giftCardList={giftIconList[item]}
              userReward={userData.reward}
            />
          );
        })}
      </GiftContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Divider = styled.div`
  height: 2px;
  width: 100%;
  background-color: #cfcfcf;
  margin: 4px 0px;
`;

const GiftContainer = styled.div`
  margin: 20px 24px;
`;

export default SavableShopPage;
