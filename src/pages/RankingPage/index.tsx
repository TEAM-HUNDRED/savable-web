import styled from "styled-components";

import RankingHeader from "components/RankingHeader";
import RankingBar from "components/RankingBar";

function RankingPage() {
  const userName = "고영준";

  const dummyRankList = [
    { userName: "asdf" },
    { userName: "asdf" },
    { userName: "asdf" },
    { userName: "asdf" },
    { userName: "고영준" },
    { userName: "asdf" },
    { userName: "asdf" },
    { userName: "asdf" },
    { userName: "asdf" },
    { userName: "asdf" },
    { userName: "asdf" },
    { userName: "asdf" },
    { userName: "asdf" },
    { userName: "asdf" },
    { userName: "asdf" },
    { userName: "asdf" },
    { userName: "asdf" },
    { userName: "asdf" },
    { userName: "asdf" },
    { userName: "asdf" },
  ];

  return (
    <Container>
      <TitleText>{`세이버 ${userName}의 이번 주 랭킹`}</TitleText>
      <RankingHeader />
      <Divider />
      {dummyRankList.map((item, idx) => {
        return (
          <RankingBar
            userName={item.userName}
            rank={idx + 1}
            highlighted={item.userName === userName}
          />
        );
      })}
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
  margin-bottom: 16px;
`;

export default RankingPage;
