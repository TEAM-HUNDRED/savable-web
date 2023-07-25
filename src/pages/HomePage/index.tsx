import { useEffect, useState } from "react";
import styled from "styled-components";

import Api from "lib/api/Api";

import SavingHeader from "components/SavingHeader";

type UserDataPropsType = {
  username: string;
  savedMoney: number;
  reward: number;
};

const kakaoId =
  "ee3cdb725f00f08b669a230710dc0360d9697c4fa88aecae44b37508e6d656ea50";
const giftCardId = 1;

function HomePage() {
  const [userData, setUserData] = useState<UserDataPropsType>({
    reward: 10,
    username: "d",
    savedMoney: 10,
  } as UserDataPropsType);

  const getUserData = async () => {
    try {
      const response = await Api.shared.getUserSavingStatus(kakaoId);

      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

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

export default HomePage;
