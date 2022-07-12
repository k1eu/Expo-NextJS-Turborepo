import * as React from "react";

import ChevronDown from "./Icons/ChevronDown";
import ChevronLeft from "./Icons/ChevronLeft";
import ChevronRight from "./Icons/ChevronRight";

import { SvgName, SvgProps } from "./types";

type Props = {
  name: SvgName;
} & SvgProps;

const Svg: React.FC<Props> = ({ name, ...props }) => {
  switch (name) {
    case "chevron-down":
      return <ChevronDown {...props} />;
    case "chevron-left":
      return <ChevronLeft {...props} />;
    case "chevron-right":
      return <ChevronRight {...props} />;
  }
};

export default Svg;
