import * as amplitude from "@amplitude/analytics-browser";

const initialize = (kakaoId: string) => {
  amplitude.init(
    process.env.REACT_APP_AMPLITUDE_KEY ?? "",
    `kakaoId-${kakaoId}`
  );
};

type LogClickPropsType = {
  buttonName: string;
  routeName: string;
};

const logClick = ({ buttonName, routeName }: LogClickPropsType) => {
  amplitude.logEvent("Click", {
    button_name: buttonName,
    route_name: routeName,
  });
};

const logView = (routeName: string) => {
  amplitude.logEvent("View", {
    route_name: routeName,
  });
};

const Amplitude = { initialize, logClick, logView };

export { Amplitude };
