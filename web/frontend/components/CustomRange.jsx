import { DebounceInput } from "react-debounce-input";

export function CustomRange({ handler, value, label, id, min, max, step }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div className="flex justify-between w-full">
        <div className="w-[calc(100%-20px)]">
          <DebounceInput
            className="w-full"
            type="range"
            id={id}
            name={id}
            // list="markers"
            value={value}
            min={min}
            max={max}
            step={step}
            debounceTimeout={300}
            onChange={(event) => handler(Number(event.target.value))}
          />
          {/* <datalist
            id="markers"
            className="flex flex-row justify-between w-full"
          >
            <option value="1" label="1"></option>
            <option value="30" label="30"></option>
          </datalist> */}
        </div>
        <p className="ml-[6px]">{value}</p>
      </div>
    </div>
  );
}
