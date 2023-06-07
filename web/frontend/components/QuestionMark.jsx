import { Icon } from "@shopify/polaris";
import { QuestionMarkMajor } from "@shopify/polaris-icons";

export function QuestionMark() {
  return (
    <button className="pt-[5px] w-fit h-fit [&_svg]:fill-[#67BAA5] [&_svg]:w-[16px] [&_svg]:h-[16px] [&_svg]:fill-svg [&>span]:h-auto">
      <Icon source={QuestionMarkMajor} />
    </button>
  );
}
