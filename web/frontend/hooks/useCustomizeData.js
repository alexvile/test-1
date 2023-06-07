import { useState, useEffect, useCallback } from "react";
import { useAuthenticatedFetch } from "./useAuthenticatedFetch";
import { DEFAULT_SETTINGS } from "../settings/default.settings";
import { setCssVariables } from "../utils/setCssVariables";
import { setFonts } from "../utils/setFonts";

function useConfig(data) {
  const [checkboxCornerRadius, seCheckboxCornerRadius] = useState();

  const [controlBorder, setControlBorder] = useState();
  const [controlColor, setControlColor] = useState();
  const [controlCornerRadius, setControlCornerRadius] = useState();

  const [labelPosition, setLabelPosition] = useState();

  const [globalCornerRadius, setGlobalCornerRadius] = useState();
  const [globalTKerning, setGlobalTKerning] = useState();
  const [globalTLetterCase, setGlobalTLetterCase] = useState();

  const [headerAlignment, setHeaderAlignment] = useState();
  const [headerPosition, setHeaderPosition] = useState();

  const [headerLogoImageUrl, setHeaderLogoImageUrl] = useState();
  const [headerLogoImageID, setHeaderLogoImageID] = useState();

  const [headerLogoMaxW, setHeaderLogoMaxW] = useState();

  const [headerBannerImageUrl, setHeaderBannerImageUrl] = useState();
  const [headerBannerImageID, setHeaderBannerImageID] = useState();

  const [h1TFont, setH1TFont] = useState();
  const [h1TKerning, setH1TKerning] = useState();
  const [h1TLetterCase, setH1TLetterCase] = useState();
  const [h1TSize, setH1TSize] = useState();
  const [h1TWeight, setH1TWeight] = useState();

  const [h2TFont, setH2TFont] = useState();
  const [h2TKerning, setH2TKerning] = useState();
  const [h2TLetterCase, setH2TLetterCase] = useState();
  const [h2TSize, setH2TSize] = useState();
  const [h2TWeight, setH2TWeight] = useState();

  const [h3TFont, setH3TFont] = useState();
  const [h3TKerning, setH3TKerning] = useState();
  const [h3TLetterCase, setH3TLetterCase] = useState();
  const [h3TSize, setH3TSize] = useState();
  const [h3TWeight, setH3TWeight] = useState();

  const [mainBGImageUrl, setMainBGImageUrl] = useState();
  const [mainBGImageID, setMainBGImageID] = useState();

  const [merchThumbnailCornerRadius, setMerchThumbnailCornerRadius] =
    useState();
  const [merchThumbnailBorder, setMerchThumbnailBorder] = useState();

  const [orderBGImageUrl, setOrderBGImageUrl] = useState();
  const [orderBGImageID, setOrderBGImageID] = useState();

  // const [faviconImageUrl, setFaviconImageUrl] = useState();
  // const [faviconImageID, setFaviconImageID] = useState();

  const [pBtnBG, setPBtnBG] = useState();
  const [pBtnBlockPadding, setPBtnBlockPadding] = useState();
  const [pBtnBorder, setPBtnBorder] = useState();
  const [pBtnCornerRadius, setPBtnCornerRadius] = useState();
  const [pBtnInlinePadding, setPBtnInlinePadding] = useState();

  const [pBtnTFont, setPBtnTFont] = useState();
  const [pBtnTKerning, setPBtnTKerning] = useState();
  const [pBtnTLetterCase, setPBtnTLetterCase] = useState();
  const [pBtnTSize, setPBtnTSize] = useState();
  const [pBtnTWeight, setPBtnTWeight] = useState();

  const [sBtnBG, setSBtnBG] = useState();
  const [sBtnBlockPadding, setSBtnBlockPadding] = useState();
  const [sBtnBorder, setSBtnBorder] = useState();
  const [sBtnCornerRadius, setSBtnCornerRadius] = useState();
  const [sBtnInlinePadding, setSBtnInlinePadding] = useState();

  const [sBtnTFont, setSBtnTFont] = useState();
  const [sBtnTKerning, setSBtnTKerning] = useState();
  const [sBtnTLetterCase, setSBtnTLetterCase] = useState();
  const [sBtnTSize, setSBtnTSize] = useState();
  const [sBtnTWeight, setSBtnTWeight] = useState();

  const [selectBorder, setSelectBorder] = useState();
  const [selectTFont, setSelectTFont] = useState();
  const [selectTKerning, setSelectTKerning] = useState();
  const [selectTLetterCase, setSelectTLetterCase] = useState();
  const [selectTSize, setSelectTSize] = useState();
  const [selectTWeight, setSelectTWeight] = useState();

  const [textFieldBorder, setTextFieldBorder] = useState();
  const [textFieldTFont, setTextFieldTFont] = useState();
  const [textFieldTKerning, setTextFieldTKerning] = useState();
  const [textFieldTLetterCase, setTextFieldTLetterCase] = useState();
  const [textFieldTSize, setTextFieldTSize] = useState();
  const [textFieldTWeight, setTextFieldTWeight] = useState();

  // Design System
  const [canvasAccent, setCanvasAccent] = useState();
  const [canvasBackground, setCanvasBackground] = useState();
  const [canvasForeground, setCanvasForeground] = useState();

  const [color1Accent, setColor1Accent] = useState();
  const [color1Background, setColor1Background] = useState();
  const [color1Foreground, setColor1Foreground] = useState();

  const [color2Accent, setColor2Accent] = useState();
  const [color2Background, setColor2Background] = useState();
  const [color2Foreground, setColor2Foreground] = useState();

  const [criticalAccent, setCriticalAccent] = useState();
  const [criticalBackground, setCriticalBackground] = useState();
  const [criticalForeground, setCriticalForeground] = useState();

  const [interactiveAccent, setInteractiveAccent] = useState();
  const [interactiveBackground, setInteractiveBackground] = useState();
  const [interactiveForeground, setInteractiveForeground] = useState();

  const [primaryAccent, setPrimaryAccent] = useState();
  const [primaryBackground, setPrimaryBackground] = useState();
  const [primaryForeground, setPrimaryForeground] = useState();

  const [cornerRadiusIntBase, setCornerRadiusIntBase] = useState();
  const [cornerRadiusIntLarge, setCornerRadiusIntLarge] = useState();
  const [cornerRadiusIntSmall, setCornerRadiusIntSmall] = useState();

  const [tPrimaryFont, setTPrimaryFont] = useState();
  const [tPrimaryWeightBase, setTPrimaryWeightBase] = useState();
  const [tPrimaryWeightBold, setTPrimaryWeightBold] = useState();

  const [tSecondaryFont, setTSecondaryFont] = useState();
  const [tSecondaryWeightBase, setTSecondaryWeightBase] = useState();
  const [tSecondaryWeightBold, setTSecondaryWeightBold] = useState();

  const [tSizeBase, setTSizeBase] = useState();
  const [tSizeRatio, setTSizeRatio] = useState();

  useEffect(() => {
    if (!data) {
      return;
    } else {
      const customizations = data?.checkoutBranding?.customizations;
      const designSystem = data?.checkoutBranding?.designSystem;
      // console.log("customize", data?.checkoutBranding);
      setMerchThumbnailBorder(
        customizations?.merchandiseThumbnail?.border ||
          DEFAULT_SETTINGS.customizations.merchandiseThumbnail.border
      );
      setMerchThumbnailCornerRadius(
        customizations?.merchandiseThumbnail?.cornerRadius ||
          DEFAULT_SETTINGS.customizations.merchandiseThumbnail.cornerRadius
      );
      seCheckboxCornerRadius(
        customizations?.checkbox?.cornerRadius ||
          DEFAULT_SETTINGS.customizations.checkbox.cornerRadius
      );
      setControlBorder(
        customizations?.control?.border ||
          DEFAULT_SETTINGS.customizations.control.border
      );
      setControlColor(
        customizations?.control?.color ||
          DEFAULT_SETTINGS.customizations.control.color
      );
      setControlCornerRadius(
        customizations?.control?.cornerRadius ||
          DEFAULT_SETTINGS.customizations.control.cornerRadius
      );
      setLabelPosition(
        customizations?.control?.labelPosition ||
          DEFAULT_SETTINGS.customizations.control.labelPosition
      );
      setGlobalCornerRadius(
        customizations?.global?.cornerRadius ||
          DEFAULT_SETTINGS.customizations.global.cornerRadius
      );
      setGlobalTKerning(
        customizations?.global?.typography?.kerning ||
          DEFAULT_SETTINGS.customizations.global.typography.kerning
      );
      setGlobalTLetterCase(
        customizations?.global?.typography?.letterCase ||
          DEFAULT_SETTINGS.customizations.global.typography.letterCase
      );
      setHeaderAlignment(
        customizations?.header?.alignment ||
          DEFAULT_SETTINGS.customizations.header.alignment
      );
      setHeaderPosition(
        customizations?.header?.position ||
          DEFAULT_SETTINGS.customizations.header.position
      );
      // headerLogoImage

      setHeaderLogoImageUrl(customizations?.header?.logo?.image?.url || "");
      setHeaderLogoImageID(
        customizations?.header?.logo?.image?.id ||
          DEFAULT_SETTINGS.customizations.header.logo.image.mediaImageId
      );

      setHeaderLogoMaxW(
        customizations?.header?.logo?.maxWidth ||
          DEFAULT_SETTINGS.customizations.header.logo.maxWidth
      );
      setHeaderBannerImageUrl(customizations?.header?.banner?.image?.url || "");
      setHeaderBannerImageID(
        customizations?.header?.banner?.image?.id ||
          DEFAULT_SETTINGS.customizations.header.logo.image.mediaImageId
      );
      setH1TFont(
        customizations?.headingLevel1?.typography?.font ||
          DEFAULT_SETTINGS.customizations.headingLevel1.typography.font
      );
      setH1TKerning(
        customizations?.headingLevel1?.typography?.kerning ||
          DEFAULT_SETTINGS.customizations.headingLevel1.typography.kerning
      );
      setH1TLetterCase(
        customizations?.headingLevel1?.typography?.letterCase ||
          DEFAULT_SETTINGS.customizations.headingLevel1.typography.letterCase
      );
      setH1TLetterCase(
        customizations?.headingLevel1?.typography?.letterCase ||
          DEFAULT_SETTINGS.customizations.headingLevel1.typography.letterCase
      );
      setH1TSize(
        customizations?.headingLevel1?.typography?.size ||
          DEFAULT_SETTINGS.customizations.headingLevel1.typography.size
      );
      setH1TWeight(
        customizations?.headingLevel1?.typography?.weight ||
          DEFAULT_SETTINGS.customizations.headingLevel1.typography.weight
      );
      setH2TFont(
        customizations?.headingLevel2?.typography?.font ||
          DEFAULT_SETTINGS.customizations.headingLevel2.typography.font
      );
      setH2TKerning(
        customizations?.headingLevel2?.typography?.kerning ||
          DEFAULT_SETTINGS.customizations.headingLevel2.typography.kerning
      );
      setH2TLetterCase(
        customizations?.headingLevel2?.typography?.letterCase ||
          DEFAULT_SETTINGS.customizations.headingLevel2.typography.letterCase
      );
      setH2TLetterCase(
        customizations?.headingLevel2?.typography?.letterCase ||
          DEFAULT_SETTINGS.customizations.headingLevel2.typography.letterCase
      );
      setH2TSize(
        customizations?.headingLevel2?.typography?.size ||
          DEFAULT_SETTINGS.customizations.headingLevel2.typography.size
      );
      setH2TWeight(
        customizations?.headingLevel2?.typography?.weight ||
          DEFAULT_SETTINGS.customizations.headingLevel2.typography.weight
      );
      setH3TFont(
        customizations?.headingLevel3?.typography?.font ||
          DEFAULT_SETTINGS.customizations.headingLevel3.typography.font
      );
      setH3TKerning(
        customizations?.headingLevel3?.typography?.kerning ||
          DEFAULT_SETTINGS.customizations.headingLevel3.typography.kerning
      );
      setH3TLetterCase(
        customizations?.headingLevel3?.typography?.letterCase ||
          DEFAULT_SETTINGS.customizations.headingLevel3.typography.letterCase
      );
      setH3TLetterCase(
        customizations?.headingLevel3?.typography?.letterCase ||
          DEFAULT_SETTINGS.customizations.headingLevel3.typography.letterCase
      );
      setH3TSize(
        customizations?.headingLevel3?.typography?.size ||
          DEFAULT_SETTINGS.customizations.headingLevel3.typography.size
      );
      setH3TWeight(
        customizations?.headingLevel3?.typography?.weight ||
          DEFAULT_SETTINGS.customizations.headingLevel3.typography.weight
      );
      setMainBGImageUrl(
        customizations?.main?.backgroundImage?.image?.url || ""
      );
      setMainBGImageID(
        customizations?.main?.backgroundImage?.image?.id ||
          DEFAULT_SETTINGS.customizations.main.backgroundImage.mediaImageId
      );
      setOrderBGImageUrl(
        customizations?.orderSummary?.backgroundImage?.image?.url || ""
      );
      setOrderBGImageID(
        customizations?.orderSummary?.backgroundImage?.image?.id ||
          DEFAULT_SETTINGS.customizations.orderSummary.backgroundImage
            .mediaImageId
      );
      // setFaviconImageUrl(customizations?.favicon?.image?.url || "");
      // setFaviconImageID(
      //   customizations?.favicon?.image?.id ||
      //     DEFAULT_SETTINGS.customizations.favicon.mediaImageId
      // );
      setPBtnBG(
        customizations?.primaryButton?.background ||
          DEFAULT_SETTINGS.customizations.primaryButton.background
      );
      setPBtnBlockPadding(
        customizations?.primaryButton?.blockPadding ||
          DEFAULT_SETTINGS.customizations.primaryButton.blockPadding
      );
      setPBtnBorder(
        customizations?.primaryButton?.border ||
          DEFAULT_SETTINGS.customizations.primaryButton.border
      );
      setPBtnCornerRadius(
        customizations?.primaryButton?.cornerRadius ||
          DEFAULT_SETTINGS.customizations.primaryButton.cornerRadius
      );
      setPBtnInlinePadding(
        customizations?.primaryButton?.inlinePadding ||
          DEFAULT_SETTINGS.customizations.primaryButton.inlinePadding
      );
      setPBtnTFont(
        customizations?.primaryButton?.typography?.font ||
          DEFAULT_SETTINGS.customizations.primaryButton.typography.font
      );
      setPBtnTKerning(
        customizations?.primaryButton?.typography?.kerning ||
          DEFAULT_SETTINGS.customizations.primaryButton.typography.kerning
      );
      setPBtnTLetterCase(
        customizations?.primaryButton?.typography?.letterCase ||
          DEFAULT_SETTINGS.customizations.primaryButton.typography.letterCase
      );
      setPBtnTSize(
        customizations?.primaryButton?.typography?.size ||
          DEFAULT_SETTINGS.customizations.primaryButton.typography.size
      );
      setPBtnTWeight(
        customizations?.primaryButton?.typography?.weight ||
          DEFAULT_SETTINGS.customizations.primaryButton.typography.weight
      );

      setSBtnBG(
        customizations?.secondaryButton?.background ||
          DEFAULT_SETTINGS.customizations.secondaryButton.background
      );
      setSBtnBlockPadding(
        customizations?.secondaryButton?.blockPadding ||
          DEFAULT_SETTINGS.customizations.secondaryButton.blockPadding
      );
      setSBtnBorder(
        customizations?.secondaryButton?.border ||
          DEFAULT_SETTINGS.customizations.secondaryButton.border
      );
      setSBtnCornerRadius(
        customizations?.secondaryButton?.cornerRadius ||
          DEFAULT_SETTINGS.customizations.secondaryButton.cornerRadius
      );
      setSBtnInlinePadding(
        customizations?.secondaryButton?.inlinePadding ||
          DEFAULT_SETTINGS.customizations.secondaryButton.inlinePadding
      );
      setSBtnTFont(
        customizations?.secondaryButton?.typography?.font ||
          DEFAULT_SETTINGS.customizations.secondaryButton.typography.font
      );
      setSBtnTKerning(
        customizations?.secondaryButton?.typography?.kerning ||
          DEFAULT_SETTINGS.customizations.secondaryButton.typography.kerning
      );
      setSBtnTLetterCase(
        customizations?.secondaryButton?.typography?.letterCase ||
          DEFAULT_SETTINGS.customizations.secondaryButton.typography.letterCase
      );
      setSBtnTSize(
        customizations?.secondaryButton?.typography?.size ||
          DEFAULT_SETTINGS.customizations.secondaryButton.typography.size
      );
      setSBtnTWeight(
        customizations?.secondaryButton?.typography?.weight ||
          DEFAULT_SETTINGS.customizations.secondaryButton.typography.weight
      );
      setSelectBorder(
        customizations?.select?.border ||
          DEFAULT_SETTINGS.customizations.select.border
      );
      setSelectTFont(
        customizations?.select?.typography?.font ||
          DEFAULT_SETTINGS.customizations.select.typography.font
      );
      setSelectTKerning(
        customizations?.select?.typography?.kerning ||
          DEFAULT_SETTINGS.customizations.select.typography.kerning
      );
      setSelectTLetterCase(
        customizations?.select?.typography?.letterCase ||
          DEFAULT_SETTINGS.customizations.select.typography.letterCase
      );
      setSelectTSize(
        customizations?.select?.typography?.size ||
          DEFAULT_SETTINGS.customizations.select.typography.size
      );
      setSelectTWeight(
        customizations?.select?.typography?.weight ||
          DEFAULT_SETTINGS.customizations.select.typography.weight
      );
      setTextFieldBorder(
        customizations?.textField?.border ||
          DEFAULT_SETTINGS.customizations.textField.border
      );
      setTextFieldTFont(
        customizations?.textField?.typography?.font ||
          DEFAULT_SETTINGS.customizations.textField.typography.font
      );
      setTextFieldTKerning(
        customizations?.textField?.typography?.kerning ||
          DEFAULT_SETTINGS.customizations.textField.typography.kerning
      );
      setTextFieldTLetterCase(
        customizations?.textField?.typography?.letterCase ||
          DEFAULT_SETTINGS.customizations.textField.typography.letterCase
      );
      setTextFieldTSize(
        customizations?.textField?.typography?.size ||
          DEFAULT_SETTINGS.customizations.textField.typography.size
      );
      setTextFieldTWeight(
        customizations?.textField?.typography?.weight ||
          DEFAULT_SETTINGS.customizations.textField.typography.weight
      );
      // Design System
      setCanvasAccent(
        designSystem?.colorPalette?.canvas?.accent ||
          DEFAULT_SETTINGS.designSystem.colorPalette.canvas.accent
      );
      setCanvasBackground(
        designSystem?.colorPalette?.canvas?.background ||
          DEFAULT_SETTINGS.designSystem.colorPalette.canvas.background
      );
      setCanvasForeground(
        designSystem?.colorPalette?.canvas?.foreground ||
          DEFAULT_SETTINGS.designSystem.colorPalette.canvas.foreground
      );

      setColor1Accent(
        designSystem?.colorPalette?.color1?.accent ||
          DEFAULT_SETTINGS.designSystem.colorPalette.color1.accent
      );
      setColor1Background(
        designSystem?.colorPalette?.color1?.background ||
          DEFAULT_SETTINGS.designSystem.colorPalette.color1.background
      );
      setColor1Foreground(
        designSystem?.colorPalette?.color1?.foreground ||
          DEFAULT_SETTINGS.designSystem.colorPalette.color1.foreground
      );
      setColor2Accent(
        designSystem?.colorPalette?.color2?.accent ||
          DEFAULT_SETTINGS.designSystem.colorPalette.color2.accent
      );
      setColor2Background(
        designSystem?.colorPalette?.color2?.background ||
          DEFAULT_SETTINGS.designSystem.colorPalette.color2.background
      );
      setColor2Foreground(
        designSystem?.colorPalette?.color2?.foreground ||
          DEFAULT_SETTINGS.designSystem.colorPalette.color2.foreground
      );
      setCriticalAccent(
        designSystem?.colorPalette?.critical?.accent ||
          DEFAULT_SETTINGS.designSystem.colorPalette.critical.accent
      );
      setCriticalBackground(
        designSystem?.colorPalette?.critical?.background ||
          DEFAULT_SETTINGS.designSystem.colorPalette.critical.background
      );
      setCriticalForeground(
        designSystem?.colorPalette?.critical?.foreground ||
          DEFAULT_SETTINGS.designSystem.colorPalette.critical.foreground
      );
      setInteractiveAccent(
        designSystem?.colorPalette?.interactive?.accent ||
          DEFAULT_SETTINGS.designSystem.colorPalette.interactive.accent
      );
      setInteractiveBackground(
        designSystem?.colorPalette?.interactive?.background ||
          DEFAULT_SETTINGS.designSystem.colorPalette.interactive.background
      );
      setInteractiveForeground(
        designSystem?.colorPalette?.interactive?.foreground ||
          DEFAULT_SETTINGS.designSystem.colorPalette.interactive.foreground
      );
      setPrimaryAccent(
        designSystem?.colorPalette?.primary?.accent ||
          DEFAULT_SETTINGS.designSystem.colorPalette.primary.accent
      );
      setPrimaryBackground(
        designSystem?.colorPalette?.primary?.background ||
          DEFAULT_SETTINGS.designSystem.colorPalette.primary.background
      );
      setPrimaryForeground(
        designSystem?.colorPalette?.primary?.foreground ||
          DEFAULT_SETTINGS.designSystem.colorPalette.primary.foreground
      );
      setCornerRadiusIntBase(
        designSystem?.cornerRadius?.base ||
          DEFAULT_SETTINGS.designSystem.cornerRadius.base
      );
      setCornerRadiusIntLarge(
        designSystem?.cornerRadius?.large ||
          DEFAULT_SETTINGS.designSystem.cornerRadius.large
      );
      setCornerRadiusIntSmall(
        designSystem?.cornerRadius?.small ||
          DEFAULT_SETTINGS.designSystem.cornerRadius.small
      );

      setTPrimaryFont(
        designSystem?.typography?.primary?.name ||
          DEFAULT_SETTINGS.designSystem.typography.primary.shopifyFontGroup.name
      );
      setTPrimaryWeightBase(
        designSystem?.typography?.primary?.base?.weight ||
          DEFAULT_SETTINGS.designSystem.typography.primary.shopifyFontGroup
            .baseWeight
      );
      setTPrimaryWeightBold(
        designSystem?.typography?.primary?.bold?.weight ||
          DEFAULT_SETTINGS.designSystem.typography.primary.shopifyFontGroup
            .boldWeight
      );

      setTSecondaryFont(
        designSystem?.typography?.secondary?.name ||
          DEFAULT_SETTINGS.designSystem.typography.secondary.shopifyFontGroup
            .name
      );
      setTSecondaryWeightBase(
        designSystem?.typography?.secondary?.base?.weight ||
          DEFAULT_SETTINGS.designSystem.typography.secondary.shopifyFontGroup
            .baseWeight
      );
      setTSecondaryWeightBold(
        designSystem?.typography?.secondary?.bold?.weight ||
          DEFAULT_SETTINGS.designSystem.typography.secondary.shopifyFontGroup
            .boldWeight
      );
      setTSizeBase(
        designSystem?.typography?.size?.base ||
          DEFAULT_SETTINGS.designSystem.typography.size.base
      );
      setTSizeRatio(
        designSystem?.typography?.size?.ratio ||
          DEFAULT_SETTINGS.designSystem.typography.size.ratio
      );
    }
  }, [data]);

  return {
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
  };
}

