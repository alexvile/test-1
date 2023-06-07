export function setCssVariables(configsAndMethods) {
    const {
      orderBGImageUrl,
      mainBGImageUrl,
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
      headerBannerImageUrl,
    } = configsAndMethods;
    const root = document.documentElement;
  
    root.style.setProperty("--mainBgImage", `url("${mainBGImageUrl || ""}")`);
    root.style.setProperty("--orderBgImage", `url("${orderBGImageUrl || ""} ")`);
    root.style.setProperty(
      "--headerBannerBgImage",
      `url("${headerBannerImageUrl || ""}")`
    );
  
    root.style.setProperty(
      "--base-corner-radius",
      `${cornerRadiusIntBase / 10}rem`
    );
    root.style.setProperty("--large-corner-radius", `${cornerRadiusIntLarge}px`);
    root.style.setProperty("--small-corner-radius", `${cornerRadiusIntSmall}px`);
    root.style.setProperty("--primary-font-family", tPrimaryFont);
    root.style.setProperty("--secondary-font-family", tSecondaryFont);
    root.style.setProperty("--primary-base-weight", tPrimaryWeightBase);
    root.style.setProperty("--primary-bold-weight", tPrimaryWeightBold);
    root.style.setProperty("--secondary-base-weight", tSecondaryWeightBase);
    root.style.setProperty("--secondary-bold-weight", tSecondaryWeightBold);
    root.style.setProperty("--base-font-size", `${tSizeBase}px`);
  
    root.style.setProperty("--canvas-accent-color", canvasAccent);
    root.style.setProperty("--canvas-background-color", canvasBackground);
    root.style.setProperty("--canvas-foreground-color", canvasForeground);
    root.style.setProperty("--canvas-color1-accent", color1Accent);
    root.style.setProperty("--canvas-color1-background", color1Background);
    root.style.setProperty("--canvas-color1-foreground", color1Foreground);
    root.style.setProperty("--canvas-color2-accent", color2Accent);
    root.style.setProperty("--canvas-color2-background", color2Background);
    root.style.setProperty("--canvas-color2-foreground", color2Foreground);
    root.style.setProperty("--canvas-critical-accent", criticalAccent);
    root.style.setProperty("--canvas-critical-background", criticalBackground);
    root.style.setProperty("--canvas-critical-foreground", criticalForeground);
    root.style.setProperty("--canvas-interactive-accent", interactiveAccent);
    root.style.setProperty(
      "--canvas-interactive-background",
      interactiveBackground
    );
    root.style.setProperty(
      "--canvas-interactive-foreground",
      interactiveForeground
    );
    root.style.setProperty("--canvas-primary-accent", primaryAccent);
    root.style.setProperty("--canvas-primary-background", primaryBackground);
    root.style.setProperty("--canvas-primary-foreground", primaryForeground);
  
    // H1 Settings
  
    switch (h1TKerning) {
      case "BASE":
        root.style.setProperty("--h1-letter-spacing", "normal");
        break;
      case "LOOSE":
        root.style.setProperty("--h1-letter-spacing", "0.125em");
        break;
      case "EXTRA_LOOSE":
        root.style.setProperty("--h1-letter-spacing", "0.16em");
        break;
    }
  
    switch (h1TLetterCase) {
      case "NONE":
        root.style.setProperty("--h1-text-transfrom", "normal");
        break;
      case "LOWER":
        root.style.setProperty("--h1-text-transfrom", "lowercase");
        break;
      case "TITLE":
        root.style.setProperty("--h1-text-transfrom", "lapitalize");
        break;
      case "UPPER":
        root.style.setProperty("--h1-text-transfrom", "uppercase");
        break;
    }
  
    switch (h1TSize) {
      case "BASE":
        root.style.setProperty("--h1-font-size", `${tSizeBase / 16}rem`);
        break;
      case "EXTRA_EXTRA_LARGE":
        root.style.setProperty(
          "--h1-font-size",
          `${tSizeRatio ** 3 * (tSizeBase / 16)}rem`
        );
        break;
      case "EXTRA_LARGE":
        root.style.setProperty(
          "--h1-font-size",
          `${tSizeRatio ** 2 * (tSizeBase / 16)}rem`
        );
        break;
      case "LARGE":
        root.style.setProperty(
          "--h1-font-size",
          `${tSizeRatio * (tSizeBase / 16)}rem`
        );
        break;
      case "MEDIUM":
        root.style.setProperty(
          "--h1-font-size",
          `${
            tSizeRatio === 1
              ? 0.875
              : ((tSizeRatio - 1) / 2 + 1) * (tSizeBase / 16)
          }rem`
        );
        break;
      case "SMALL":
        root.style.setProperty(
          "--h1-font-size",
          `${tSizeBase / 16 / tSizeRatio}rem`
        );
        break;
      case "EXTRA_SMALL":
        root.style.setProperty(
          "--h1-font-size",
          `${tSizeBase / 10 / tSizeRatio ** 2}rem`
        );
        break;
    }
  
    root.style.setProperty(
      "--h1-font-weight",
      h1TWeight === "BASE" ? "400" : "700"
    );
  
    // H2 Settings
    root.style.setProperty(
      "--h2-font-family",
      h2TFont === "PRIMARY" ? tPrimaryFont : tSecondaryFont
    );
  
    switch (h2TKerning) {
      case "BASE":
        root.style.setProperty("--h2-letter-spacing", "normal");
        break;
      case "LOOSE":
        root.style.setProperty("--h2-letter-spacing", "0.125em");
        break;
      case "EXTRA_LOOSE":
        root.style.setProperty("--h2-letter-spacing", "0.16em");
        break;
    }
  
    switch (h2TLetterCase) {
      case "NONE":
        root.style.setProperty("--h2-text-transfrom", "normal");
        break;
      case "LOWER":
        root.style.setProperty("--h2-text-transfrom", "lowercase");
        break;
      case "TITLE":
        root.style.setProperty("--h2-text-transfrom", "lapitalize");
        break;
      case "UPPER":
        root.style.setProperty("--h2-text-transfrom", "uppercase");
        break;
    }
  
    switch (h2TSize) {
      case "BASE":
        root.style.setProperty("--h2-font-size", `${tSizeBase / 16}rem`);
        break;
      case "EXTRA_EXTRA_LARGE":
        root.style.setProperty(
          "--h2-font-size",
          `${tSizeRatio ** 3 * (tSizeBase / 16)}rem`
        );
        break;
      case "EXTRA_LARGE":
        root.style.setProperty(
          "--h2-font-size",
          `${tSizeRatio ** 2 * (tSizeBase / 16)}rem`
        );
        break;
      case "LARGE":
        root.style.setProperty(
          "--h2-font-size",
          `${tSizeRatio * (tSizeBase / 16)}rem`
        );
        break;
      case "MEDIUM":
        root.style.setProperty(
          "--h2-font-size",
          `${
            tSizeRatio === 1
              ? 0.875
              : ((tSizeRatio - 1) / 2 + 1) * (tSizeBase / 16)
          }rem`
        );
        break;
      case "SMALL":
        root.style.setProperty(
          "--h2-font-size",
          `${tSizeBase / 16 / tSizeRatio}rem`
        );
        break;
      case "EXTRA_SMALL":
        root.style.setProperty(
          "--h2-font-size",
          `${tSizeBase / 16 / tSizeRatio ** 2}rem`
        );
        break;
    }
  
    root.style.setProperty(
      "--h2-font-weight",
      h2TWeight === "BASE" ? "400" : "700"
    );
  
    // H3 Settings
    root.style.setProperty(
      "--h3-font-family",
      h3TFont === "PRIMARY" ? tPrimaryFont : tSecondaryFont
    );
  
    switch (h3TKerning) {
      case "BASE":
        root.style.setProperty("--h3-letter-spacing", "normal");
        break;
      case "LOOSE":
        root.style.setProperty("--h3-letter-spacing", "0.125em");
        break;
      case "EXTRA_LOOSE":
        root.style.setProperty("--h3-letter-spacing", "0.16em");
        break;
    }
  
    switch (h3TLetterCase) {
      case "NONE":
        root.style.setProperty("--h3-text-transfrom", "normal");
        break;
      case "LOWER":
        root.style.setProperty("--h3-text-transfrom", "lowercase");
        break;
      case "TITLE":
        root.style.setProperty("--h3-text-transfrom", "capitalize");
        break;
      case "UPPER":
        root.style.setProperty("--h3-text-transfrom", "uppercase");
        break;
    }
  
    switch (h3TSize) {
      case "BASE":
        root.style.setProperty("--h3-font-size", `${tSizeBase / 16}rem`);
        break;
      case "EXTRA_EXTRA_LARGE":
        root.style.setProperty(
          "--h3-font-size",
          `${tSizeRatio ** 3 * (tSizeBase / 16)}rem`
        );
        break;
      case "EXTRA_LARGE":
        root.style.setProperty(
          "--h3-font-size",
          `${tSizeRatio ** 2 * (tSizeBase / 16)}rem`
        );
        break;
      case "LARGE":
        root.style.setProperty(
          "--h3-font-size",
          `${tSizeRatio * (tSizeBase / 16)}rem`
        );
        break;
      case "MEDIUM":
        root.style.setProperty(
          "--h3-font-size",
          `${
            tSizeRatio === 1
              ? 0.875
              : ((tSizeRatio - 1) / 2 + 1) * (tSizeBase / 16)
          }rem`
        );
        break;
      case "SMALL":
        root.style.setProperty(
          "--h3-font-size",
          `${tSizeBase / 10 / tSizeRatio}rem`
        );
        break;
      case "EXTRA_SMALL":
        root.style.setProperty(
          "--h3-font-size",
          `${tSizeBase / 10 / tSizeRatio ** 2}rem`
        );
        break;
    }
  
    root.style.setProperty(
      "--h3-font-weight",
      h3TWeight === "BASE" ? "400" : "700"
    );
  
    // Header
  
    switch (headerAlignment) {
      case "START":
        root.style.setProperty("--header-alignment", "flex-start");
        break;
      case "CENTER":
        root.style.setProperty("--header-alignment", "center");
        break;
      case "END":
        root.style.setProperty("--header-alignment", "flex-end");
        break;
    }
    root.style.setProperty("--header-logo-width", `${headerLogoMaxW}px`);
  
    // Global
  
    switch (globalTKerning) {
      case "BASE":
        root.style.setProperty("--global-letter-spacing", "normal");
        break;
      case "LOOSE":
        root.style.setProperty("--global-letter-spacing", "0.125em");
        break;
      case "EXTRA_LOOSE":
        root.style.setProperty("--global-letter-spacing", "0.16em");
        break;
    }
  
    switch (globalTLetterCase) {
      case "NONE":
        root.style.setProperty("--global-text-transfrom", "normal");
        break;
      case "LOWER":
        root.style.setProperty("--global-text-transfrom", "lowercase");
        break;
      case "TITLE":
        root.style.setProperty("--global-text-transfrom", "capitalize");
        break;
      case "UPPER":
        root.style.setProperty("--global-text-transfrom", "uppercase");
        break;
    }
  
    // Control
    root.style.setProperty(
      "--control-border-width",
      controlBorder === "FULL" ? "1px" : "0"
    );
    switch (controlColor) {
      case "COLOR1":
        root.style.setProperty("--control-bg-color", color1Background);
        root.style.setProperty("--control-color", color1Foreground);
        break;
      case "COLOR2":
        root.style.setProperty("--control-bg-color", color2Background);
        root.style.setProperty("--control-color", color2Foreground);
        break;
      case "TRANSPARENT":
        root.style.setProperty("--control-bg-color", "transparent");
        root.style.setProperty("--control-color", color1Foreground);
        root.style.setProperty("--control-bg-color1", color1Background);
        root.style.setProperty("--control-bg-color2", color2Background);
        root.style.setProperty("--control-color1", color1Foreground);
        root.style.setProperty("--control-color2", color2Foreground);
  
        // root.style.setProperty('--control-color', 'transparent')
        break;
    }
  
    switch (controlCornerRadius) {
      case "BASE":
        root.style.setProperty(
          "--control-border-radius",
          `${cornerRadiusIntBase / 10}rem`
        );
        break;
      case "LARGE":
        root.style.setProperty(
          "--control-border-radius",
          `${cornerRadiusIntLarge / 10}rem`
        );
        break;
      case "SMALL":
        root.style.setProperty(
          "--control-border-radius",
          `${cornerRadiusIntSmall / 10}rem`
        );
        break;
      case "NONE":
        root.style.setProperty("--control-border-radius", "none");
        break;
    }
  
    switch (labelPosition) {
      case "OUTSIDE":
        root.style.setProperty("--control-label-position", "static");
        break;
      case "INSIDE":
        root.style.setProperty("--control-label-position", "absolute");
        root.style.setProperty("--control-label-top", "2px");
        root.style.setProperty("--control-label-left", "11px");
  
        break;
    }
  
    //Checkbox
  
    switch (checkboxCornerRadius) {
      case "BASE":
        root.style.setProperty(
          "--checkbox-border-radius",
          `${cornerRadiusIntBase / 16}rem`
        );
        break;
      case "LARGE":
        root.style.setProperty(
          "--checkbox-border-radius",
          `${cornerRadiusIntLarge / 16}rem`
        );
        break;
      case "SMALL":
        root.style.setProperty(
          "--checkbox-border-radius",
          `${cornerRadiusIntSmall / 16}rem`
        );
        break;
      case "NONE":
        root.style.setProperty("--checkbox-border-radius", "none");
        break;
    }
  
    // Primary button
  
    switch (pBtnBG) {
      case "SOLID":
        root.style.setProperty("--pb-bcg-color", primaryBackground);
        root.style.setProperty("--pb-text-color", primaryForeground);
        break;
      case "NONE":
        root.style.setProperty("--pb-bcg-color", "transparent");
        root.style.setProperty("--pb-text-color", primaryBackground);
        break;
    }
  
    switch (pBtnBlockPadding) {
      case "BASE":
        root.style.setProperty("--pb-vertical-padding", "1.4rem");
        break;
      case "EXTRA_LOOSE":
        root.style.setProperty("--pb-vertical-padding", "4.8rem");
        break;
      case "EXTRA_TIGHT":
        root.style.setProperty("--pb-vertical-padding", "0.6rem");
        break;
      case "LOOSE":
        root.style.setProperty("--pb-vertical-padding", "2.7rem");
        break;
      case "TIGHT":
        root.style.setProperty("--pb-vertical-padding", "1.2rem");
        break;
      case "NONE":
        root.style.setProperty("--pb-vertical-padding", "0");
        break;
    }
  
    switch (pBtnInlinePadding) {
      case "BASE":
        root.style.setProperty("--pb-horizontal-padding", "1.4rem");
        break;
      case "EXTRA_LOOSE":
        root.style.setProperty("--pb-horizontal-padding", "4.8rem");
        break;
      case "EXTRA_TIGHT":
        root.style.setProperty("--pb-horizontal-padding", "0.6rem");
        break;
      case "LOOSE":
        root.style.setProperty("--pb-horizontal-padding", "2.7rem");
        break;
      case "TIGHT":
        root.style.setProperty("--pb-horizontal-padding", "1.2rem");
        break;
      case "NONE":
        root.style.setProperty("--pb-horizontal-padding", "0");
        break;
    }
  
    root.style.setProperty(
      "--pb-border-width",
      pBtnBorder === "FULL" ? "1px" : "0"
    );
  
    switch (pBtnCornerRadius) {
      case "BASE":
        root.style.setProperty(
          "--pb-border-radius",
          `${cornerRadiusIntBase / 10}rem`
        );
        break;
      case "LARGE":
        root.style.setProperty(
          "--pb-border-radius",
          `${cornerRadiusIntLarge / 10}rem`
        );
        break;
      case "SMALL":
        root.style.setProperty(
          "--pb-border-radius",
          `${cornerRadiusIntSmall / 10}rem`
        );
        break;
      case "NONE":
        root.style.setProperty("--pb-border-radius", "none");
        break;
    }
  
    switch (pBtnTKerning) {
      case "BASE":
        root.style.setProperty("--pb-letter-spacing", "normal");
        break;
      case "LOOSE":
        root.style.setProperty("--pb-letter-spacing", "0.125em");
        break;
      case "EXTRA_LOOSE":
        root.style.setProperty("--pb-letter-spacing", "0.16em");
        break;
    }
  
    switch (pBtnTLetterCase) {
      case "NONE":
        root.style.setProperty("--pb-text-transfrom", "normal");
        break;
      case "LOWER":
        root.style.setProperty("--pb-text-transfrom", "lowercase");
        break;
      case "TITLE":
        root.style.setProperty("--pb-text-transfrom", "capitalize");
        break;
      case "UPPER":
        root.style.setProperty("--pb-text-transfrom", "uppercase");
        break;
    }
  
    switch (pBtnTSize) {
      case "BASE":
        root.style.setProperty("--pb-font-size", `${tSizeBase / 16}rem`);
        break;
      case "EXTRA_EXTRA_LARGE":
        root.style.setProperty(
          "--pb-font-size",
          `${tSizeRatio ** 3 * (tSizeBase / 16)}rem`
        );
        break;
      case "EXTRA_LARGE":
        root.style.setProperty(
          "--pb-font-size",
          `${tSizeRatio ** 2 * (tSizeBase / 16)}rem`
        );
        break;
      case "LARGE":
        root.style.setProperty(
          "--pb-font-size",
          `${tSizeRatio * (tSizeBase / 16)}rem`
        );
        break;
      case "MEDIUM":
        root.style.setProperty(
          "--pb-font-size",
          `${
            tSizeRatio === 1
              ? 0.875
              : ((tSizeRatio - 1) / 2 + 1) * (tSizeBase / 16)
          }rem`
        );
        break;
      case "SMALL":
        root.style.setProperty(
          "--pb-font-size",
          `${tSizeBase / 16 / tSizeRatio}rem`
        );
        break;
      case "EXTRA_SMALL":
        root.style.setProperty(
          "--pb-font-size",
          `${tSizeBase / 16 / tSizeRatio ** 2}rem`
        );
        break;
    }
  
    root.style.setProperty(
      "--pb-font-weight",
      pBtnTWeight === "BASE" ? "400" : "700"
    );
  
    // Secondary button
  
    switch (sBtnBG) {
      case "SOLID":
        root.style.setProperty("--sb-bcg-color", primaryBackground);
        root.style.setProperty("--sb-text-color", primaryForeground);
        break;
      case "NONE":
        root.style.setProperty("--sb-bcg-color", "transparent");
        root.style.setProperty("--sb-text-color", primaryBackground);
        break;
    }
  
    switch (sBtnBlockPadding) {
      case "BASE":
        root.style.setProperty("--sb-vertical-padding", "1.8rem");
        break;
      case "EXTRA_LOOSE":
        root.style.setProperty("--sb-vertical-padding", "4.8rem");
        break;
      case "EXTRA_TIGHT":
        root.style.setProperty("--sb-vertical-padding", "0.6rem");
        break;
      case "LOOSE":
        root.style.setProperty("--sb-vertical-padding", "2.7rem");
        break;
      case "TIGHT":
        root.style.setProperty("--sb-vertical-padding", "1.2rem");
        break;
      case "NONE":
        root.style.setProperty("--sb-vertical-padding", "0");
        break;
    }
  
    switch (sBtnInlinePadding) {
      case "BASE":
        root.style.setProperty("--sb-horizontal-padding", "1.8rem");
        break;
      case "EXTRA_LOOSE":
        root.style.setProperty("--sb-horizontal-padding", "4.8rem");
        break;
      case "EXTRA_TIGHT":
        root.style.setProperty("--sb-horizontal-padding", "0.6rem");
        break;
      case "LOOSE":
        root.style.setProperty("--sb-horizontal-padding", "2.7rem");
        break;
      case "TIGHT":
        root.style.setProperty("--sb-horizontal-padding", "1.2rem");
        break;
      case "NONE":
        root.style.setProperty("--sb-horizontal-padding", "0");
        break;
    }
  
    root.style.setProperty(
      "--sb-border-width",
      sBtnBorder === "FULL" ? "1px" : "0"
    );
  
    switch (pBtnCornerRadius) {
      case "BASE":
        root.style.setProperty(
          "--sb-border-radius",
          `${cornerRadiusIntBase / 10}rem`
        );
        break;
      case "LARGE":
        root.style.setProperty(
          "--sb-border-radius",
          `${cornerRadiusIntLarge / 10}rem`
        );
        break;
      case "SMALL":
        root.style.setProperty(
          "--sb-border-radius",
          `${cornerRadiusIntSmall / 10}rem`
        );
        break;
      case "NONE":
        root.style.setProperty("--sb-border-radius", "none");
        break;
    }
  
    switch (pBtnTKerning) {
      case "BASE":
        root.style.setProperty("--sb-letter-spacing", "normal");
        break;
      case "LOOSE":
        root.style.setProperty("--sb-letter-spacing", "0.125em");
        break;
      case "EXTRA_LOOSE":
        root.style.setProperty("--sb-letter-spacing", "0.16em");
        break;
    }
  
    switch (sBtnTLetterCase) {
      case "NONE":
        root.style.setProperty("--sb-text-transfrom", "normal");
        break;
      case "LOWER":
        root.style.setProperty("--sb-text-transfrom", "lowercase");
        break;
      case "TITLE":
        root.style.setProperty("--sb-text-transfrom", "capitalize");
        break;
      case "UPPER":
        root.style.setProperty("--sb-text-transfrom", "uppercase");
        break;
    }
  
    switch (sBtnTSize) {
      case "BASE":
        root.style.setProperty("--sb-font-size", `${tSizeBase / 16}rem`);
        break;
      case "EXTRA_EXTRA_LARGE":
        root.style.setProperty(
          "--sb-font-size",
          `${tSizeRatio ** 3 * (tSizeBase / 16)}rem`
        );
        break;
      case "EXTRA_LARGE":
        root.style.setProperty(
          "--sb-font-size",
          `${tSizeRatio ** 2 * (tSizeBase / 16)}rem`
        );
        break;
      case "LARGE":
        root.style.setProperty(
          "--sb-font-size",
          `${tSizeRatio * (tSizeBase / 16)}rem`
        );
        break;
      case "MEDIUM":
        root.style.setProperty(
          "--sb-font-size",
          `${
            tSizeRatio === 1
              ? 0.875
              : ((tSizeRatio - 1) / 2 + 1) * (tSizeBase / 16)
          }rem`
        );
        break;
      case "SMALL":
        root.style.setProperty(
          "--sb-font-size",
          `${tSizeBase / 16 / tSizeRatio}rem`
        );
        break;
      case "EXTRA_SMALL":
        root.style.setProperty(
          "--sb-font-size",
          `${tSizeBase / 16 / tSizeRatio ** 2}rem`
        );
        break;
    }
  
    root.style.setProperty(
      "--sb-font-weight",
      sBtnTWeight === "BASE" ? "400" : "700"
    );
  
    // Select
  
    root.style.setProperty(
      "--select-border-width",
      selectBorder === "FULL" ? "1px" : "0"
    );
  
    switch (selectTKerning) {
      case "BASE":
        root.style.setProperty("--select-letter-spacing", "normal");
        break;
      case "LOOSE":
        root.style.setProperty("--select-letter-spacing", "0.125em");
        break;
      case "EXTRA_LOOSE":
        root.style.setProperty("--select-letter-spacing", "0.16em");
        break;
    }
  
    switch (selectTLetterCase) {
      case "NONE":
        root.style.setProperty("--select-text-transfrom", "normal");
        break;
      case "LOWER":
        root.style.setProperty("--select-text-transfrom", "lowercase");
        break;
      case "TITLE":
        root.style.setProperty("--select-text-transfrom", "capitalize");
        break;
      case "UPPER":
        root.style.setProperty("--select-text-transfrom", "uppercase");
        break;
    }
  
    switch (selectTSize) {
      case "BASE":
        root.style.setProperty("--select-font-size", `${tSizeBase / 16}rem`);
        break;
      case "EXTRA_EXTRA_LARGE":
        root.style.setProperty(
          "--select-font-size",
          `${tSizeRatio ** 3 * (tSizeBase / 16)}rem`
        );
        break;
      case "EXTRA_LARGE":
        root.style.setProperty(
          "--select-font-size",
          `${tSizeRatio ** 2 * (tSizeBase / 16)}rem`
        );
        break;
      case "LARGE":
        root.style.setProperty(
          "--select-font-size",
          `${tSizeRatio * (tSizeBase / 16)}rem`
        );
        break;
      case "MEDIUM":
        root.style.setProperty(
          "--select-font-size",
          `${
            tSizeRatio === 1
              ? 0.875
              : ((tSizeRatio - 1) / 2 + 1) * (tSizeBase / 16)
          }rem`
        );
        break;
      case "SMALL":
        root.style.setProperty(
          "--select-font-size",
          `${tSizeBase / 16 / tSizeRatio}rem`
        );
        break;
      case "EXTRA_SMALL":
        root.style.setProperty(
          "--select-font-size",
          `${tSizeBase / 16 / tSizeRatio ** 2}rem`
        );
        break;
    }
  
    root.style.setProperty(
      "--select-font-weight",
      selectTWeight === "BASE" ? "400" : "700"
    );
  
    // Text field
  
    root.style.setProperty(
      "--text-field-border-width",
      textFieldBorder === "FULL" ? "1px" : "0"
    );
  
    switch (textFieldTKerning) {
      case "BASE":
        root.style.setProperty("--text-field-letter-spacing", "normal");
        break;
      case "LOOSE":
        root.style.setProperty("--text-field-letter-spacing", "0.125em");
        break;
      case "EXTRA_LOOSE":
        root.style.setProperty("--text-field-letter-spacing", "0.16em");
        break;
    }
  
    switch (textFieldTLetterCase) {
      case "NONE":
        root.style.setProperty("--text-field-text-transfrom", "normal");
        break;
      case "LOWER":
        root.style.setProperty("--text-field-text-transfrom", "lowercase");
        break;
      case "TITLE":
        root.style.setProperty("--text-field-text-transfrom", "capitalize");
        break;
      case "UPPER":
        root.style.setProperty("--text-field-text-transfrom", "uppercase");
        break;
    }
  
    switch (textFieldTSize) {
      case "BASE":
        root.style.setProperty("--text-field-font-size", `${tSizeBase / 16}rem`);
        break;
      case "EXTRA_EXTRA_LARGE":
        root.style.setProperty(
          "--text-field-font-size",
          `${tSizeRatio ** 3 * (tSizeBase / 16)}rem`
        );
        break;
      case "EXTRA_LARGE":
        root.style.setProperty(
          "--text-field-font-size",
          `${tSizeRatio ** 2 * (tSizeBase / 16)}rem`
        );
        break;
      case "LARGE":
        root.style.setProperty(
          "--text-field-font-size",
          `${tSizeRatio * (tSizeBase / 16)}rem`
        );
        break;
      case "MEDIUM":
        root.style.setProperty(
          "--text-field-font-size",
          `${
            tSizeRatio === 1
              ? 0.875
              : ((tSizeRatio - 1) / 2 + 1) * (tSizeBase / 16)
          }rem`
        );
        break;
      case "SMALL":
        root.style.setProperty(
          "--text-field-font-size",
          `${tSizeBase / 16 / tSizeRatio}rem`
        );
        break;
      case "EXTRA_SMALL":
        root.style.setProperty(
          "--text-field-font-size",
          `${tSizeBase / 16 / tSizeRatio ** 2}rem`
        );
        break;
    }
  
    root.style.setProperty(
      "--text-field-font-weight",
      textFieldTWeight === "BASE" ? "400" : "700"
    );
  
    // Merchandise thumbnail
  
    root.style.setProperty(
      "--merch-border-width",
      merchThumbnailBorder === "FULL" ? "1px" : "0"
    );
  
    switch (merchThumbnailCornerRadius) {
      case "BASE":
        root.style.setProperty(
          "--merch-border-radius",
          `${cornerRadiusIntBase / 10}rem`
        );
        break;
      case "LARGE":
        root.style.setProperty(
          "--merch-border-radius",
          `${cornerRadiusIntLarge / 10}rem`
        );
        break;
      case "SMALL":
        root.style.setProperty(
          "--merch-border-radius",
          `${cornerRadiusIntSmall / 10}rem`
        );
        break;
      case "NONE":
        root.style.setProperty("--merch-border-radius", "none");
        break;
    }
  }
  