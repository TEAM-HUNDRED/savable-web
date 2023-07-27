import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { BOTTOM_NAVIGATOR_CONFIG } from "config";
import { KakaoIdContext } from "lib/context/KakaoIdContext";

function BottomNavigationBar() {
  const location = useLocation();
  const { kakaoId: currentKakaoId } = useContext(KakaoIdContext);

  const basicPath = "/" + location.pathname.split("/")[1];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    BOTTOM_NAVIGATOR_CONFIG.map((item, idx) => {
      if (basicPath === item.url) setCurrentIndex(idx);

      return undefined;
    });
  }, [basicPath]);

  return (
    <Container>
      <NavigationContainer>
        {BOTTOM_NAVIGATOR_CONFIG.map((item, idx) => {
          const color = currentIndex === idx ? "#9BBE0F" : `black`;

          return (
            <NavigationButton to={`${item.url}?kakaoId=${currentKakaoId}`}>
              <item.IconElement width={24} height={24} fill={color} />
              <ButtonIndexText style={{ color: color }}>
                {item.name}
              </ButtonIndexText>
            </NavigationButton>
          );
        })}
      </NavigationContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-top: 1px solid #e8e8e8;
  over-flow: hidden;
`;

const NavigationContainer = styled.div`
  max-width: 768px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NavigationButton = styled(Link)`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: none;
  text-decoration: none;
`;

const ButtonIndexText = styled.p`
  font-size: 10px;
  font-weight: bold;
  margin: 2px;
`;

export default BottomNavigationBar;
