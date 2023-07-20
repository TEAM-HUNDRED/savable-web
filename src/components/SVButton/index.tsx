import styled from "styled-components";

type SVButtonProps = {
  buttonText: string;
  onClickButton: () => void;
  color: string;
};

function SVButton({ buttonText, onClickButton, color }: SVButtonProps) {
  return (
    <Container onClick={onClickButton} backgroundColor={color}>
      <ButtonText>{buttonText}</ButtonText>
    </Container>
  );
}

const Container = styled.button<{ backgroundColor: string }>`
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.backgroundColor};
`;

const ButtonText = styled.p`
  margin: 0px;
  font-size: 10px;
  font-weight: 700;
`;

export default SVButton;
