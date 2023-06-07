export function TooltipWrapper({ children }) {
    return (
      <div className="w-full h-full px-6 py-10 ">
        <div className="flex flex-col max-h-full overflow-auto hide-scroll">
          {children}
        </div>
      </div>
    );
  }
  