export function useCustomizeData() {
  const fetch = useAuthenticatedFetch();

  const [loading, setLoading] = useState(false);

  const handleSelectChange = useCallback((value) => setSelected(value), []);
  const [selected, setSelected] = useState();
  const [checkouts, setCheckouts] = useState([]);
  const [settings, setSettings] = useState();

  const [appVersion, setAppVersion] = useState();
  const [storePlan, setStorePlan] = useState();
  const [isNewCheckoutSupported, setIsNewCheckoutSupported] = useState(false);

  const getShopinfo = async () => {
    setLoading(true);
    const res = await fetch("/api/shop-info");
    const json = await res.json();
    if (res.ok) {
      console.log("Shop all info", json);
      setAppVersion(json.userInfo.version);
      setStorePlan(json.userInfo.shopifyPlan);
      // setAppVersion("demo");
      // setStorePlan("Shopify Plus");
      setLoading(false);
    } else {
      console.log('error during getting shop info')
      console.log("error", json);
      setLoading(false);
    }
  };

  const getCheckouts = async () => {
    setLoading(true);
    const res = await fetch("/api/checkouts");
    const json = await res.json();
    if (res.ok) {
      console.log("Checkouts info", json);
      const checkoutOptions = json.checkouts.map(({ id, name }) => ({
        label: name,
        value: id,
      }));
      setCheckouts(checkoutOptions);
      setIsNewCheckoutSupported(true);
      setLoading(false);
    } else {
      setIsNewCheckoutSupported(false);
      console.log("error getting checkouts", json);
      setLoading(false);
    }
  };

  const getCheckoutSettings = async () => {
    const checkoutID = selected.split("/CheckoutProfile/")[1];
    setLoading(true);
    const res = await fetch(`/api/checkout-settings/${checkoutID}`);
    const json = await res.json();
    if (res.ok) {
      setSettings(json.settings.data);
      setLoading(false);
    } else {
      setLoading(false);
      // console.log("error", json);
    }
  };

  useEffect(() => {
    // console.log("getting shop info");
    getShopinfo();
  }, []);

  useEffect(() => {
    if (storePlan === "Developer Preview" || storePlan === "Shopify Plus") {
      console.log("trying to get checkouts");
      getCheckouts();
    }
    getCheckouts();
  }, [storePlan]);

  useEffect(() => {
    if (checkouts) {
      setSelected(checkouts[0]?.value);
      // console.log("defining if you have shopify extensibility feature");
    }
  }, [checkouts]);

  useEffect(() => {
    if (selected) {
      getCheckoutSettings();
    }
  }, [selected]);

  const configsAndMethods = useConfig(settings);
  const {
    merchThumbnailBorder,
    merchThumbnailCornerRadius,
    checkboxCornerRadius,
    controlBorder,
    controlColor,
    controlCornerRadius,
    labelPosition,
    globalCornerRadius,
    globalTKerning,
    globalTLetterCase,
    headerAlignment,
    headerPosition,
    headerLogoMaxW,
    h1TFont,
    h1TKerning,
    h1TLetterCase,
    h1TSize,
    h1TWeight,
    h2TFont,
    h2TKerning,
    h2TLetterCase,
    h2TSize,
    h2TWeight,
    h3TFont,
    h3TKerning,
    h3TLetterCase,
    h3TSize,
    h3TWeight,
    headerLogoImageID,
    pBtnBG,
    pBtnBlockPadding,
    pBtnBorder,
    pBtnCornerRadius,
    pBtnInlinePadding,
    pBtnTFont,
    pBtnTKerning,
    pBtnTLetterCase,
    pBtnTSize,
    pBtnTWeight,
    sBtnBG,
    sBtnBlockPadding,
    sBtnBorder,
    sBtnCornerRadius,
    sBtnInlinePadding,
    sBtnTFont,
    sBtnTKerning,
    sBtnTLetterCase,
    sBtnTSize,
    sBtnTWeight,
    selectBorder,
    selectTFont,
    selectTKerning,
    selectTLetterCase,
    selectTSize,
    selectTWeight,
    textFieldBorder,
    textFieldTFont,
    textFieldTKerning,
    textFieldTWeight,
    textFieldTLetterCase,
    textFieldTSize,
    canvasAccent,
    canvasBackground,
    canvasForeground,
    color1Accent,
    color1Background,
    color1Foreground,
    color2Accent,
    color2Background,
    color2Foreground,
    criticalAccent,
    criticalBackground,
    criticalForeground,
    interactiveAccent,
    interactiveBackground,
    interactiveForeground,
    primaryAccent,
    primaryBackground,
    primaryForeground,
    cornerRadiusIntSmall,
    cornerRadiusIntBase,
    cornerRadiusIntLarge,
    tPrimaryWeightBase,
    tPrimaryWeightBold,
    tPrimaryFont,
    tSecondaryWeightBase,
    tSecondaryWeightBold,
    tSecondaryFont,
    tSizeBase,
    tSizeRatio,
    headerBannerImageID,
    mainBGImageID,
    orderBGImageID,
  } = configsAndMethods;

  const fontVariables = {
    tPrimaryFont,
    tSecondaryFont,
    h1TFont,
    h2TFont,
    h3TFont,
    pBtnTFont,
    sBtnTFont,
    selectTFont,
    textFieldTFont,
  };

  useEffect(() => {
    // console.log("configs and methods");
    setCssVariables(configsAndMethods);
  }, [configsAndMethods]);

  useEffect(() => {
    setFonts(settings, fontVariables);
  }, [
    settings,
    tSecondaryFont,
    h1TFont,
    h2TFont,
    h3TFont,
    pBtnTFont,
    sBtnTFont,
    selectTFont,
    textFieldTFont,
    tPrimaryFont,
  ]);

  // START: A feature to add images if they have been changed, and not to overwrite them if the image has not been changed.

  let headerLogoId =
    headerLogoImageID && headerLogoImageID.includes("MediaImage")
      ? { image: { mediaImageId: headerLogoImageID } }
      : {};

  if (headerLogoImageID && headerLogoImageID === "empty") {
    headerLogoId = { image: { mediaImageId: null } };
  }

  let headerBannerId =
    headerBannerImageID && headerBannerImageID.includes("MediaImage")
      ? { banner: { mediaImageId: headerBannerImageID } }
      : {};

  if (headerBannerImageID && headerBannerImageID === "empty") {
    headerBannerId = { banner: { mediaImageId: null } };
  }

  let mainBgID =
    mainBGImageID && mainBGImageID.includes("MediaImage")
      ? { backgroundImage: { mediaImageId: mainBGImageID } }
      : {};

  if (mainBGImageID && mainBGImageID === "empty") {
    mainBgID = { backgroundImage: { mediaImageId: null } };
  }

  let orderBgID =
    orderBGImageID && orderBGImageID.includes("MediaImage")
      ? { backgroundImage: { mediaImageId: orderBGImageID } }
      : {};

  if (orderBGImageID && orderBGImageID === "empty") {
    orderBgID = { backgroundImage: { mediaImageId: null } };
  }
  // END: A feature to add images if they have been changed, and not to overwrite them if the image has not been changed.

  const values = {
    customizations: {
      checkbox: {
        cornerRadius: checkboxCornerRadius,
      },
      control: {
        border: controlBorder,
        color: controlColor,
        cornerRadius: controlCornerRadius,
        labelPosition: labelPosition,
      },
      favicon: {
        mediaImageId: null,
      },
      global: {
        cornerRadius: globalCornerRadius,
        typography: {
          kerning: globalTKerning,
          letterCase: globalTLetterCase,
        },
      },
      header: {
        alignment: headerAlignment,
        ...headerBannerId,
        logo: {
          ...headerLogoId,
          maxWidth: headerLogoMaxW,
        },
        position: headerPosition,
      },
      headingLevel1: {
        typography: {
          font: h1TFont,
          kerning: h1TKerning,
          letterCase: h1TLetterCase,
          size: h1TSize,
          weight: h1TWeight,
        },
      },
      headingLevel2: {
        typography: {
          font: h2TFont,
          kerning: h2TKerning,
          letterCase: h2TLetterCase,
          size: h2TSize,
          weight: h2TWeight,
        },
      },
      headingLevel3: {
        typography: {
          font: h3TFont,
          kerning: h3TKerning,
          letterCase: h3TLetterCase,
          size: h3TSize,
          weight: h3TWeight,
        },
      },
      main: {
        ...mainBgID,
      },
      merchandiseThumbnail: {
        cornerRadius: merchThumbnailCornerRadius,
        border: merchThumbnailBorder,
      },
      orderSummary: {
        ...orderBgID,
      },
      primaryButton: {
        background: pBtnBG,
        blockPadding: pBtnBlockPadding,
        border: pBtnBorder,
        cornerRadius: pBtnCornerRadius,
        inlinePadding: pBtnInlinePadding,
        typography: {
          font: pBtnTFont,
          kerning: pBtnTKerning,
          letterCase: pBtnTLetterCase,
          size: pBtnTSize,
          weight: pBtnTWeight,
        },
      },
      secondaryButton: {
        background: sBtnBG,
        blockPadding: sBtnBlockPadding,
        border: sBtnBorder,
        cornerRadius: sBtnCornerRadius,
        inlinePadding: sBtnInlinePadding,
        typography: {
          font: sBtnTFont,
          kerning: sBtnTKerning,
          letterCase: sBtnTLetterCase,
          size: sBtnTSize,
          weight: sBtnTWeight,
        },
      },
      select: {
        border: selectBorder,
        typography: {
          font: selectTFont,
          kerning: selectTKerning,
          letterCase: selectTLetterCase,
          size: selectTSize,
          weight: selectTWeight,
        },
      },
      textField: {
        border: textFieldBorder,
        typography: {
          font: textFieldTFont,
          kerning: textFieldTKerning,
          weight: textFieldTWeight,
          letterCase: textFieldTLetterCase,
          size: textFieldTSize,
        },
      },
    },
    designSystem: {
      colorPalette: {
        canvas: {
          accent: canvasAccent,
          background: canvasBackground,
          foreground: canvasForeground,
        },
        color1: {
          accent: color1Accent,
          background: color1Background,
          foreground: color1Foreground,
        },
        color2: {
          accent: color2Accent,
          background: color2Background,
          foreground: color2Foreground,
        },
        critical: {
          accent: criticalAccent,
          background: criticalBackground,
          foreground: criticalForeground,
        },
        interactive: {
          accent: interactiveAccent,
          background: interactiveBackground,
          foreground: interactiveForeground,
        },
        primary: {
          accent: primaryAccent,
          background: primaryBackground,
          foreground: primaryForeground,
        },
      },
      cornerRadius: {
        small: cornerRadiusIntSmall,
        base: cornerRadiusIntBase,
        large: cornerRadiusIntLarge,
      },
      typography: {
        primary: {
          shopifyFontGroup: {
            baseWeight: tPrimaryWeightBase,
            boldWeight: tPrimaryWeightBold,
            name: tPrimaryFont,
          },
        },
        secondary: {
          shopifyFontGroup: {
            baseWeight: tSecondaryWeightBase,
            boldWeight: tSecondaryWeightBold,
            name: tSecondaryFont,
          },
        },
        size: {
          base: tSizeBase,
          ratio: tSizeRatio,
        },
      },
    },
  };

  const setCheckoutSettings = async () => {
    const checkoutID = selected.split("/CheckoutProfile/")[1];

    setLoading(true);
    const res = await fetch(`/api/checkout-settings/${checkoutID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const json = await res.json();
    if (res.ok) {
      setSettings(json.updatedSettings.data.checkoutBrandingUpsert);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const setDefaultCheckoutSettings = async () => {
    const checkoutID = selected.split("/CheckoutProfile/")[1];
    setLoading(true);
    const res = await fetch(`/api/checkout-settings/${checkoutID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(DEFAULT_SETTINGS),
    });
    const json = await res.json();
    if (res.ok) {
      setSettings(json.updatedSettings.data.checkoutBrandingUpsert);
      setLoading(false);
    } else {
      // console.log("error", json);
      setLoading(false);
    }
  };
  return {
    handleSelectChange,
    selected,
    setSelected,
    checkouts,
    setCheckouts,
    settings,
    setSettings,
    loading,
    setLoading,
    setDefaultCheckoutSettings,
    configsAndMethods,
    setCheckoutSettings,
    storePlan,
    isNewCheckoutSupported,
    appVersion,
  };
}
