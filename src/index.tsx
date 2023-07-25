import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import ChallengePage from "pages/ChallengePage";
import ChallengeDetailPage from "pages/ChallengeDetailPage";
import RankingPage from "pages/RankingPage";
import SavableShopPage from "pages/SavableShopPage";

import LayoutContainer from "container/LayoutContainer";
import axios from "axios";
import Api from "lib/api/Api";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
Api.shared.load();

axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<LayoutContainer />}>
        <Route path="savable-shop" element={<SavableShopPage />} />
        <Route path="ranking" element={<RankingPage />} />
        <Route path="challenge" element={<ChallengePage />} />
        <Route path="challenge/detail" element={<ChallengeDetailPage />} />
      </Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
