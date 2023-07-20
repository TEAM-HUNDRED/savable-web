import styled from "styled-components";

import SavingHeader from "components/SavingHeader";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.REACT_APP_API_BASE_URL);

function HomePage() {
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
