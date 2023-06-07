import { Image } from "@shopify/polaris";
import { Svg } from "../svg/svg";
import { CustomInput } from "./CustomInput";
import { Heading1 } from "./Heading1";
import { Heading2 } from "./Heading2";

import iconImg from "../assets/checkout-icon.png";
import appImg from "../assets/app-img.png";
import { memo } from "react";

export const Checkout = memo(function Checkout({
  labelPosition,
  controlColor,
  headerPosition,
  headerLogoImageUrl,
}) {
  return (
    <div className="w-full overflow-scroll ">
      <div className="min-w-[900px]">
        <div
          className={` w-full bg-header-bg-banner px-[40px] pb-7 pt-10 bg-canvas-background-color bg-center bg-cover ${
            headerPosition === "START"
              ? "block text-canvas-foreground-color"
              : "hidden"
          }
        `}
        >
          {headerPosition === "START" && (
            <div className="w-[141px] mb-[20px]">
              <Image source={iconImg} />
            </div>
          )}
          <Heading1
            headingTitle="Store name"
            headerLogoImageUrl={headerLogoImageUrl}
          />
        </div>

        <div>
          {/* w-full overflow-scroll */}
          <div className="flex flex-row antialiased text-base-font-size font-primary-font-family">
            <div
              className={`px-10 pb-5  pt-7 bg-canvas-color1-background border-r-[1px] border-[#DEDEDE] w-[55%] text-canvas-color1-foreground bg-main-bg-image`}
            >
              {headerPosition === "INLINE" && (
                <div className="w-[141px] mb-[20px]">
                  <Image source={iconImg} />
                </div>
              )}

              {headerPosition === "INLINE_SECONDARY" && (
                <div className="w-[141px] mb-[20px]">
                  <Image source={iconImg} />
                </div>
              )}
              <header>
                <div
                  className={` pb-2  ${
                    headerPosition === "INLINE" ? "flex flex-col " : "hidden"
                  }
              `}
                >
                  <Heading1
                    headingTitle="Store name"
                    headerLogoImageUrl={headerLogoImageUrl}
                  />
                </div>
              </header>

              <nav className="pb-4 cursor-pointer global-text-transfrom tracking-global-letter-spacing">
                <div
                  className={`flex flex-wrap justify-start gap-1 lg:gap-[14px] text-base-font-size ${
                    headerPosition === "INLINE" ? "header-alignment" : ""
                  }`}
                >
                  <div className="flex items-center justify-center font-semibold text-control-color1">
                    <p className=" mr-[9px] font-semibold">Information</p>
                    <span className="h-full check-right"></span>
                  </div>

                  <div className="flex items-center justify-center opacity-50 text-control-color1">
                    {/*  bg-canvas-interactive-background  text-canvas-interactive-foreground*/}
                    <p className="ml-1 mr-[9px] lg:ml-0">Shipping</p>
                    <span className="h-full check-right"></span>
                  </div>

                  <div className="ml-1 opacity-50 lg:ml-0 text-control-color1">
                    Payment
                  </div>
                </div>
              </nav>

              {/* Start form */}

              <div>
                <Heading2 title="Contact" />

                <div className="flex flex-col gap-[16px] relative">
                  <CustomInput
                    type="email"
                    defaultValue="support@mgroupweb.com"
                    placeholder={"Enter an email or phone number"}
                    labelPosition={labelPosition}
                    controlColor={controlColor}
                  />

                  <div className="flex flex-row ">
                    <label className="block custom-checkbox">
                      <input className="visually-hidden " type="checkbox" />
                      <span className="checker bg-control-bg-color focus:border-canvas-interactive-foreground focus:bg-canvas-interactive-foreground"></span>
                      <p className="pl-[11px] global-text-transfrom tracking-global-letter-spacing">
                        Email me with news and offers
                      </p>
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <form method="POST" className="flex flex-col gap-y-[16px]">
                  <Heading2 title="Shipping address" />

                  <label className="relative">
                    <span
                      className={`z-10  control-label-position global-text-transfrom  absolute text-[#707070] opacity-50 tracking-global-letter-spacing  ${
                        labelPosition === "OUTSIDE"
                          ? "text-canvas-color1-foreground"
                          : "text-control-color"
                      }`}
                    >
                      Country/region
                    </span>
                    <div
                      className={`${
                        labelPosition === "OUTSIDE" ? "pt-1" : ""
                      } relative`}
                    >
                      <select
                        name="countryCode"
                        className={`select-font-family  select-text-transfrom  border-[#DEDEDE] rounded-control-border-radius w-full bg-control-bg-color pl-[10px] pr-3 pb-3 focus:border-canvas-interactive-foreground outline-none   font-select-font-weight text-select-font-size  tracking-select-letter-spacing border-select-border-width text-control-color
                ${labelPosition === "OUTSIDE" ? "pt-3" : "pt-5"}`}
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
                      >
                        <option value="UA">Ukraine</option>
                        <option disabled="" value="">
                          ---
                        </option>
                        <option value="AU">Australia</option>
                        <option value="AT">Austria</option>
                        <option value="BE">Belgium</option>
                        <option value="CA">Canada</option>
                        <option value="CZ">Czechia</option>
                        <option value="DK">Denmark</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        <option value="HK">Hong Kong SAR</option>
                        <option value="IE">Ireland</option>
                        <option value="IL">Israel</option>
                        <option value="IT">Italy</option>
                        <option value="JP">Japan</option>
                        <option value="MY">Malaysia</option>
                        <option value="NL">Netherlands</option>
                        <option value="NZ">New Zealand</option>
                        <option value="NO">Norway</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="SG">Singapore</option>
                        <option value="KR">South Korea</option>
                        <option value="ES">Spain</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="UA">Ukraine</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="GB">United Kingdom</option>
                        <option value="US">United States</option>
                      </select>

                      <div className="h-fit top-1/2 -translate-y-1/2 absolute  right-[11px] flex items-center  [&>span]:w-[17px] [&>span]:h-[17px] z-0 pointer-events-none">
                        <span className="text-control-color">
                          <Svg icon="chevron-down" />
                        </span>
                      </div>
                    </div>
                  </label>

                  <div className=" grid grid-cols-2 gap-[14px] ">
                    <CustomInput
                      type="text"
                      defaultValue="Dev"
                      placeholder={"First name"}
                      labelPosition={labelPosition}
                      controlColor={controlColor}
                    />

                    <CustomInput
                      type="text"
                      defaultValue="Dev"
                      placeholder={"Last name"}
                      labelPosition={labelPosition}
                      controlColor={controlColor}
                    />
                  </div>

                  <div className="relative">
                    <CustomInput
                      type="text"
                      defaultValue="13 Trypilska Street"
                      placeholder={"Address"}
                      labelPosition={labelPosition}
                      icon={true}
                      controlColor={controlColor}
                    />
                  </div>

                  <CustomInput
                    type="text"
                    defaultValue="404"
                    placeholder={"Apartment, suite, etc. (optional)"}
                    labelPosition={labelPosition}
                    controlColor={controlColor}
                  />

                  <div className="grid grid-cols-2 gap-[14px] ">
                    <CustomInput
                      type="text"
                      defaultValue="Zhytomyr"
                      placeholder={"City"}
                      labelPosition={labelPosition}
                      controlColor={controlColor}
                    />

                    <CustomInput
                      type="text"
                      defaultValue="100001"
                      placeholder={"Postal code"}
                      labelPosition={labelPosition}
                      controlColor={controlColor}
                    />
                  </div>

                  <div className="flex flex-row ">
                    <label className="block custom-checkbox">
                      <input type="checkbox" className="visually-hidden" />
                      <span className="checker bg-control-bg-color"></span>
                      <p className="pl-[11px] global-text-transfrom tracking-global-letter-spacing">
                        Save this information for next time
                      </p>
                    </label>
                  </div>
                </form>

                {/* Added media query */}
                <div className="flex flex-row  justify-between items-center mt-[26px] relative">
                  <div className="pl-1 bg-canvas-interactive-background">
                    <div className="flex flex-row items-center justify-center cursor-pointer text-canvas-interactive-foreground gap-x-1">
                      <span className="flex items-center h-full check"></span>
                      Return to cart
                    </div>
                  </div>

                  <button className="hover:!transition-all  hover:bg-pb-bcg-color opacity-90 hover:opacity-100 pb-font-family pb-text-transfrom tracking-pb-letter-spacing px-pb-horizontal-padding py-pb-vertical-padding bg-pb-bcg-color text-pb-font-size text-canvas-primary-foreground rounded-pb-border-radius font-pb-font-weight border-pb-border-width">
                    Continue to shipping
                  </button>
                </div>
              </div>
              <div className="border-t-[1px] border-[#DEDEDE] mt-10">
                <p className="pt-3 opacity-50 global-text-transfrom tracking-global-letter-spacing text-control-color1">
                  All rights reserved 'store name'
                </p>
              </div>
            </div>

            <div
              className={`${
                headerPosition === "INLINE" ? "pt-[72px]" : ""
              } pt-7 pb-[21px] px-10 text-canvas-color2-foreground bg-canvas-color2-background w-[45%] tracking-global-letter-spacing bg-order-bg-image`}
            >
              <div
                className={`pb-7 ${
                  headerPosition === "INLINE_SECONDARY" ? "block" : "hidden"
                }
        `}
              >
                <Heading1
                  headingTitle="Store name"
                  icon={true}
                  headerLogoImageUrl={headerLogoImageUrl}
                />
              </div>

              <div className="flex flex-col ">
                <div className="flex flex-col pb-8 gap-y-8">
                  <div className="flex gap-x-[14px] items-center  ">
                    <div className="overflow-hidden rounded-merch-border-radius border-merch-border-width">
                      <Image source={appImg} className="w-[80px]" />
                    </div>
                    <div className="flex-grow ">
                      <p className="font-semibold text-base-font-size global-text-transfrom tracking-global-letter-spacing">
                        The Complete Snowboard
                      </p>
                      <p className="font-semibold text-base-font-size global-text-transfrom ">
                        Ice
                      </p>
                    </div>

                    <p className="text-base-font-size">₴699.95</p>
                  </div>

                  <div className="flex flex-row justify-between ">
                    <div className="relative w-full">
                      {/* w-full */}
                      <div>
                        {/* <span
                          className={`z-10 text-text-field-font-size control-label-position global-text-transfrom  absolute text-[#707070] tracking-global-letter-spacing
                      ${
                        labelPosition === "INSIDE"
                          ? "text-[16px] pt-[12px]"
                          : "text-[12px] "
                      }`}
                        >
                          Discount code
                        </span> */}
                        <div className="w-full flex flex-row  gap-x-[14px] justify-between">
                          <div>
                            <span
                              className={` z-10 text-text-field-font-size control-label-position global-text-transfrom  absolute text-[#707070] tracking-global-letter-spacing
                      ${
                        labelPosition === "INSIDE"
                          ? "!text-[15px] pt-[14px] "
                          : "!text-[13px] "
                      }`}
                            >
                              Discount code
                            </span>
                            <input
                              type="text"
                              className={` w-full px-3  text-field-font-family text-field-text-transfrom focus:border-canvas-interactive-foreground  outline-none  font-text-field-font-weight  text-text-field-font-size tracking-text-field-letter-spacing   border-text-field-border-width border-[#DEDEDE] rounded-control-border-radius bg-control-bg-color border-base-corner-radius ${
                                labelPosition === "OUTSIDE"
                                  ? "pt-3 pb-3"
                                  : "pt-5 pb-[7px]"
                              }
                    ${
                      controlColor === "TRANSPARENT"
                        ? "bg-control-bg-color text-control-color2"
                        : "bg-control-bg-color text-control-color"
                    }`}
                            />
                          </div>

                          <button className="z-10 border-pb-border-width font-pb-font-weight text-pb-font-size  tracking-pb-letter-spacing  pb-font-family pb-text-transfrom  py-3 px-pb-horizontal-padding  bg-[#6e6e6e] text-white rounded-pb-border-radius">
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-y-2 justify-items-stretch">
                  <div className="flex flex-row gap-x-[14px]">
                    <p className="w-full global-text-transfrom tracking-global-letter-spacing">
                      Subtotal
                    </p>
                    <p className="w-full font-semibold text-end">₴749.95</p>
                  </div>

                  <div className="flex flex-row gap-x-[14px]">
                    <p className="w-full global-text-transfrom ">Shipping</p>
                    <p className="w-full text-[12px]  text-end">₴10.00</p>
                  </div>

                  <div className="flex justify-between gap-x-[14px]">
                    <p className="w-full font-semibold global-text-transfrom ">
                      Total
                    </p>
                    <p className="w-full font-semibold text-end">UAH ₴699.95</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
