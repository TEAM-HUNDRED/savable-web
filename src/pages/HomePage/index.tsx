import styled from "styled-components";

function HomePage() {
  return (
    <div>
      <ButtonIndexText>홈페이지 입니다</ButtonIndexText>
    </div>
  );
}

const ButtonIndexText = styled.p`
  font-size: 40px;
  weight: bold;
`;

export default HomePage;
