import styled from "styled-components";

import RankingHeader from "components/RankingHeader";

function RankingPage() {
  const userName = "고영준";

  return (
    <Container>
      <TitleText>{`세이버 ${userName}의 이번 주 랭킹`}</TitleText>
      <RankingHeader />
      <Divider />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const TitleText = styled.p`
  margin: 0px;
  font-size: 16px;
  font-weight: 700;
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #e3e3e3;
`;

export default RankingPage;
