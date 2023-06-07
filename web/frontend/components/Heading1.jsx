import { Image } from "@shopify/polaris";
export function Heading1({ headingTitle, controlColor, headerLogoImageUrl }) {
  return (
    <div className="flex header-alignment">
      <div className="w-header-logo-width">
        {headerLogoImageUrl ? (
          <Image source={headerLogoImageUrl} />
        ) : (
          <h1
            className={`flex header-alignment h1-font-family h1--text-transfrom font-h1-font-weight text-h1-font-size tracking-h1-letter-spacing-base ${
              controlColor === "TRANSPARENT" ? " text-control-color1" : ""
            }
    `}
          >
            {headingTitle}
          </h1>
        )}
      </div>
    </div>
  );
}
