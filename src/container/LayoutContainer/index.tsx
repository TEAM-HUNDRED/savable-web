import Header from "components/Header";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

function LayoutContainer({ children }: Props) {
  return (
    <Container>
      <Header title={"챌린지 현황"} />
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  position: relative;
  flex: 1;
  overflow: overlay;
  box-sizing: border-box;
  max-width: 768px;
  width: 100%;
  height: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default LayoutContainer;
