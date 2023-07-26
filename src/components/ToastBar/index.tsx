import styled from "styled-components";

type PropsType = {
  description: string;
};

function ToastBar({ description }: PropsType) {
  return (
    <Container>
      <Toast>
        <ToastText>{description}</ToastText>
      </Toast>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: absolute;
  bottom: 70px;
  width: 100%;
  height: 30px;
  align-items: center;
  justify-content: center;
`;

const Toast = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  padding: 8px 16px;
  background-color: #e3e3e3;
  border-radius: 15px;
`;

const ToastText = styled.p`
  margin: 0px;
  font-size: 16px;
  font-weight: 700;
  color: #757575;
`;

export default ToastBar;
