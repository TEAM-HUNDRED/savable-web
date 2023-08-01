import { useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";

import Api from "lib/api/Api";
import ToastProvider from "lib/context/ToastContext";
import KakaoIdProvider from "lib/context/KakaoIdContext";
import { Amplitude } from "lib/hooks";

import ChallengePage from "pages/ChallengePage";
import ChallengeDetailPage from "pages/ChallengeDetailPage";
import RankingPage from "pages/RankingPage";
import SavableShopPage from "pages/SavableShopPage";
import SavableShopOrderPage from "pages/SavableShopOrderPage";

import LayoutContainer from "container/LayoutContainer";

Api.shared.load();

function App() {
  const location = useLocation();
  const paramKakaoId = new URLSearchParams(location.search).get(
    "kakaoId"
  ) as string;

  useEffect(() => {
    Amplitude.initialize(paramKakaoId);
  }, []);

  return (
    <KakaoIdProvider>
      <ToastProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LayoutContainer />}>
              <Route path="savable_shop" element={<SavableShopPage />} />
              <Route path="ranking" element={<RankingPage />} />
              <Route path="challenge" element={<ChallengePage />} />
            </Route>
            <Route path="/challenge/detail" element={<ChallengeDetailPage />} />
            <Route
              path="/savable_shop/order"
              element={<SavableShopOrderPage />}
            />
          </Routes>
        </Router>
      </ToastProvider>
    </KakaoIdProvider>
  );
}

export default App;
