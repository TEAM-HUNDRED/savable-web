import { Icons } from "assets/icons";
import { Amplitude } from "lib/hooks";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

type PropsType = {
  title: string;
  icon: React.FunctionComponent;
  pathName: string;
};

function SBBar({ title, icon, pathName }: PropsType) {
  const BarIcon = icon;
  const location = useLocation();
  const basicPath = "/" + location.pathname.split("/")[1];

  return (
    <Container
      to={pathName}
      onClick={() =>
        Amplitude.logClick({
          buttonName: `navigate_to_${pathName}_bar`,
          currentRouteName: basicPath,
        })
      }
    >
      <TitleContainer>
        <BarIcon />
        <TitleText>{title}</TitleText>
      </TitleContainer>
      <RightArrowIcon />
    </Container>
  );
}

const Container = styled(Link)`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 4px 0px;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background-color: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  box-sizing: border-box;
  text-decoration: none;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.p`
  margin: 0px;
  margin-left: 8px;
  font-size: 12px;
  color: black;
`;

const RightArrowIcon = styled(Icons.SvgElement.rightArrowIcon)``;

export default SBBar;
