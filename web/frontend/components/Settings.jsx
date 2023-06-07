import { Select, Banner } from "@shopify/polaris";
import { CustomCard } from "./CustomCard";
import { ColorInput } from "./ColorInput";
import { OPTIONS } from "../settings/options";
import { SHOPIFY_FONTS } from "../settings/fonts";
import { ImagePreview } from "../components/ImagePreview";
import { Checkout } from "./Checkout";
import { Tooltips } from "./Tooltips";
import { useState } from "react";
import { CustomRange } from "./CustomRange";

export default function Settings({
  configsAndMethods,
  loading,
  setLoading,
  storePlan,
  appVersion,
  isNewCheckoutSupported,
}) {
  const {
    cornerRadiusOptions,
    borderOptions,
    colorOptions,
    labelPositionOptions,
    kerningOptions,
    letterCaseOptions,
    alignmentOptions,
    positionOptions,
    fontTypeOptions,
    fontSizeOptions,
    fontWeightOptions,
    backgroundOptions,
    paddingOptions,
  } = OPTIONS;
  const {
    checkboxCornerRadius,
    seCheckboxCornerRadius,

    controlBorder,
    setControlBorder,
    controlColor,
    setControlColor,
    controlCornerRadius,
    setControlCornerRadius,

    labelPosition,
    setLabelPosition,

    globalCornerRadius,
    setGlobalCornerRadius,
    globalTKerning,
    setGlobalTKerning,
    globalTLetterCase,
    setGlobalTLetterCase,

    headerAlignment,
    setHeaderAlignment,
    headerPosition,
    setHeaderPosition,

    headerLogoImageUrl,
    setHeaderLogoImageUrl,

    headerLogoImageID,
    setHeaderLogoImageID,

    headerLogoMaxW,
    setHeaderLogoMaxW,

    headerBannerImageUrl,
    setHeaderBannerImageUrl,
    headerBannerImageID,
    setHeaderBannerImageID,

    h1TFont,
    setH1TFont,
    h1TKerning,
    setH1TKerning,
    h1TLetterCase,
    setH1TLetterCase,
    h1TSize,
    setH1TSize,
    h1TWeight,
    setH1TWeight,

    h2TFont,
    setH2TFont,
    h2TKerning,
    setH2TKerning,
    h2TLetterCase,
    setH2TLetterCase,
    h2TSize,
    setH2TSize,
    h2TWeight,
    setH2TWeight,

    h3TFont,
    setH3TFont,
    h3TKerning,
    setH3TKerning,
    h3TLetterCase,
    setH3TLetterCase,
    h3TSize,
    setH3TSize,
    h3TWeight,
    setH3TWeight,

    mainBGImageUrl,
    setMainBGImageUrl,
    mainBGImageID,
    setMainBGImageID,

    merchThumbnailCornerRadius,
    setMerchThumbnailCornerRadius,
    merchThumbnailBorder,
    setMerchThumbnailBorder,

    orderBGImageUrl,
    setOrderBGImageUrl,
    orderBGImageID,
    setOrderBGImageID,

    // faviconImageUrl, setFaviconImageUrl
    // faviconImageID, setFaviconImageID

    pBtnBG,
    setPBtnBG,
    pBtnBlockPadding,
    setPBtnBlockPadding,
    pBtnBorder,
    setPBtnBorder,
    pBtnCornerRadius,
    setPBtnCornerRadius,
    pBtnInlinePadding,
    setPBtnInlinePadding,

    pBtnTFont,
    setPBtnTFont,
    pBtnTKerning,
    setPBtnTKerning,
    pBtnTLetterCase,
    setPBtnTLetterCase,
    pBtnTSize,
    setPBtnTSize,
    pBtnTWeight,
    setPBtnTWeight,

    sBtnBG,
    setSBtnBG,
    sBtnBlockPadding,
    setSBtnBlockPadding,
    sBtnBorder,
    setSBtnBorder,
    sBtnCornerRadius,
    setSBtnCornerRadius,
    sBtnInlinePadding,
    setSBtnInlinePadding,

    sBtnTFont,
    setSBtnTFont,
    sBtnTKerning,
    setSBtnTKerning,
    sBtnTLetterCase,
    setSBtnTLetterCase,
    sBtnTSize,
    setSBtnTSize,
    sBtnTWeight,
    setSBtnTWeight,

    selectBorder,
    setSelectBorder,
    selectTFont,
    setSelectTFont,
    selectTKerning,
    setSelectTKerning,
    selectTLetterCase,
    setSelectTLetterCase,
    selectTSize,
    setSelectTSize,
    selectTWeight,
    setSelectTWeight,

    textFieldBorder,
    setTextFieldBorder,
    textFieldTFont,
    setTextFieldTFont,
    textFieldTKerning,
    setTextFieldTKerning,
    textFieldTLetterCase,
    setTextFieldTLetterCase,
    textFieldTSize,
    setTextFieldTSize,
    textFieldTWeight,
    setTextFieldTWeight,

    // Design System
    canvasAccent,
    setCanvasAccent,
    canvasBackground,
    setCanvasBackground,
    canvasForeground,
    setCanvasForeground,

    color1Accent,
    setColor1Accent,
    color1Background,
    setColor1Background,
    color1Foreground,
    setColor1Foreground,

    color2Accent,
    setColor2Accent,
    color2Background,
    setColor2Background,
    color2Foreground,
    setColor2Foreground,

    criticalAccent,
    setCriticalAccent,
    criticalBackground,
    setCriticalBackground,
    criticalForeground,
    setCriticalForeground,

    interactiveAccent,
    setInteractiveAccent,
    interactiveBackground,
    setInteractiveBackground,
    interactiveForeground,
    setInteractiveForeground,

    primaryAccent,
    setPrimaryAccent,
    primaryBackground,
    setPrimaryBackground,
    primaryForeground,
    setPrimaryForeground,

    cornerRadiusIntBase,
    setCornerRadiusIntBase,
    cornerRadiusIntLarge,
    setCornerRadiusIntLarge,
    cornerRadiusIntSmall,
    setCornerRadiusIntSmall,

    tPrimaryFont,
    setTPrimaryFont,
    tPrimaryWeightBase,
    setTPrimaryWeightBase,
    tPrimaryWeightBold,
    setTPrimaryWeightBold,

    tSecondaryFont,
    setTSecondaryFont,
    tSecondaryWeightBase,
    setTSecondaryWeightBase,
    tSecondaryWeightBold,
    setTSecondaryWeightBold,

    tSizeBase,
    setTSizeBase,
    tSizeRatio,
    setTSizeRatio,
  } = configsAndMethods;

  const [activeTab, setActiveTab] = useState(null);
  const toggleTab = (id) => {
    activeTab === id ? setActiveTab(null) : setActiveTab(id);
  };

  return (
    <div className="flex flex-col mt-[25px]">
      <div className="w-[100%] flex">
        <div className="w-[32%] min-w-[300px] mr-[15px] bg-white max-h-[100%]">
          <div className="w-[100%] flex items-center border-[#E1E3E5] border-solid rounded-none shadow-none border-b-[1px]">
            <div className="bg-[#008060] w-[48px] h-[48px] mr-[16px] flex items-center justify-center">
              <svg
                className="flex"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.6846 1.46089C19.7846 1.36121 19.8845 1.26154 19.8845 1.16187C20.0687 0.886275 19.9982 0.610681 19.9078 0.25705C19.9001 0.226994 19.8923 0.196374 19.8845 0.165143C19.5847 -0.0342022 19.2849 -0.0342022 18.9852 0.0654704C18.9352 0.115307 18.8853 0.140225 18.8353 0.165143C18.7853 0.190061 18.7354 0.214979 18.6854 0.264816L12.1904 4.15205C9.59244 5.64714 7.59399 7.83994 6.19507 10.4314C7.69391 11.0295 8.9929 12.3252 9.49252 13.92C12.0905 12.5245 14.2888 10.4314 15.7876 7.93961L19.6846 1.46089Z"
                  fill="white"
                />
                <path
                  d="M3.99691 20C6.19521 20 7.99382 18.2059 7.99382 16.0131C7.99382 13.8203 6.19521 12.0262 3.99691 12.0262C1.79861 12.0262 0 13.8203 0 16.0131V20H3.99691Z"
                  fill="white"
                />
              </svg>
            </div>
            <p className="font-semibold text-[16px]">Checkout Settings</p>
          </div>
          <div className="pr-[24px] pl-[24px]">
            <CustomCard
              id={1}
              activeTab={activeTab}
              onToggle={toggleTab}
              disabled={
                !isNewCheckoutSupported ||
                (isNewCheckoutSupported &&
                  storePlan === "Shopify Plus" &&
                  appVersion === "demo")
              }
              title="Global"
            >
              <div className="setting-container">
                <div className="flex">
                  <h2 className="mb-[12px] text-[12px] text-black font-semibold uppercase leading-[1.67]">
                    Corner Radius (PX)
                  </h2>
                  <div className="pl-1 -mt-[3px]">
                    <Tooltips tooltip="corner-radius" />
                  </div>
                </div>
                <CustomRange
                  handler={setCornerRadiusIntBase}
                  value={cornerRadiusIntBase}
                  min={1}
                  max={30}
                  step={1}
                  label="Base"
                  id="cornerRadiusIntBase"
                />
                <CustomRange
                  handler={setCornerRadiusIntLarge}
                  value={cornerRadiusIntLarge}
                  min={1}
                  max={30}
                  step={1}
                  label="Large"
                  id="cornerRadiusIntLarge"
                />
                <CustomRange
                  handler={setCornerRadiusIntSmall}
                  value={cornerRadiusIntSmall}
                  min={1}
                  max={30}
                  step={1}
                  label="Small"
                  id="cornerRadiusIntSmall"
                />
              </div>

              <div title="Typography" className="pt-[20px]">
                <h2 className="mb-[12px] text-[12px] text-black font-semibold uppercase leading-[1.67]">
                  Typography
                </h2>
                <Select
                  label="Kerning"
                  options={kerningOptions}
                  onChange={(value) => setGlobalTKerning(value)}
                  value={globalTKerning}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Letter Case"
                  options={letterCaseOptions}
                  onChange={(value) => setGlobalTLetterCase(value)}
                  value={globalTLetterCase}
                />
              </div>
            </CustomCard>

            <CustomCard
              id={2}
              activeTab={activeTab}
              onToggle={toggleTab}
              disabled={
                !isNewCheckoutSupported ||
                (isNewCheckoutSupported &&
                  storePlan === "Shopify Plus" &&
                  appVersion === "demo")
              }
              title="Background images"
            >
              <ImagePreview
                loading={loading}
                setLoading={setLoading}
                url={mainBGImageUrl}
                setUrl={setMainBGImageUrl}
                selectedImg={mainBGImageID}
                onImgSelect={setMainBGImageID}
                title={"Main background image"}
              />
              <div className="pt-[16px]"></div>

              <ImagePreview
                loading={loading}
                setLoading={setLoading}
                setUrl={setOrderBGImageUrl}
                url={orderBGImageUrl}
                selectedImg={orderBGImageID}
                onImgSelect={setOrderBGImageID}
                title={"Order summary background image"}
              />
            </CustomCard>

            <CustomCard
              id={3}
              activeTab={activeTab}
              onToggle={toggleTab}
              disabled={
                !isNewCheckoutSupported ||
                (isNewCheckoutSupported &&
                  storePlan === "Shopify Plus" &&
                  appVersion === "demo")
              }
              title="Header"
            >
              <div className="flex flex-row">
                <p>Alignment</p>
                <div className="pl-1 -mt-[3px]">
                  <Tooltips tooltip="alignment" />
                </div>
              </div>
              <Select
                label=""
                options={alignmentOptions}
                onChange={(value) => setHeaderAlignment(value)}
                value={headerAlignment}
              />

              <div className="pt-[16px]">
                <div className="flex flex-row">
                  <p>Position</p>
                  <div className="pl-1 -mt-[3px]">
                    <Tooltips tooltip="position" />
                  </div>
                </div>
              </div>

              <Select
                label=""
                options={positionOptions}
                onChange={(value) => setHeaderPosition(value)}
                value={headerPosition}
              />

              <div className="pt-[16px]"></div>

              <div className="pt-[16px]">
                <div className="flex flex-row">
                  <p>Header banner</p>
                  <div className="pl-1 -mt-[3px]">
                    <Tooltips tooltip="header-banner" />
                  </div>
                </div>
              </div>
              <ImagePreview
                loading={loading}
                setLoading={setLoading}
                setUrl={setHeaderBannerImageUrl}
                url={headerBannerImageUrl}
                selectedImg={headerBannerImageID}
                onImgSelect={setHeaderBannerImageID}
                title={""}
              />
              <div className="pt-[16px]"></div>
              <ImagePreview
                loading={loading}
                setLoading={setLoading}
                setUrl={setHeaderLogoImageUrl}
                url={headerLogoImageUrl}
                selectedImg={headerLogoImageID}
                onImgSelect={setHeaderLogoImageID}
                title={"Header logo"}
              />
              <div className="pt-[16px]"></div>
              <CustomRange
                handler={setHeaderLogoMaxW}
                value={headerLogoMaxW}
                min={0}
                max={1000}
                step={1}
                label="Logo max width"
                id="headerLogoMaxW"
              />
            </CustomCard>

            <CustomCard
              id={4}
              activeTab={activeTab}
              onToggle={toggleTab}
              disabled={
                !isNewCheckoutSupported ||
                (isNewCheckoutSupported &&
                  storePlan === "Shopify Plus" &&
                  appVersion === "demo")
              }
              title="UI Elements"
            >
              <div className="setting-container">
                <h2 className="mb-[12px] text-[12px] text-black font-semibold uppercase leading-[1.67]">
                  Form Controls
                </h2>

                <div className="flex flex-row">
                  <p>Border</p>
                  <div className="pl-1 -mt-[3px]">
                    <Tooltips tooltip="border" />
                  </div>
                </div>
                <Select
                  label=""
                  options={borderOptions}
                  onChange={(value) => setControlBorder(value)}
                  value={controlBorder}
                />

                <div className="pt-[16px]"></div>
                <div>
                  <div className="flex flex-row">
                    <p>Corner radius</p>
                    <div className="pl-1 -mt-[3px]">
                      <Tooltips tooltip="corner-radius" />
                    </div>
                  </div>

                  <Select
                    label=""
                    options={cornerRadiusOptions}
                    onChange={(value) => setControlCornerRadius(value)}
                    value={controlCornerRadius}
                  />
                </div>

                <div className="pt-[16px]"></div>

                <div className="flex flex-row">
                  <p>Label position</p>
                  <div className="pl-1 -mt-[3px]">
                    <Tooltips tooltip="label-position" />
                  </div>
                </div>
                <Select
                  label=""
                  options={labelPositionOptions}
                  onChange={(value) => setLabelPosition(value)}
                  value={labelPosition}
                />

                <div className="pt-[16px]"></div>

                <div className="flex flex-row">
                  <p>Color</p>
                  <div className="pl-1 -mt-[3px]">
                    <Tooltips tooltip="color" />
                  </div>
                </div>
                <Select
                  label=""
                  options={colorOptions}
                  onChange={(value) => setControlColor(value)}
                  value={controlColor}
                />
              </div>

              <div className="setting-container pt-[20px]">
                <h2 className="mb-[12px] text-[12px] text-black font-semibold uppercase leading-[1.67]">
                  Checkboxes
                </h2>

                <div className="flex flex-row">
                  <p>Corner Radius</p>
                  <div className="pl-1 -mt-[3px]">
                    <Tooltips tooltip="corner-radius" />
                  </div>
                </div>

                <Select
                  label=""
                  options={cornerRadiusOptions}
                  onChange={(value) => seCheckboxCornerRadius(value)}
                  value={checkboxCornerRadius}
                />
              </div>

              <div className="pt-[20px]">
                <h2 className="mb-[12px] text-[12px] text-black font-semibold uppercase leading-[1.67]">
                  Select
                </h2>

                <div className="flex flex-row">
                  <p>Border</p>
                  <div className="pl-1 -mt-[3px]">
                    <Tooltips tooltip="select-border" />
                  </div>
                </div>
                <Select
                  label=""
                  options={borderOptions}
                  onChange={(value) => setSelectBorder(value)}
                  value={selectBorder}
                />

                <div className="pt-[16px]"></div>
                <Select
                  label="Font"
                  options={fontTypeOptions}
                  onChange={(value) => setSelectTFont(value)}
                  value={selectTFont}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Kerning"
                  options={kerningOptions}
                  onChange={(value) => setSelectTKerning(value)}
                  value={selectTKerning}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Letter Case"
                  options={letterCaseOptions}
                  onChange={(value) => setSelectTLetterCase(value)}
                  value={selectTLetterCase}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Size"
                  options={fontSizeOptions}
                  onChange={(value) => setSelectTSize(value)}
                  value={selectTSize}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Weight"
                  options={fontWeightOptions}
                  onChange={(value) => setSelectTWeight(value)}
                  value={selectTWeight}
                />
              </div>
            </CustomCard>

            <CustomCard
              id={5}
              activeTab={activeTab}
              onToggle={toggleTab}
              disabled={!isNewCheckoutSupported}
              title="Buttons"
            >
              <div
                title="Color"
                className={`setting-container ${
                  storePlan === "Shopify Plus" && appVersion === "demo"
                    ? "pointer-events-none opacity-50"
                    : ""
                }`}
              >
                <div className="flex">
                  <h2 className="mb-[12px] text-[12px] text-black font-semibold uppercase leading-[1.67]">
                    Color
                  </h2>
                  <div className="flex flex-row">
                    <div className="pl-1 -mt-[3px]">
                      <Tooltips tooltip="color-btn" />
                    </div>
                  </div>
                </div>
                <ColorInput
                  label="Background"
                  size="large"
                  name="primaryBackground"
                  onChange={setPrimaryBackground}
                  value={primaryBackground}
                />
                <ColorInput
                  label="Text color"
                  size="large"
                  name="primaryForeground"
                  onChange={setPrimaryForeground}
                  value={primaryForeground}
                />
              </div>
              <div
                title="Primary button"
                className="setting-container pt-[20px]"
              >
                <h2 className="mb-[12px] text-[12px] text-black font-semibold uppercase leading-[1.67]">
                  Primary button
                </h2>
                <Select
                  label="Background"
                  options={backgroundOptions}
                  onChange={(value) => setPBtnBG(value)}
                  value={pBtnBG}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Block Padding (Vertical)"
                  options={paddingOptions}
                  onChange={(value) => setPBtnBlockPadding(value)}
                  value={pBtnBlockPadding}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Inline Padding (Horizontal)"
                  options={paddingOptions}
                  onChange={(value) => setPBtnInlinePadding(value)}
                  value={pBtnInlinePadding}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Border"
                  options={borderOptions}
                  onChange={(value) => setPBtnBorder(value)}
                  value={pBtnBorder}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Corner Radius"
                  options={cornerRadiusOptions}
                  onChange={(value) => setPBtnCornerRadius(value)}
                  value={pBtnCornerRadius}
                />
              </div>

              <div className="setting-container pt-[20px]">
                <h2 className="mb-[12px] text-[12px] text-black font-semibold uppercase leading-[1.67]">
                  Primary button typography
                </h2>
                <Select
                  label="Font"
                  options={fontTypeOptions}
                  onChange={(value) => setPBtnTFont(value)}
                  value={pBtnTFont}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Kerning"
                  options={kerningOptions}
                  onChange={(value) => setPBtnTKerning(value)}
                  value={pBtnTKerning}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Letter Case"
                  options={letterCaseOptions}
                  onChange={(value) => setPBtnTLetterCase(value)}
                  value={pBtnTLetterCase}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Size"
                  options={fontSizeOptions}
                  onChange={(value) => setPBtnTSize(value)}
                  value={pBtnTSize}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Weight"
                  options={fontWeightOptions}
                  onChange={(value) => setPBtnTWeight(value)}
                  value={pBtnTWeight}
                />
              </div>

              <div
                title="Secondary button"
                className={`setting-container pt-[20px] ${
                  storePlan === "Shopify Plus" && appVersion === "demo"
                    ? "pointer-events-none opacity-50"
                    : ""
                }`}
              >
                <h2 className="mb-[12px] text-[12px] text-black font-semibold uppercase leading-[1.67]">
                  Secondary button
                </h2>
                <Select
                  label="Background"
                  options={backgroundOptions}
                  onChange={(value) => setSBtnBG(value)}
                  value={sBtnBG}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Block Padding (Vertical)"
                  options={paddingOptions}
                  onChange={(value) => setSBtnBlockPadding(value)}
                  value={sBtnBlockPadding}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Inline Padding (Horizontal)"
                  options={paddingOptions}
                  onChange={(value) => setSBtnInlinePadding(value)}
                  value={sBtnInlinePadding}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Border"
                  options={borderOptions}
                  onChange={(value) => setSBtnBorder(value)}
                  value={sBtnBorder}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Corner Radius"
                  options={cornerRadiusOptions}
                  onChange={(value) => setSBtnCornerRadius(value)}
                  value={sBtnCornerRadius}
                />
              </div>

              <div
                className={`pt-[20px] ${
                  storePlan === "Shopify Plus" && appVersion === "demo"
                    ? "pointer-events-none opacity-50"
                    : ""
                }`}
              >
                <h2 className="mb-[12px] text-[12px] text-black font-semibold uppercase leading-[1.67]">
                  Secondary button typography
                </h2>
                <Select
                  label="Font"
                  options={fontTypeOptions}
                  onChange={(value) => setSBtnTFont(value)}
                  value={sBtnTFont}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Kerning"
                  options={kerningOptions}
                  onChange={(value) => setSBtnTKerning(value)}
                  value={sBtnTKerning}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Letter Case"
                  options={letterCaseOptions}
                  onChange={(value) => setSBtnTLetterCase(value)}
                  value={sBtnTLetterCase}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Size"
                  options={fontSizeOptions}
                  onChange={(value) => setSBtnTSize(value)}
                  value={sBtnTSize}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Weight"
                  options={fontWeightOptions}
                  onChange={(value) => setSBtnTWeight(value)}
                  value={sBtnTWeight}
                />
              </div>
            </CustomCard>

            <CustomCard
              id={6}
              activeTab={activeTab}
              onToggle={toggleTab}
              disabled={
                !isNewCheckoutSupported ||
                (isNewCheckoutSupported &&
                  storePlan === "Shopify Plus" &&
                  appVersion === "demo")
              }
              title="Text"
            >
              <div className="setting-container">
                <h2 className="mb-[12px] text-[12px] text-black font-semibold uppercase leading-[1.67]">
                  Text Field
                </h2>
                <div>
                  <div className="flex flex-row">
                    <p>Border</p>
                    <div className="pl-1 -mt-[3px]">
                      <Tooltips tooltip="text-border" />
                    </div>
                  </div>

                  <Select
                    label=""
                    options={borderOptions}
                    onChange={(value) => setTextFieldBorder(value)}
                    value={textFieldBorder}
                  />
                </div>

                <div className="pt-[16px]"></div>
                <Select
                  label="Font"
                  options={fontTypeOptions}
                  onChange={(value) => setTextFieldTFont(value)}
                  value={textFieldTFont}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Kerning"
                  options={kerningOptions}
                  onChange={(value) => setTextFieldTKerning(value)}
                  value={textFieldTKerning}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Letter Case"
                  options={letterCaseOptions}
                  onChange={(value) => setTextFieldTLetterCase(value)}
                  value={textFieldTLetterCase}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Size"
                  options={fontSizeOptions}
                  onChange={(value) => setTextFieldTSize(value)}
                  value={textFieldTSize}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Weight"
                  options={fontWeightOptions}
                  onChange={(value) => setTextFieldTWeight(value)}
                  value={textFieldTWeight}
                />
              </div>
              <div className="setting-container pt-[20px]">
                <h2 className="mb-[12px] text-[12px] text-black font-semibold uppercase leading-[1.67]">
                  Heading 1
                </h2>
                <Select
                  label="Font"
                  options={fontTypeOptions}
                  onChange={(value) => setH1TFont(value)}
                  value={h1TFont}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Kerning"
                  options={kerningOptions}
                  onChange={(value) => setH1TKerning(value)}
                  value={h1TKerning}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Letter Case"
                  options={letterCaseOptions}
                  onChange={(value) => setH1TLetterCase(value)}
                  value={h1TLetterCase}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Size"
                  options={fontSizeOptions}
                  onChange={(value) => setH1TSize(value)}
                  value={h1TSize}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Weight"
                  options={fontWeightOptions}
                  onChange={(value) => setH1TWeight(value)}
                  value={h1TWeight}
                />
              </div>

              <div className="setting-container pt-[20px]">
                <h2 className="mb-[12px] text-[12px] text-black font-semibold uppercase leading-[1.67]">
                  Heading 2
                </h2>
                <Select
                  label="Font"
                  options={fontTypeOptions}
                  onChange={(value) => setH2TFont(value)}
                  value={h2TFont}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Kerning"
                  options={kerningOptions}
                  onChange={(value) => setH2TKerning(value)}
                  value={h2TKerning}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Letter Case"
                  options={letterCaseOptions}
                  onChange={(value) => setH2TLetterCase(value)}
                  value={h2TLetterCase}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Size"
                  options={fontSizeOptions}
                  onChange={(value) => setH2TSize(value)}
                  value={h2TSize}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Weight"
                  options={fontWeightOptions}
                  onChange={(value) => setH2TWeight(value)}
                  value={h2TWeight}
                />
              </div>

              <div className="pt-[20px]">
                <h2 className="mb-[12px] text-[12px] text-black font-semibold uppercase leading-[1.67]">
                  Heading 3
                </h2>
                <Select
                  label="Font"
                  options={fontTypeOptions}
                  onChange={(value) => setH3TFont(value)}
                  value={h3TFont}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Kerning"
                  options={kerningOptions}
                  onChange={(value) => setH3TKerning(value)}
                  value={h3TKerning}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Letter Case"
                  options={letterCaseOptions}
                  onChange={(value) => setH3TLetterCase(value)}
                  value={h3TLetterCase}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Size"
                  options={fontSizeOptions}
                  onChange={(value) => setH3TSize(value)}
                  value={h3TSize}
                />
                <div className="pt-[16px]"></div>
                <Select
                  label="Weight"
                  options={fontWeightOptions}
                  onChange={(value) => setH3TWeight(value)}
                  value={h3TWeight}
                />
              </div>
            </CustomCard>

            <CustomCard
              id={7}
              activeTab={activeTab}
              onToggle={toggleTab}
              disabled={
                !isNewCheckoutSupported ||
                (isNewCheckoutSupported &&
                  storePlan === "Shopify Plus" &&
                  appVersion === "demo")
              }
              title="Colours"
            >
              <div title="Canvas" className="pb-5 setting-container">
                <div className="flex">
                  <h2 className="mb-[12px] text-[12px] text-black font-semibold uppercase leading-[1.67]">
                    Canvas
                  </h2>
                  <div className="pl-1 -mt-[3px]">
                    <Tooltips tooltip="canvas" />
                  </div>
                </div>
                <ColorInput
                  label="Background"
                  size="large"
                  name="canvasBackground"
                  onChange={setCanvasBackground}
                  value={canvasBackground}
                />
                <ColorInput
                  label="Text color"
                  size="large"
                  name="canvasForeground"
                  onChange={setCanvasForeground}
                  value={canvasForeground}
                />
              </div>
              <div title="Color 1" className="pb-5 setting-container pt-[20px]">
                <div className="flex">
                  <h2 className="mb-[12px] text-[12px] text-black font-semibold uppercase leading-[1.67]">
                    Color 1
                  </h2>
                  <div className="pl-1 -mt-[3px]">
                    <Tooltips tooltip="color1" />
                  </div>
                </div>

                <ColorInput
                  label="Background"
                  size="large"
                  name="color1Background"
                  onChange={setColor1Background}
                  value={color1Background}
                />
                <ColorInput
                  label="Text color"
                  size="large"
                  name="color1Foreground"
                  onChange={setColor1Foreground}
                  value={color1Foreground}
                />
              </div>
              <div title="Color 2" className="pb-5 setting-container pt-[20px]">
                <div className="flex">
                  <h2 className="mb-[12px] text-[12px] text-black font-semibold uppercase leading-[1.67]">
                    Color 2
                  </h2>
                  <div className="pl-1 -mt-[3px]">
                    <Tooltips tooltip="color2" />
                  </div>
                </div>
                <ColorInput
                  label="Background"
                  size="large"
                  name="color2Background"
                  onChange={setColor2Background}
                  value={color2Background}
                />
                <ColorInput
                  label="Text color"
                  size="large"
                  name="color2Foreground"
                  onChange={setColor2Foreground}
                  value={color2Foreground}
                />
              </div>
              <div
                title="Critical"
                className="pb-5 setting-container pt-[20px]"
              >
                <div className="flex">
                  <h2 className="mb-[12px] text-[12px] text-black font-semibold uppercase leading-[1.67]">
                    Critical
                  </h2>
                  <div className="pl-1 -mt-[3px]">
                    <Tooltips tooltip="critical" />
                  </div>
                </div>

                <ColorInput
                  label="Accent"
                  size="large"
                  name="criticalAccent"
                  onChange={setCriticalAccent}
                  value={criticalAccent}
                />
                <ColorInput
                  label="Background"
                  size="large"
                  name="criticalBackground"
                  onChange={setCriticalBackground}
                  value={criticalBackground}
                />
                <ColorInput
                  label="Text color"
                  size="large"
                  name="criticalForeground"
                  onChange={setCriticalForeground}
                  value={criticalForeground}
                />
              </div>
              <div title="Interactive" className="pb-5 pt-[20px]">
                <div className="flex">
                  <h2 className="mb-[12px] text-[12px] text-black font-semibold uppercase leading-[1.67]">
                    Interactive
                  </h2>
                  <div className="pl-1 -mt-[3px]">
                    <Tooltips tooltip="interactive" />
                  </div>
                </div>
                <ColorInput
                  label="Background"
                  size="large"
                  name="interactiveBackground"
                  onChange={setInteractiveBackground}
                  value={interactiveBackground}
                />
                <ColorInput
                  label="Text color"
                  size="large"
                  name="interactiveForeground"
                  onChange={setInteractiveForeground}
                  value={interactiveForeground}
                />
              </div>
            </CustomCard>

            <CustomCard
              id={8}
              activeTab={activeTab}
              onToggle={toggleTab}
              disabled={
                !isNewCheckoutSupported ||
                (isNewCheckoutSupported &&
                  storePlan === "Shopify Plus" &&
                  appVersion === "demo")
              }
              title="Typography"
            >
              <div className="pb-5 ">
                <Banner status="warning" title="">
                  <p>
                    1. Fonts will be applied to the Preview only after pressing
                    the "save" button.
                  </p>
                  <p>
                    2. Not all fonts have all weights, so after selecting, the
                    closest font weights will be selected and change value at
                    your select.
                  </p>
                </Banner>
              </div>

              <div className="setting-container">
                <div className="flex">
                  <h2 className="mb-[12px] text-[12px] text-black font-semibold uppercase leading-[1.67]">
                    Text Size
                  </h2>
                  <div className="pl-1 -mt-[3px]">
                    <Tooltips tooltip="text-size" />
                  </div>
                </div>
                <CustomRange
                  handler={setTSizeBase}
                  value={tSizeBase}
                  label="Base"
                  min={12.0}
                  max={18.0}
                  step={0.1}
                  id="tSizeBase"
                />
                <div className="pt-[16px]"></div>
                <CustomRange
                  handler={setTSizeRatio}
                  value={tSizeRatio}
                  label="Ratio"
                  min={1.0}
                  max={1.4}
                  step={0.1}
                  id="tSizeRatio"
                />
              </div>

              <div className="setting-container pt-[20px]">
                <h2 className="mb-[12px] text-[12px] text-black font-semibold uppercase leading-[1.67]">
                  Primary
                </h2>
                <Select
                  label="Base"
                  options={SHOPIFY_FONTS}
                  onChange={(value) => {
                    setTPrimaryFont(value);
                  }}
                  value={tPrimaryFont}
                />
                <div className="pt-[16px]"></div>
                <CustomRange
                  handler={setTPrimaryWeightBase}
                  value={tPrimaryWeightBase}
                  label="Base Weight"
                  min={100}
                  max={900}
                  step={100}
                  id="tPrimaryWeightBase"
                />
                <div className="pt-[16px]"></div>
                <CustomRange
                  handler={setTPrimaryWeightBold}
                  value={tPrimaryWeightBold}
                  label="Bold Weight"
                  min={100}
                  max={900}
                  step={100}
                  id="tPrimaryWeightBold"
                />
              </div>

              <div className="pt-[20px]">
                <h2 className="mb-[12px] text-[12px] text-black font-semibold uppercase leading-[1.67]">
                  Secondary
                </h2>
                <Select
                  label="Base"
                  options={SHOPIFY_FONTS}
                  onChange={(value) => {
                    setTSecondaryFont(value);
                  }}
                  value={tSecondaryFont}
                />
                <div className="pt-[16px]"></div>

                <CustomRange
                  handler={setTSecondaryWeightBase}
                  value={tSecondaryWeightBase}
                  label="Base Weight"
                  min={100}
                  max={900}
                  step={100}
                  id="tSecondaryWeightBase"
                />
                <div className="pt-[16px]"></div>
                <CustomRange
                  handler={setTSecondaryWeightBold}
                  value={tSecondaryWeightBold}
                  label="Bold Weight"
                  min={100}
                  max={900}
                  step={100}
                  id="tSecondaryWeightBold"
                />
              </div>
            </CustomCard>

            <CustomCard
              id={9}
              activeTab={activeTab}
              onToggle={toggleTab}
              disabled={!isNewCheckoutSupported}
              title="Merchandise thumbnail"
            >
              <div className="flex flex-row">
                <p>Border</p>
                <div className="pl-1 -mt-[3px]">
                  <Tooltips tooltip="mt-border" />
                </div>
              </div>

              <Select
                label=""
                options={borderOptions}
                onChange={(value) => setMerchThumbnailBorder(value)}
                value={merchThumbnailBorder}
              />

              <div className="pt-[16px]"></div>
              <Select
                label="Corner radius"
                options={cornerRadiusOptions}
                onChange={(value) => setMerchThumbnailCornerRadius(value)}
                value={merchThumbnailCornerRadius}
              />
            </CustomCard>
          </div>
        </div>

        <div
          className={`w-[66.5%] top-0 h-fit  ${
            !isNewCheckoutSupported ? "blured" : ""
          }`}
        >
          <Checkout
            headerLogoImageUrl={headerLogoImageUrl}
            labelPosition={labelPosition}
            controlColor={controlColor}
            headerPosition={headerPosition}
          />
        </div>
      </div>
    </div>
  );
}
