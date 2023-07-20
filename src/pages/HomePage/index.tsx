import styled from "styled-components";

import SavingHeader from "components/SavingHeader";

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
