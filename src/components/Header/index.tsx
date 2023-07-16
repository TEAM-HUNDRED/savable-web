import styled from "styled-components";

type Props = {
  title: string;
};

function Header({ title }: Props) {
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
  weight: bold;
`;

export default Header;
