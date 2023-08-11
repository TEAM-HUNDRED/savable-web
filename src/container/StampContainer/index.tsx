import styled from "styled-components";

import StampCard from "components/StampCard";

type PropsType = {
  cnt: number;
  title: string;
};

function StampContainer({ cnt, title }: PropsType) {
  const contentText = `${title} 총 ${cnt}회 인증하셨어요!\n절약해서 스탬프 쾅! 쾅! 받아가요`;

  const stampArray = [
    {
      date: "08.08",
      cnt: "1회",
    },
    {
      date: "08.08",
      cnt: "1회",
    },
    {
      date: "08.08",
      cnt: "1회",
    },
    {
      date: "08.08",
      cnt: "1회",
    },
    {
      date: "08.08",
      cnt: "1회",
    },
    {
      date: "08.08",
      cnt: "1회",
    },
    {
      date: "08.08",
      cnt: "1회",
    },
    {
      date: "08.08",
      cnt: "1회",
    },
    {
      date: "08.08",
      cnt: "1회",
    },
  ];

  const numberOfColumns = Math.floor((window.innerWidth - 50) / 51);

  const number = Math.ceil(stampArray.length / numberOfColumns);
  const rowArray = new Array(number).fill(undefined).map((val, idx) => idx);

  return (
    <Container>
      <TitleText>{`인증 스탬프`}</TitleText>
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
                  date={item.date}
                  cnt={item.cnt}
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
