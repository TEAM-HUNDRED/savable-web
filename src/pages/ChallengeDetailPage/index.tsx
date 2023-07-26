import StampContainer from "container/StampContainer";
import styled from "styled-components";

function ChallengeDetailPage() {
  const savedMoney = "20,000원";
  const reward = "500원";

  const titleText = `커피값 절약 챌린지로 \n${savedMoney} 아끼고 ${reward} 벌었어요`;

  return (
    <Container>
      <TitleText>{titleText}</TitleText>
      <StampContainer />
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
  white-space: pre-line;
`;

export default ChallengeDetailPage;
