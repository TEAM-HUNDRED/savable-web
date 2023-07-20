import { Icons } from "assets/icons";
import styled from "styled-components";

type PropsType = {
  onClickButton: () => void;
};

function AddChallengeButton({ onClickButton }: PropsType) {
  const PlusIcon = Icons.SvgElement.plusIcon;

  return (
    <Container onClick={onClickButton}>
      <PlusIcon />
    </Container>
  );
}

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid #bdbdbd;
  padding: 0px;
  background-color: #fff;
`;

export default AddChallengeButton;
