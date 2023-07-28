import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

import { UserChallengePropsType } from "types/view";
import { Icons } from "assets/icons";

import StampContainer from "container/StampContainer";
import BottomNavigationBar from "components/BottomNavigationBar";
import { Images } from "assets/images";

function ChallengeDetailPage() {
  const location = useLocation();

  const { title, savedMoney, reward, username, cnt }: UserChallengePropsType =
    location.state.props;

  const challengeStatus = [
    {
      title: "절약 금액",
      content: `${savedMoney.toLocaleString()}원`,
      icons: Images.piggyBankImage,
    },
    {
      title: "세이버블 포인트",
      content: `${reward.toLocaleString()}원`,
      icons: Images.money,
    },
  ];

  const titleText = `${title}로 \n ${savedMoney.toLocaleString()}원 아끼고 ${reward.toLocaleString()}원 벌었어요`;
  const LeftArrowIcon = Icons.SvgElement.leftArrowIcon;

  return (
    <Container>
      <HeaderContainer>
        <IconContainer to="/challenge">
          <LeftArrowIcon />
        </IconContainer>
        <HeaderText>{title}</HeaderText>
        <div />
      </HeaderContainer>
      <ContentContainer>
        <TitleText>{titleText}</TitleText>
        <ChallengeContainer>
          {challengeStatus.map((item, idx) => {
            return (
              <StatusCard key={`${item.content} - ${idx}`}>
                <ImageContainer>
                  <Image src={item.icons} />
                </ImageContainer>
                <TextContainer>
                  <IndexText>{item.title}</IndexText>
                  <ValueText>{`${item.content}`}</ValueText>
                </TextContainer>
              </StatusCard>
            );
          })}
        </ChallengeContainer>
        <StampContainer cnt={cnt} title={title} />
      </ContentContainer>
      <BottomNavigationBar />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0;
  box-sizing: border-box;
  ::-webkit-scrollbar {
    display: none;
  }
`;

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

const HeaderText = styled.p`
  max-width: 725px;
  font-size: 16px;
  margin: 0px;
`;

const ContentContainer = styled.div`
  flex: 1;
  width: 100%;
  padding: 28px 24px;
  box-sizing: border-box;
`;

const ChallengeContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 36px;
  width: 100%;
  box-sizing: border-box;
`;

const StatusCard = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 8px;
  width: 136px;
  height: 48px;
  align-items: center;
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: #e9f9ac;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 24px;
  height: 24px;
`;

const TextContainer = styled.div`
  margin-left: 6px;
`;

const IndexText = styled.p`
  margin: 0px;
  font-size: 12px;
  font-weight: 600;
  white-space: pre-line;
`;

const ValueText = styled.p`
  margin: 0px;
  font-size: 16px;
  font-weight: 700;
  white-space: pre-line;
`;

const TitleText = styled.p`
  margin: 0px;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 700;
  white-space: pre-line;
`;

export default ChallengeDetailPage;
