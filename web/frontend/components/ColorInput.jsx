import { CustomColorPicker } from "./CustomColorPicker";
export function ColorInput({
  label,
  disabled = false,
  size = "small",
  name,
  onChange,
  value,
}) {
  const labelClasses = `${size === "small" ? "w-[70px]" : "w-[94px]"} ${
    disabled ? "text-disabledMagnifyingStyles" : "text-titleBlack"
  }`;

  return (
    <label className="flex items-center gap-x-4 w-fit max-h-[27px] overflow-hidden ml-[-6px] mb-[18px] last:mb-[0]">
      <div className="custom-color-picker-container">
        <CustomColorPicker
          onChange={onChange}
          value={value || "#000000"}
          name={name}
          disabled={disabled}
        />
      </div>
      <span className={`popup-desc inline-block ml-[-10px] ${labelClasses}`}>{label}</span>

    </label>
  );
}
