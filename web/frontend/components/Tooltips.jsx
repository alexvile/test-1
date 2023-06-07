import { Image, Tooltip } from "@shopify/polaris";
import { QuestionMark } from "./QuestionMark";
import { TooltipWrapper } from "./TooltipWrapper";

//corner radius (px)
import radius1 from "../assets/radius-1.png"; //x3
import radius2 from "../assets/radius-2.png"; //x3
import borderNone from "../assets/border-none.png"; //x3
import borderFull from "../assets/border-full.png"; //x3
import color1first from "../assets/color-1-1.png"; //x3
import colors1second from "../assets/color-1-2.png"; //x3
import colors2 from "../assets/color-2.png"; //x3
import interactive from "../assets/interactive.png";
import critical1 from "../assets/critical1.png"; //x3
import critical2 from "../assets/critical2.png"; //x3
import canvas1 from "../assets/canvas-1.png"; //x3
import canvas2 from "../assets/canvas-2.png"; //x3
import mtborder from "../assets/mt-border.png"; //x3

//alignment - all in x3
import alignment1 from "../assets/alignment-1.png";
import alignment2 from "../assets/alignment-2.png";
import alignment3 from "../assets/alignment-3.png";
import alignment4 from "../assets/alignment-4.png";

//position - all in x3
import position1 from "../assets/position-1.png";
import position2 from "../assets/position-2.png";
import position3 from "../assets/position-3.png";

//border
import border1 from "../assets/border-1.png";
import border2 from "../assets/border-2.png";

//select border - all in x3
import selectBorder1 from "../assets/select-border-1.png";
import selectBorder2 from "../assets/select-border-2.png";

//label position - all in x3
import labelPosition1 from "../assets/label-position-1.png";
import labelPosition2 from "../assets/label-position-2.png";

//Color btn - in x3
import warning from "../assets/warning.png";

export function Tooltips({ tooltip }) {
  switch (tooltip) {
    case "corner-radius":
      return (
        <Tooltip content={<CornerRadius />}>
          <QuestionMark />
        </Tooltip>
      );
    case "alignment":
      return (
        <Tooltip content={<Alignment />}>
          <QuestionMark />
        </Tooltip>
      );
    case "position":
      return (
        <Tooltip content={<Position />}>
          <QuestionMark />
        </Tooltip>
      );
    case "border":
      return (
        <Tooltip content={<Border />}>
          <QuestionMark />
        </Tooltip>
      );
    case "select-border":
      return (
        <Tooltip content={<SelectBorder />}>
          <QuestionMark />
        </Tooltip>
      );
    case "label-position":
      return (
        <Tooltip content={<LabelPosition />}>
          <QuestionMark />
        </Tooltip>
      );
    case "color":
      return (
        <Tooltip content={<Color />}>
          <QuestionMark />
        </Tooltip>
      );
    case "color-btn":
      return (
        <Tooltip content={<ColorBtn />}>
          <QuestionMark />
        </Tooltip>
      );
    case "text-border":
      return (
        <Tooltip content={<TextBorder />}>
          <QuestionMark />
        </Tooltip>
      );
    case "color1":
      return (
        <Tooltip content={<Color1 />}>
          <QuestionMark />
        </Tooltip>
      );
    case "color2":
      return (
        <Tooltip content={<Color2 />}>
          <QuestionMark />
        </Tooltip>
      );
    case "interactive":
      return (
        <Tooltip content={<Interactive />}>
          <QuestionMark />
        </Tooltip>
      );
    case "critical":
      return (
        <Tooltip content={<Critical />}>
          <QuestionMark />
        </Tooltip>
      );
    case "canvas":
      return (
        <Tooltip content={<Canvas />}>
          <QuestionMark />
        </Tooltip>
      );
    case "text-size":
      return (
        <Tooltip content={<TextSize />}>
          <QuestionMark />
        </Tooltip>
      );
    case "mt-border":
      return (
        <Tooltip content={<MTBorder />}>
          <QuestionMark />
        </Tooltip>
      );
    case "header-banner":
      return (
        <Tooltip content={<HeaderBanner />}>
          <QuestionMark />
        </Tooltip>
      );

    default:
      return null;
  }
}

