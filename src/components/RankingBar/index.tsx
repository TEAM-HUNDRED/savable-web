import styled from "styled-components";

type TypeProps = {
  rank: number;
  userName: string;
  highlighted: boolean;
};

function RankingBar({ rank, userName, highlighted }: TypeProps) {
  return (
    <Container highlighted={highlighted}>
      <Text>{`${rank}위`}</Text>
      <Divider />
      <Text>{`${userName} 세이버님`}</Text>
    </Container>
  );
}

const Container = styled.div<{ highlighted: boolean }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid #e8e8e8;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 10px;
  align-items: center;
  background-color: ${(props) => (props.highlighted ? "#E9F9AC" : "#fff")};
  box-sizing: border-box;
`;

const Divider = styled.div`
  height: 14px;
  width: 1px;
  background-color: #cfcfcf;
  margin: 0px 10px;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 0px;
`;

export default RankingBar;
