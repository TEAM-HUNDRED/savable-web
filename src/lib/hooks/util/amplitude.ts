import * as amplitude from "@amplitude/analytics-browser";

const initialize = (kakaoId: string) => {
  amplitude.init(
    process.env.REACT_APP_AMPLITUDE_KEY ?? "",
    `kakaoId-${kakaoId}`
  );
};

type LogClickPropsType = {
  buttonName: string;
  currentRouteName: string;
};

const logClick = ({ buttonName, currentRouteName }: LogClickPropsType) => {
  amplitude.logEvent("Click", {
    button_name: buttonName,
    current_route_name: currentRouteName,
  });
};

const logView = (routeName: string) => {
  amplitude.logEvent("View", {
    route_name: routeName,
  });
};

const Amplitude = { initialize, logClick, logView };

export { Amplitude };
