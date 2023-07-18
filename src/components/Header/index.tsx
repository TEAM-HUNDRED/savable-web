import { HEADER_CONFIG } from "config";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

function Header() {
  const location = useLocation();

  const basicPath = "/" + location.pathname.split("/")[1];
  const title = HEADER_CONFIG[basicPath].name;

  return (
    <Container>
      <TitleText>{title}</TitleText>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e8e8e8;
  background-color: #fff;
`;

const TitleText = styled.p`
  max-width: 725px;
  font-size: 16px;
  margin: 0px;
`;

export default Header;
