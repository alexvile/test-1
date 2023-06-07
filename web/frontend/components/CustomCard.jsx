import { useState, useEffect } from "react";
import { Icon } from "@shopify/polaris";
import { DropdownMinor } from "@shopify/polaris-icons";
export function CustomCard({
  children,
  title,
  disabled,
  onToggle,
  id,
  activeTab,
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    activeTab === id ? setOpen(true) : setOpen(false);
  }, [activeTab]);

  const openedCard = "cursor-pointer";
  const closedCard =
    "border-[#E1E3E5] border-solid rounded-none shadow-none border-b-[1px] last:border-0 cursor-pointer";
  const openedContent =
    "active-content pt-[16px] transition-all duration-250 max-h-[10000px] opacity-1";
  const closedContent = "transition-all max-h-0 pointer-events-none opacity-0";
  const openedIcon = "transition-all duration-250";
  const closedIcon = "transition-all duration-250 rotate-[90deg]";

  return (
    <>
      {disabled ? (
        <div className={closedCard}>
          <div className="pt-[16px] pb-[10px]">
            <div className="flex items-center justify-between">
              <p className="uppercase text-[12px] text-[#D0D0D0] font-semibold">
                {title}
              </p>
              <p className={closedIcon}>
                <Icon source={DropdownMinor} color="base" />
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className={open ? openedCard : closedCard}>
          <div className="relative">
            <p
              onClick={(e) => {
                onToggle(id);
              }}
              className={`${
                open ? openedIcon : closedIcon
              } absolute top-[50%] right-[5px] translate-y-[-50%]`}
            >
              <Icon source={DropdownMinor} color="base" />
            </p>
            <div
              onClick={(e) => {
                if (e.target !== e.currentTarget) return;
                onToggle(id);
              }}
              className="pb-[10px] pt-[16px] flex items-center justify-between uppercase text-[12px] text-[#616A75] font-semibold"
            >
              {title}
            </div>
          </div>
          <div className={open ? openedContent : closedContent}>{children}</div>
        </div>
      )}
    </>
  );
}
