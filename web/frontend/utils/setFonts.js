export function setFonts(data, fontVariables) {
    const designSystem = data?.checkoutBranding?.designSystem;
    const {
      tPrimaryFont,
      tSecondaryFont,
      h1TFont,
      h2TFont,
      h3TFont,
      pBtnTFont,
      sBtnTFont,
      selectTFont,
      textFieldTFont,
    } = fontVariables;
  
    const root = document.documentElement;
  
    let primaryBaseFontUrl =
      designSystem?.typography.primary.base.sources?.split(",")[2];
    let primaryBaseFontName = designSystem?.typography.primary.name;
    let newStyle = document.createElement("style");
    newStyle.appendChild(
      document.createTextNode(
        "@font-face {\n font-family: '" +
          primaryBaseFontName +
          "';\n src: " +
          primaryBaseFontUrl +
          ";\n} "
      )
    );
    document.head.appendChild(newStyle);
  
    let primaryBoldFontUrl =
      designSystem?.typography.primary.bold.sources?.split(",")[2];
    let primaryBoldFontName = designSystem?.typography.primary.name;
    let newStyle2 = document.createElement("style");
    newStyle.appendChild(
      document.createTextNode(
        "@font-face {\n font-family: '" +
          primaryBoldFontName +
          "';\n src: " +
          primaryBoldFontUrl +
          ";\n} "
      )
    );
    document.head.appendChild(newStyle2);
  
    let secondaryBaseFontUrl =
      designSystem?.typography.secondary.base.sources?.split(",")[2];
    let secondaryBaseFontName = designSystem?.typography.secondary.name;
    let newStyle3 = document.createElement("style");
    newStyle.appendChild(
      document.createTextNode(
        "@font-face {\n font-family: '" +
          secondaryBaseFontName +
          "';\n src: " +
          secondaryBaseFontUrl +
          ";\n} "
      )
    );
    document.head.appendChild(newStyle3);
  
    let secondaryBoldFontUrl =
      designSystem?.typography.secondary.base.sources?.split(",")[2];
    let secondaryBoldFontName = designSystem?.typography.secondary.name;
    let newStyle4 = document.createElement("style");
    newStyle.appendChild(
      document.createTextNode(
        "@font-face {\n font-family: '" +
          secondaryBoldFontName +
          "';\n src: " +
          secondaryBoldFontUrl +
          ";\n} "
      )
    );
    document.head.appendChild(newStyle4);
  
    root.style.setProperty("--primary-font-family", tPrimaryFont);
    root.style.setProperty("--secondary-font-family", tSecondaryFont);
    root.style.setProperty(
      "--h1-font-family",
      h1TFont === "PRIMARY" ? tPrimaryFont : tSecondaryFont
    );
    root.style.setProperty(
      "--h2-font-family",
      h2TFont === "PRIMARY" ? tPrimaryFont : tSecondaryFont
    );
    root.style.setProperty(
      "--h3-font-family",
      h3TFont === "PRIMARY" ? tPrimaryFont : tSecondaryFont
    );
    root.style.setProperty(
      "--pb-font-family",
      pBtnTFont === "PRIMARY" ? tPrimaryFont : tSecondaryFont
    );
    root.style.setProperty(
      "--sb-font-family",
      sBtnTFont === "PRIMARY" ? tPrimaryFont : tSecondaryFont
    );
    root.style.setProperty(
      "--select-font-family",
      selectTFont === "PRIMARY" ? tPrimaryFont : tSecondaryFont
    );
    root.style.setProperty(
      "--text-field-font-family",
      textFieldTFont === "PRIMARY" ? tPrimaryFont : tSecondaryFont
    );
  }
  