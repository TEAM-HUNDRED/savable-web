import { Icons } from "assets/icons";
import styled from "styled-components";

type PropsType = {
  date: string;
  cnt: string;
};

function StampCard({ date, cnt }: PropsType) {
  return (
    <Container>
      <ContentText>{date}</ContentText>
      <CoinIcon width={28} height={28} fill={"#9BBE0F"} />
      <ContentText>{cnt}</ContentText>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 6px 8px;
  margin: 4px 4px 0px 0px;
`;

const ContentText = styled.p`
  font-size: 12px;
  font-weight: 800;
  color: #757575;
  margin: 0px;
  margin-top: 6px;
  white-space: pre-line;
  text-align: center;
`;

const CoinIcon = styled(Icons.SvgElement.coinIcon)`
  margin: 6px 0px;
`;

export default StampCard;
