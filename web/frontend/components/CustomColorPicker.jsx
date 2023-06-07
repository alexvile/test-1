import React from "react";
import { DebounceInput } from "react-debounce-input";

export function CustomColorPicker({ value, disabled, onChange, name }) {
  return (
    <DebounceInput
      style={{ background: value }}
      className={`h-[53px] w-[35px] color-input cursor-pointer rounded-[50%] overflow-hidden ${
        disabled ? "opacity-60 pointer-events-none" : ""
      }`}
      type="color"
      value={value}
      name={name}
      debounceTimeout={300}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
