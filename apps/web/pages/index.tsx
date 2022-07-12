import { UISvg } from "ui";

import Buttons from "../components/Buttons";
import Layout from "../components/Layout";

const Web = () => {
  return (
    <div>
      <h1>Web</h1>
      <Buttons />
      <UISvg name="chevron-down" width={32} height={32} />
    </div>
  );
};

Web.layout = Layout;

export default Web;
