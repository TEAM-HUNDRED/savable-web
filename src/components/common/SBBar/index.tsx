import { Icons } from "assets/icons";
import styled from "styled-components";

type PropsType = {
  title: string;
  icon: React.FunctionComponent;
  onClickBar: () => void;
};

function SBBar({ title, icon, onClickBar }: PropsType) {
  const BarIcon = icon;
  return (
    <Container onClick={onClickBar}>
      <TitleContainer>
        <BarIcon />
        <TitleText>{title}</TitleText>
      </TitleContainer>
      <RightArrowIcon />
    </Container>
  );
}

const Container = styled.button`
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
`;

const RightArrowIcon = styled(Icons.SvgElement.rightArrowIcon)``;

export default SBBar;
