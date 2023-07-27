import React, { useState, ReactNode } from "react";

interface IKakaoIdContext {
  updateKakaoId: (id: string) => void;
  kakaoId: string;
}

export const KakaoIdContext = React.createContext<IKakaoIdContext>({
  updateKakaoId: (id: string) => {},
  kakaoId: "",
});

const KakaoIdProvider = ({ children }: { children: ReactNode }) => {
  const [kakaoId, setKakaoId] = useState<string>("");

  const updateKakaoId = (id: string) => {
    setKakaoId(id);
  };

  return (
    <KakaoIdContext.Provider value={{ updateKakaoId, kakaoId }}>
      {children}
    </KakaoIdContext.Provider>
  );
};

export default KakaoIdProvider;
