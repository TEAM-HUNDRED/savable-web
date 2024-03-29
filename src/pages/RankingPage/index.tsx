import { useLocation } from "react-router-dom";
import { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";

import Api from "lib/api/Api";
import { KakaoIdContext } from "lib/context/KakaoIdContext";
import { Amplitude } from "lib/hooks";

import { RankingPropsType, UserRankingPropsType } from "types/view";

import RankingHeader from "components/RankingHeader";
import RankingBar from "components/RankingBar";

function RankingPage() {
  const location = useLocation();
  const paramKakaoId = new URLSearchParams(location.search).get(
    "kakaoId"
  ) as string;

  const { updateKakaoId, kakaoId: currentKakaoId } = useContext(KakaoIdContext);

  const kakaoId = paramKakaoId ?? currentKakaoId;

  const [userRankInfo, setUserRankInfo] = useState<UserRankingPropsType>();
  const [rankingList, setRankingList] = useState<RankingPropsType[]>();

  const getRankingData = useCallback(async () => {
    try {
      const response = await Api.shared.getRankingList(kakaoId);

      setUserRankInfo(response.data.privateRankingInfo);
      setRankingList(response.data.rankingListInfo);
    } catch (error) {
      console.log(error);
    }
  }, [kakaoId]);

  useEffect(() => {
    if (!currentKakaoId) updateKakaoId(paramKakaoId);

    Amplitude.logView("ranking");
    getRankingData();
  }, [currentKakaoId, paramKakaoId, getRankingData, updateKakaoId]);

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
