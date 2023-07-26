import { Icons } from "assets/icons";
import styled from "styled-components";

type PropsType = {
  savedMoney: number;
  color: string;
};

function StampCard({ savedMoney, color }: PropsType) {
  const CoinIcons = Icons.SvgElement.coinIcon;
  const contentText = `${savedMoney.toLocaleString()}원\n 절약 성공!`;

  return (
    <Container>
      <CoinIcons fill={color} />
      <ContentText>{contentText}</ContentText>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 60px;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 6px 0px;
  margin: 4px 4px 0px 0px;
`;

const ContentText = styled.p`
  font-size: 6px;
  font-weight: 700;
  color: #757575;
  margin: 0px;
  margin-top: 6px;
  white-space: pre-line;
  text-align: center;
`;

export default StampCard;