function CornerRadius() {
  return (
    <TooltipWrapper>
      <div>
        <h4 className="tooltip-title ">corner radius (px)</h4>
        <p className="pb-3 tooltip-desc">
          This is the setting for the basic corner radius size.
        </p>
      </div>

      <div>
        <p className="pb-1 !font-semibold tooltip-desc">For example:</p>
        <p className="pb-3 ">
          You set the sizes for base, large, and small corner radius in global
          settings.
        </p>
        <Image className="block w-full pb-5 " source={radius1} />
      </div>

      <div>
        <p className="pb-3">
          Next, for example, you set the required option for the checkbox
          element
        </p>
        <Image className="block w-full " source={radius2} />
      </div>
    </TooltipWrapper>
  );
}
function Alignment() {
  return (
    <TooltipWrapper>
      <div className="pb-3">
        <h4 className="tooltip-title ">Alignment</h4>
        <p className="tooltip-desc">
          This is the setting for positioning the logo and checkout steps (if
          the 'Position' setting is set to 'Control Panel').
        </p>
      </div>

      <div className="pb-3">
        <p className="pb-1 !font-semibold tooltip-desc">Example 1:</p>
        <p className="pb-3 ">
          You have selected the 'Left' position and the 'Control Panel' position
        </p>
        <Image className="block w-full " source={alignment1} />
      </div>

      <div className="pb-5">
        <p className="pb-3 tooltip-desc">Result:</p>
        <Image className="block w-full pb-5 " source={alignment2} />
      </div>

      <div className="pb-[15px]">
        <p className="pb-1 !font-semibold tooltip-desc">Example 2:</p>
        <p className="pb-3 tooltip-desc">
          You have selected the 'Center' position and the 'Order summary'
          position
        </p>
        <Image className="block w-full" source={alignment3} />
      </div>

      <div>
        <p className="pb-3 ">Result:</p>
        <Image className="block w-full" source={alignment4} />
      </div>
    </TooltipWrapper>
  );
}

function TextBorder() {
  return (
    <TooltipWrapper>
      <div>
        <h4 className="tooltip-title ">Border</h4>
        <p className="pb-3 tooltip-desc">
          This setting adds or removes a border on the input
        </p>
      </div>

      <div>
        <p className="pb-3 font-semibold text-[14px]">None</p>
        <Image className="block w-full pb-5 " source={borderNone} />
      </div>

      <div>
        <p className="pb-3 font-semibold text-[14px]">Full</p>
        <Image className="block w-full " source={borderFull} />
      </div>
    </TooltipWrapper>
  );
}

function Color1() {
  return (
    <TooltipWrapper>
      <div>
        <h4 className="tooltip-title ">Color 1</h4>
        <p className="pb-3 tooltip-desc">
          This is a setting to change the background color, text-color,
          background input
        </p>
      </div>

      <div>
        <p className="pb-3 font-semibold text-[14px]">Background</p>
        <p className="pb-3 tooltip-desc">
          This is a setting for changing the background color of the Control
          panel (left side) and the input background if Color 1 is selected in
          the “Form controls” tab.
        </p>
        <Image className="block w-full pb-5 " source={color1first} />
      </div>

      <div>
        <p className="pb-3 font-semibold text-[14px]">Text color</p>
        <p className="pb-3 tooltip-desc">
          This is a setting for changing the color of the Control panel text
          (left side) and input if Color 1 is selected in the “Form controls”
          tab.
        </p>
        <Image className="block w-full " source={colors1second} />
      </div>
    </TooltipWrapper>
  );
}
function Position() {
  return (
    <TooltipWrapper>
      <div className="pb-3">
        <h4 className="tooltip-title ">Position</h4>
        <p className="tooltip-desc">
          This setting positions the logo above Control panel, Order summary or
          Full width.
        </p>
      </div>

      <div className="pb-5">
        <p className="pb-3 !font-semibold tooltip-desc">Control panel</p>
        <Image className="block w-full" source={position1} />
      </div>

      <div className="pb-5">
        <p className="pb-3 !font-semibold tooltip-desc">Order summary</p>
        <Image className="block w-full" source={position2} />
      </div>

      <div className="">
        <p className="pb-3 !font-semibold tooltip-desc">Full width</p>
        <Image className="block w-full" source={position3} />
      </div>
    </TooltipWrapper>
  );
}
function HeaderBanner() {
  return (
    <TooltipWrapper>
      <div className="pb-3">
        <h4 className="tooltip-title ">Header banner</h4>
        <p className="tooltip-desc">
          Header banner background image will be visible in case you choose
          header position "Full width (top)" option
        </p>
      </div>
    </TooltipWrapper>
  );
}

