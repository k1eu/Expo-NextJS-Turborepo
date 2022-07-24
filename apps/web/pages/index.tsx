import AnimatedToggle from "../components/AnimatedToggle";
import { UICard, UISvg } from "ui";

export default function Web() {
  return (
    <div>
      <UISvg name="chevron-down" width={32} height={32} />
      <UICard title="Ui wrapper in NextJS ">
        <AnimatedToggle />
      </UICard>
    </div>
  );
}
