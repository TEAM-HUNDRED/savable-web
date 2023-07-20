import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import HomePage from "pages/HomePage";
import ChallengePage from "pages/ChallengePage";
import ChallengeDetailPage from "pages/ChallengeDetailPage";
import RankingPage from "pages/RankingPage";

import LayoutContainer from "container/LayoutContainer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LayoutContainer />}>
          <Route path="" element={<HomePage />} />
          <Route path="ranking" element={<RankingPage />} />
          <Route path="challenge" element={<ChallengePage />} />
          <Route path="challenge/detail" element={<ChallengeDetailPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
