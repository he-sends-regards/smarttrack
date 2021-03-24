import React from "react";

import AlertsActiveSvg from "./img/alerts-active.svg";
import AlertsSvg from "./img/menu-icons/alerts.svg";
import DashboardActiveSvg from "./img/menu-icons/dashboard-active.svg";
import DashboardSvg from "./img/menu-icons/dashboard.svg";
import SequenceActiveSvg from "./img/menu-icons/sequence-active.svg";
import SequenceSvg from "./img/menu-icons/sequence.svg";
import SignOutSvg from "./img/menu-icons/sign-out.svg";
import StuffActiveSvg from "./img/menu-icons/stuff-active.svg";
import StuffSvg from "./img/menu-icons/stuff.svg";

export default {
  AlertsActiveSvg: () => <AlertsActiveSvg />,
  AlertsSvg: () => <AlertsSvg />,
  DashboardActiveSvg: () => <DashboardActiveSvg />,
  DashboardSvg: () => <DashboardSvg />,
  SequenceActiveSvg: () => <SequenceActiveSvg />,
  SequenceSvg: () => <SequenceSvg />,
  SignOutSvg: () => <SignOutSvg />,
  StuffActiveSvg: () => <StuffActiveSvg />,
  StuffSvg: () => <StuffSvg />,
};
