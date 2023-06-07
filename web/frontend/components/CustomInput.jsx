import { Svg } from "../svg/svg";

export function CustomInput({
  labelPosition,
  controlColor,
  type,
  defaultValue,
  placeholder,
  icon,
}) {
  const input = (
    <input
      type={type}
      defaultValue={defaultValue}
      className={`border-opacity-90 pl-[9.5px] pr-3  text-field-font-family text-field-text-transfrom focus:border-canvas-interactive-foreground  outline-none font-text-field-font-weight  text-text-field-font-size tracking-text-field-letter-spacing border-text-field-border-width  border-base-corner-radius rounded-control-border-radius w-full 
				${labelPosition === "OUTSIDE" ? "pt-3 pb-3" : "pt-5 pb-[7px]"}`}
      style={{
        background:
          controlColor === "TRANSPARENT"
            ? "var(--control-bg-color1)"
            : "var(--control-bg-color)",
        color:
          controlColor === "TRANSPARENT"
            ? "var(--control-color1)"
            : "var(--control-color)",
      }}
    />
  );

  return (
    <label className="relative">
      <span
        //  className="z-10 block  control-label-position global-text-transfrom  absolute text-[#707070]   tracking-global-letter-spacing"
        className={`z-10 block  control-label-position global-text-transfrom  absolute  opacity-50  tracking-global-letter-spacing
         ${
           labelPosition === "OUTSIDE"
             ? "pb-1 text-canvas-color1-foreground"
             : "text-control-color"
         }
        `}
      >
        {placeholder}
      </span>
      {icon ? (
        <div className="relative">
          {input}
          <div className="h-fit top-1/2 -translate-y-1/2 min-text-field-font-size absolute  right-[11px] flex items-center  [&>span]:w-[17px] [&>span]:h-[17px]">
            <span className="opacity-50 text-control-color w-[15px] h-[15px]">
              <Svg icon="search-icon" />
            </span>
          </div>
        </div>
      ) : (
        input
      )}
    </label>
  );
}
