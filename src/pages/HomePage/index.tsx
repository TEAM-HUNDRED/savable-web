import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import styled from "styled-components";

import SavingHeader from "components/SavingHeader";

type UserDataPropsType = {
  username: string;
  savedMoney: number;
  reward: number;
};

function HomePage() {
  const [userData, setUserData] = useState<UserDataPropsType>(
    {} as UserDataPropsType
  );

  const getUserData = async () => {
    try {
      const response: AxiosResponse<UserDataPropsType> = await axios.get(
        `/main?kakaoId=ee3cdb725f00f08b669a230710dc0360d9697c4fa88aecae44b37508e6d656ea50`
      );

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
