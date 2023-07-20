import styled from "styled-components";

import SavingHeader from "components/SavingHeader";
import dotenv from "dotenv";
import axios from "axios";
import { useEffect } from "react";
dotenv.config();

console.log(process.env.REACT_APP_API_BASE_URL);

function HomePage() {
  const getUserData = async () => {
    const response = await axios.get(
      `http://13.209.177.55:8080/main?kakaoId=ee3cdb725f00f08b669a230710dc0360d9697c4fa88aecae44b37508e6d656ea50`
    );
    console.log(response);
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Container>
      <SavingHeader />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

export default HomePage;