function Color2() {
  return (
    <TooltipWrapper>
      <div>
        <h4 className="tooltip-title ">Color 2</h4>
        <p className="pb-3 tooltip-desc">
          This is a setting to change the background color, text-color,
          background input
        </p>
      </div>

      <div>
        <p className="pb-3 font-semibold text-[14px]">Background</p>
        <p className="pb-3 tooltip-desc">
          This is a setting for changing the input background color of the
          Control panel (left side), background color on Order summary (right
          side) if Color 2 is selected in the “Form controls” tab.
        </p>
      </div>

      <div>
        <p className="pb-3 font-semibold text-[14px]">Text color</p>
        <p className="pb-3 tooltip-desc">
          This is a setting for changing the color of the Control panel text
          (left side) and input if Color 1 is selected in the “Form controls”
          tab.
        </p>
        <Image className="block w-full " source={colors2} />
      </div>
    </TooltipWrapper>
  );
}
function Border() {
  return (
    <TooltipWrapper>
      <div className="pb-3">
        <h4 className="tooltip-title ">border</h4>
        <p className="tooltip-desc">
          This setting adds or removes borders for the following elements: radio
          button, checkbox.
        </p>
      </div>

      <div className="pb-5">
        <p className="pb-3 !font-semibold tooltip-desc">None</p>
        <Image className="block w-full" source={border1} />
      </div>

      <div className="pb-5">
        <p className="pb-3 !font-semibold tooltip-desc">Full</p>
        <Image className="block w-full" source={border2} />
      </div>
    </TooltipWrapper>
  );
}

function Interactive() {
  return (
    <TooltipWrapper>
      <div>
        <h4 className="tooltip-title ">Interactive</h4>
        <p className="pb-3 tooltip-desc">
          This is a setting that changes the color for links, background, tabs
          (screenshot) and the color of the border on the active input.
        </p>
      </div>

      <div>
        <Image className="block w-full " source={interactive} />
      </div>
    </TooltipWrapper>
  );
}
function SelectBorder() {
  return (
    <TooltipWrapper>
      <div className="pb-3">
        <h4 className="tooltip-title ">border</h4>
        <p className="tooltip-desc">
          This setting adds or removes a border on the select
        </p>
      </div>

      <div className="pb-5">
        <p className="pb-3 !font-semibold tooltip-desc">None</p>
        <Image className="block w-full" source={selectBorder1} />
      </div>

      <div>
        <p className="pb-3 !font-semibold tooltip-desc">Full</p>
        <Image className="block w-full" source={selectBorder2} />
      </div>
    </TooltipWrapper>
  );
}

function Critical() {
  return (
    <TooltipWrapper>
      <div>
        <h4 className="tooltip-title ">Critical</h4>
        <p className="pb-3 tooltip-desc">
          This setting changes the text color, input border color, error
          background, error text message, and error description.
        </p>
      </div>

      <div>
        <p className="pb-3 font-semibold text-[14px]">Accent</p>
        <p className="pb-3 tooltip-desc">
          Changes the color of the error under the input and the border of the
          input.
        </p>
        <Image className="block w-full " source={critical1} />
      </div>

      <div>
        <p className="pb-3 mt-[20px] font-semibold text-[14px]">Background</p>
        <p className="pb-3 tooltip-desc">
          Changes the background of the error message.
        </p>
        <p className="pb-3 font-semibold text-[14px]">Foreground</p>
        <p className="pb-3 tooltip-desc">
          Changes the color of the error message text.
        </p>
        <Image className="block w-full " source={critical2} />
      </div>
    </TooltipWrapper>
  );
}
function LabelPosition() {
  return (
    <TooltipWrapper>
      <div className="pb-3">
        <h4 className="tooltip-title ">LABEL POSITION</h4>
        <p className="tooltip-desc">
          This setting changes the position of the label in the inputs
        </p>
      </div>

      <div className="pb-5">
        <p className="pb-3 !font-semibold tooltip-desc">Inside</p>
        <Image className="block w-full" source={labelPosition1} />
      </div>

      <div>
        <p className="pb-3 !font-semibold tooltip-desc">Outside</p>
        <Image className="block w-full" source={labelPosition2} />
      </div>
    </TooltipWrapper>
  );
}

