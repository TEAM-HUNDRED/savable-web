import { Icons } from "assets/icons";

export const BOTTOM_NAVIGATOR_CONFIG = [
  { name: "랭킹", IconElement: Icons.SvgElement.rankingIcon, url: "/ranking" },
  { name: "홈", IconElement: Icons.SvgElement.homeIcon, url: "/" },
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
  "/": { name: "절약 현황" },
  "/ranking": { name: "랭킹 현황" },
  "/challenge": { name: "챌린지 현황" },
};
