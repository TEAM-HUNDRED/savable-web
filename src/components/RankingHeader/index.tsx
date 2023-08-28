import { Images } from "assets/images";
import styled from "styled-components";

import { UserRankingPropsType } from "types/view";

function RankingHeader({
  certRank,
  certNum,
  gap,
  savedMoney,
  username,
}: UserRankingPropsType) {
  const rankingData = [
    { title: "절약 금액", content: `${savedMoney.toLocaleString()}원` },
    { title: "인증 횟수", content: `${certNum}회` },
    { title: "이번 주 랭킹", content: `${certRank}위` },
  ];

  const nextRank = certRank - 1;

  const descriptionText = `${gap.toLocaleString()}원 절약하면 ${nextRank}등이에요!\nSavable과 함께 조금 더 힘내봐요☺️`;
  const BestDescriptionText = `와우! ${certRank}등이에요! 아직까지 이번주 MVP에요!\n1등 유지까지 Savable과 함께 조금 더 힘내봐요☺️`;

  return (
    <Container>
      <TitleText>{`세이버 ${username}님의 이번 주 랭킹`}</TitleText>
      <ContentContainer>
        <MedalContainer>
          <RankingText>{certRank}</RankingText>
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
        <DescriptionText>
          {nextRank ? descriptionText : BestDescriptionText}
        </DescriptionText>
      </DescriptionContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  box-sizing: border-box;
  padding: 0px 24px;
`;

const TitleText = styled.p`
  margin: 0px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
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
