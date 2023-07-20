import ChallengeCardContainer from "container/ChallengeCardContainer";
import styled from "styled-components";

function ChallengePage() {
  const userName = "고영준";

  return (
    <Container>
      <TitleText>{`세이버 ${userName}의 참여 챌린지`}</TitleText>
      <ChallengeCardContainer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const TitleText = styled.p`
  margin: 0px;
  font-size: 16px;
  font-weight: 700;
`;

export default ChallengePage;
