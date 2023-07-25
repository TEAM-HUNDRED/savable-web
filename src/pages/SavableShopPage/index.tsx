import { useEffect, useState } from "react";
import styled from "styled-components";

import Api from "lib/api/Api";
import { GiftCardPropsType, MemberPropsType } from "types/view";

import SavableShopHeader from "components/SavableShopHeader";

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
      <SavableShopHeader
        reward={userData.reward}
        savedMoney={userData.savedMoney}
        username={userData.username}
      />
      <Divider />
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

export default SavableShopPage;
