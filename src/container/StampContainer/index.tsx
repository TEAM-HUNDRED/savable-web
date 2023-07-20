import styled from "styled-components";

import StampCard from "components/StampCard";

function StampContainer() {
  const numberOfCert = 7;
  const contentText = `커피값 절약 챌린지 총 ${numberOfCert}회 인증하셨어요!\n절약해서 스탬프 쾅! 쾅! 받아가요`;

  return (
    <Container>
      <TitleText>{`주간 인증 스탬프`}</TitleText>
      <ContentText>{contentText}</ContentText>
      <StampListContainer>
        <StampCard savedMoney={"2,000원"} color={"#9BBE0F"} />
        <StampCard savedMoney={"2,000원"} color={"#9BBE0F"} />
        <StampCard savedMoney={"2,000원"} color={"#9BBE0F"} />
        <StampCard savedMoney={"2,000원"} color={"#9BBE0F"} />
        <StampCard savedMoney={"2,000원"} color={"#9BBE0F"} />
        <StampCard savedMoney={"2,000원"} color={"#9BBE0F"} />
      </StampListContainer>
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

const ContentText = styled.p`
  margin: 8px 0px;
  font-size: 12px;
  font-weight: 600;
  white-space: pre-line;
`;

const StampListContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export default StampContainer;
