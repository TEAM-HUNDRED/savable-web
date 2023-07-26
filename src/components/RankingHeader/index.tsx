import { Images } from "assets/images";
import styled from "styled-components";

function RankingHeader() {
  const rankingData = [
    { title: "절약 금액", content: "50,000원" },
    { title: "인증 횟수", content: "6회" },
    { title: "이번 주 랭킹", content: "5위" },
  ];

  const money = "10,000원";
  const numberOfRank = "5";
  const descriptionText = `${money}만 절약하면 ${numberOfRank}등이에요!\nSavable과 함께 조금 더 힘내봐요☺️`;

  return (
    <Container>
      <ContentContainer>
        <MedalContainer>
          <RankingText>{numberOfRank}</RankingText>
          <MedalImage src={Images.medal} />
        </MedalContainer>
        {rankingData.map((item) => {
          return (
            <RankingContainer>
              <RankingIndexText>{item.title}</RankingIndexText>
              <RankingValueText>{item.content}</RankingValueText>
            </RankingContainer>
          );
        })}
      </ContentContainer>
      <DescriptionContainer>
        <RedMedalImage src={Images.redMedal} />
        <DescriptionText>{descriptionText}</DescriptionText>
      </DescriptionContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  box-sizing: border-box;
`;

const MedalContainer = styled.div`
  width: 52px;
  height: 52px;
  position: relative;
`;

const MedalImage = styled.img`
  width: 52px;
  height: 52px;
`;

const RankingText = styled.p`
  position: absolute;
  bottom: 0px;
  margin: 0px;
  font-size: 16px;
  font-weight: 700;
  z-index: 5;
  left: 50%;
  transform: translate(-50%, -15%);
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const RankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RankingIndexText = styled.p`
  margin: 0px;
  margin-top: 4px;
  font-size: 12px;
  font-weight: 700;
`;

const RankingValueText = styled.p`
  margin: 0px;
  font-size: 20px;
  font-weight: 700;
  color: #9bbe0f;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: #e8e8e8;
  border-radius: 16px;
  margin: 16px 0px;
  box-sizing: border-box;
`;

const RedMedalImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const DescriptionText = styled.p`
  margin: 0px;
  font-size: 12px;
  font-weight: 700;
  color: #757575;
  white-space: pre-line;
`;

export default RankingHeader;
