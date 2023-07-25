import BottomNavigationBar from "components/BottomNavigationBar";
import Header from "components/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

function LayoutContainer() {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <BottomNavigationBar />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0;
  box-sizing: border-box;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  position: relative;
  overflow: overlay;
  box-sizing: border-box;
  max-width: 768px;
  width: 100%;
  height: 100%;
  padding: 28px 0px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default LayoutContainer;
