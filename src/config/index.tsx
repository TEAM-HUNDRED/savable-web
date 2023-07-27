import { Icons } from "assets/icons";

export const BOTTOM_NAVIGATOR_CONFIG = [
  { name: "랭킹", IconElement: Icons.SvgElement.rankingIcon, url: "/ranking" },
  {
    name: "세이버블 샵",
    IconElement: Icons.SvgElement.giftIcon,
    url: "/savable_shop",
  },
  {
    name: "챌린지",
    IconElement: Icons.SvgElement.challengeIcon,
    url: "/challenge",
  },
];

type HeaderPathLinkProps = {
  name: string;
};

type HeaderConfigType = {
  [k in string]: HeaderPathLinkProps;
};

export const HEADER_CONFIG: HeaderConfigType = {
  "/savable_shop": { name: "세이버블 샵" },
  "/ranking": { name: "랭킹 현황" },
  "/challenge": { name: "챌린지 현황" },
};

type ChatBotLinkType = {
  chat: string;
  channel: string;
};

export const CHATBOT_LINK_LIST: ChatBotLinkType = {
  chat: "http://pf.kakao.com/_gJuyxj/chat",
  channel: "http://pf.kakao.com/_gJuyxj",
};
