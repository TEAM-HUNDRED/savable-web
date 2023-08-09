import { Icons } from "assets/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

function OrderHistoryPage() {
  const LeftArrowIcon = Icons.SvgElement.leftArrowIcon;

  return (
    <HeaderContainer>
      <IconContainer to="/savable_shop">
        <LeftArrowIcon />
      </IconContainer>
      <HeaderText>{"기프티콘 구매하기"}</HeaderText>
      <RightIconContainer />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  padding: 0px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e8e8e8;
  background-color: #fff;
  box-sizing: border-box;
`;

const IconContainer = styled(Link)`
  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;

const RightIconContainer = styled.div`
  width: 24px;
  height: 24px;
`;

const HeaderText = styled.p`
  max-width: 725px;
  font-size: 16px;
  margin: 0px;
`;

export default OrderHistoryPage;
