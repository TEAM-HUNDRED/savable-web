import styled from "styled-components";

import StampCard from "components/StampCard";
import { UserChallengeCertList } from "types/view";

type PropsType = {
  title: string;
  certList: UserChallengeCertList[];
};

function StampContainer({ title, certList }: PropsType) {
  const contentText = `${title} 총 ${certList.length}회 인증하셨어요!\n절약해서 스탬프 쾅! 쾅! 받아가요`;

  const numberOfColumns = Math.floor((window.innerWidth - 50) / 51);

  const number = Math.ceil(certList.length / numberOfColumns);
  const rowArray = new Array(number).fill(undefined).map((val, idx) => idx);

  const calculateDate = (date: string) => {
    const currentDate = new Date(date);

    const getMonthString =
      currentDate.getMonth() > 9
        ? `${currentDate.getMonth() + 1}`
        : `0${currentDate.getMonth() + 1}`;

    const getDateString =
      currentDate.getDate() > 10
        ? `${currentDate.getDate()}`
        : `0${currentDate.getDate()}`;

    return `${getMonthString}.${getDateString}`;
  };

  return (
    <Container>
      <TitleText>{`주간 인증 스탬프`}</TitleText>
      <ContentText>{contentText}</ContentText>
      {rowArray.map((item, idx) => {
        const startOfSlice = idx * numberOfColumns;
        const endOfSlice = (idx + 1) * numberOfColumns;

        return (
          <StampListContainer key={`${item} - ${idx}`}>
            {certList.slice(startOfSlice, endOfSlice).map((item, idx) => {
              return (
                <StampCard
                  key={`${item} - ${idx}`}
                  date={calculateDate(item.date)}
                  cnt={`${item.count}회`}
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
