import { useEffect, useState } from "react";
import styled from "styled-components";

import Api from "lib/api/Api";

import SavingHeader from "components/SavingHeader";
import { GiftCardPropsType, MemberPropsType } from "types/view";

const kakaoId =
  "ee3cdb725f00f08b669a230710dc0360d9697c4fa88aecae44b37508e6d656ea50";

function SavableShopPage() {
  const [userData, setUserData] = useState<MemberPropsType>();
  const [giftIconList, setGiftIconList] = useState<{
    [key: string]: GiftCardPropsType[];
  }>();

  const getGiftCardList = async () => {
    try {
      const response = await Api.shared.getGifticonList(kakaoId);

      setUserData(response.data.member);
      setGiftIconList(response.data.giftcards);
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
      <SavingHeader
        reward={userData.reward}
        savedMoney={userData.savedMoney}
        username={userData.username}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

export default SavableShopPage;
