import styled from "styled-components";

import StampCard from "components/StampCard";

type PropsType = {
  cnt: number;
};

function StampContainer({ cnt }: PropsType) {
  const contentText = `커피값 절약 챌린지 총 ${cnt}회 인증하셨어요!\n절약해서 스탬프 쾅! 쾅! 받아가요`;
  const numberOfGold = Math.floor(cnt / 50);
  const numberOfSilver = Math.floor((cnt % 50) / 10);
  const numberOfGreen = cnt % 10;
  const totalNumberOfStamp: number =
    numberOfGold + numberOfSilver + numberOfGreen;

  const stampArray: { color: string; savedMoney: number }[] = [];

  let index = 0;
  let savedMoney = 0;

  for (index = 0; index < totalNumberOfStamp; index++) {
    if (index < numberOfGold) {
      savedMoney += 50 * 1500;
      stampArray.push({ color: "#ffd15b", savedMoney: savedMoney });
    } else if (index < numberOfGold + numberOfSilver) {
      savedMoney += 10 * 1500;
      stampArray.push({ color: "#CFCFCF", savedMoney: savedMoney });
    } else {
      savedMoney += 1500;
      stampArray.push({ color: "#9BBE0F", savedMoney: savedMoney });
    }
  }

  const numberOfColumns = Math.floor((window.innerWidth - 50) / 51);

  const number = Math.ceil(stampArray.length / numberOfColumns);
  const rowArray = new Array(number).fill(undefined).map((val, idx) => idx);

  return (
    <Container>
      <TitleText>{`주간 인증 스탬프`}</TitleText>
      <ContentText>{contentText}</ContentText>
      {rowArray.map((item, idx) => {
        const startOfSlice = idx * numberOfColumns;
        const endOfSlice = (idx + 1) * numberOfColumns;
        return (
          <StampListContainer key={`${item} - ${idx}`}>
            {stampArray.slice(startOfSlice, endOfSlice).map((item, idx) => {
              return (
                <StampCard
                  key={`${item} - ${idx}`}
                  savedMoney={item.savedMoney}
                  color={item.color}
                />
              );
            })}
          </StampListContainer>
        );
      })}
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