function Canvas() {
  return (
    <TooltipWrapper>
      <div>
        <h4 className="tooltip-title ">Canvas</h4>
        <p className="pb-3 tooltip-desc">
          This is a setting to change the color of the header (background and
          logo text).
        </p>
      </div>

      <div>
        <Image className="block w-full " source={canvas1} />
      </div>

      <div>
        <p className="pb-3 mt-[20px] font-semibold text-[14px]">Background</p>
        <p className="pb-3 tooltip-desc">
          Changes the background of the header.
        </p>
        <p className="pb-3 mt-[20px] font-semibold text-[14px]">Text color</p>
        <p className="pb-3 tooltip-desc">
          Changes the color of the store name (if the logo is not loaded).
        </p>
        <Image className="block w-full " source={canvas2} />
      </div>
    </TooltipWrapper>
  );
}

function Color() {
  return (
    <TooltipWrapper>
      <div>
        <h4 className="tooltip-title ">color </h4>
        <p className="tooltip-desc">
          Go to the "Colors" tab and select a color palette. When we choose
          transparent, the entire background and the text of the left and right
          parts are set individually in the "Colors" tab, Color 1 and Color 2,
          respectively.
        </p>
      </div>
    </TooltipWrapper>
  );
}

function TextSize() {
  return (
    <TooltipWrapper>
      <h4 className="tooltip-title ">Text Size</h4>
      <p className="pb-3 tooltip-desc">
        This setting is used to select the base font size.
      </p>
      <p className="pb-3 tooltip-desc">
        <b>Ratio</b> is a setting to increase or decrease the base font size
      </p>
      <p className="pb-3 font-semibold text-[14px]">For example:</p>
      <p className="pb-3 tooltip-desc">
        Base size: 16px
        <br />
        Ratio: 1.2
      </p>

      <p className="pb-3 tooltip-desc">
        <b>XS</b> = 12px
        <br />
        <b>S</b> = 14px
        <br />
        <b>M</b> = 18px
        <br />
        <b>L</b> = 19px
        <br />
        <b>XL</b> = 23px
        <br />
        <b>XXL</b> = 26px
      </p>
    </TooltipWrapper>
  );
}

function ColorBtn() {
  return (
    <TooltipWrapper>
      <div>
        <h4 className="tooltip-title ">color </h4>
        <p className="pb-3 tooltip-desc">
          This setting changes the color for the buttons
        </p>
      </div>

      <div className="pb-5">
        <p className="pb-3 !font-semibold tooltip-desc">Buttons background</p>

        <Image className="block w-full" source={warning} />
      </div>

      <div>
        <p className="pb-3 !font-semibold tooltip-desc">Buttons text color</p>
        <p className="tooltip-desc">
          The color of the text changes when the 'Solid' option is enabled in
          the 'Background' settings. If 'None' is selected in the 'Background'
          settings, the text color changes in the Colors → background tab.
        </p>
      </div>
    </TooltipWrapper>
  );
}

function MTBorder() {
  return (
    <TooltipWrapper>
      <div>
        <h4 className="tooltip-title ">Border</h4>
        <p className="pb-3 tooltip-desc">
          This setting adds or removes borders for product image and change
          border radius (corner radius option).
        </p>
      </div>

      <div>
        <Image className="block w-full" source={mtborder} />
      </div>
    </TooltipWrapper>
  );
}
