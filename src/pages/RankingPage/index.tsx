import { useEffect, useState } from "react";
import styled from "styled-components";

import Api from "lib/api/Api";

import RankingHeader from "components/RankingHeader";
import RankingBar from "components/RankingBar";
import { RankingPropsType, UserRankingPropsType } from "types/view";

const kakaoId =
  "ee3cdb725f00f08b669a230710dc0360d9697c4fa88aecae44b37508e6d656ea50";

function RankingPage() {
  const [userRankInfo, setUserRankInfo] = useState<UserRankingPropsType>();
  const [rankingList, setRankingList] = useState<RankingPropsType[]>();

  const getRankingData = async () => {
    try {
      const response = await Api.shared.getRankingList(kakaoId);

      setUserRankInfo(response.data.privateRankingInfo);
      setRankingList(response.data.rankingListInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRankingData();
  }, []);

  if (!userRankInfo || !rankingList) return <></>;

  return (
    <Container>
      <RankingHeader {...userRankInfo} />
      <Divider />
      <RankingContainer>
        {rankingList.map((item, idx) => {
          return (
            <RankingBar
              userName={item.username}
              rank={item.certRank}
              highlighted={item.username === userRankInfo.username}
            />
          );
        })}
      </RankingContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #e3e3e3;
  margin-bottom: 16px;
`;

const RankingContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0px 24px;
`;

export default RankingPage;
