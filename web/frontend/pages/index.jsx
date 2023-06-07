import {
  Page,
  Layout,
  Banner,
  Link,
  Button,
  Modal,
  Icon,
} from "@shopify/polaris";
import { TickMinor } from "@shopify/polaris-icons";
import { TitleBar, useAuthenticatedFetch } from "@shopify/app-bridge-react";
import { Select } from "@shopify/polaris";
import Settings from "../components/Settings";
import { useCustomizeData } from "../hooks";
import { Redirect } from "@shopify/app-bridge/actions";
import { useAppBridge } from "@shopify/app-bridge-react";
import { useState } from "react";
import { mockCheckouts } from "../settings/options";
import { SkeletonCheckoutPage } from "../components/SkeletonCheckoutPage";

export default function HomePage() {
  const {
    selected,
    checkouts,
    handleSelectChange,
    settings,
    loading,
    setLoading,
    setDefaultCheckoutSettings,
    configsAndMethods,
    setCheckoutSettings,
    storePlan,
    appVersion,
    isNewCheckoutSupported,
  } = useCustomizeData();

  const primaryAction = {
    content: "Save",
    disabled: loading,
    loading: loading,
    onAction: () => {
      setCheckoutSettings();
    },
  };
  const [banner, setBanner] = useState(true);
  const [billingModal, setBillingModal] = useState(false);

  const secondaryActions = [
    {
      content: "Set default",
      disabled: loading,
      onAction: () => {
        setDefaultCheckoutSettings();
      },
    },
  ];

  const app = useAppBridge();
  const redirect = Redirect.create(app);
  const fetch = useAuthenticatedFetch();

  const getBilling = async () => {
    setLoading(true);
    const res = await fetch("/api/billing");
    const { hasPayment, confirmationUrl, error } = await res.json();
    console.log("res", { hasPayment, confirmationUrl, error });

    if (error) {
      alert(error);
    } else if (hasPayment) {
      alert("You have already purchased the application.");
    } else if (confirmationUrl) {
      redirect.dispatch(Redirect.Action.REMOTE, confirmationUrl);
    }
    setLoading(false);
  };
  const hideBanner = () => {
    setBanner(false);
  };

  return (
    <>
      {storePlan ? (
        <Page fullWidth>
          <TitleBar
            title="Checkout customizer"
            primaryAction={primaryAction}
            secondaryActions={secondaryActions}
          />

          <Layout>
            <Layout.Section>
              <Modal
                open={billingModal}
                onClose={() => {
                  setBillingModal(false);
                }}
                fullScreen
              >
                <div className="flex flex-col items-center justify-center px-10 py-10">
                  <h4 className="pb-8 text-2xl popup-title">Billing plan</h4>

                  <div className="border-solid border-[1px] border-border w-fit">
                    <p className="bg-backgroundNotChecked px-10 py-4 block text-[32px] font-semibold text-center">
                      $79,90
                    </p>

                    <div className="py-4 pl-[18px] pr-[37px]">
                      <div className="flex gap-x-[10px] pb-3">
                        <p>
                          <Icon source={TickMinor} color="base" />
                        </p>
                        <p>One-time purchase</p>
                      </div>

                      <div className="flex gap-x-[10px]">
                        <p>
                          <Icon source={TickMinor} color="base" />
                        </p>
                        <p>Swift, efficient, knowledgeable support</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button loading={loading} onClick={getBilling} primary>
                      Activate
                    </Button>
                  </div>
                </div>
              </Modal>
              <div className="mb-[16px]">
                {storePlan !== "Developer Preview" &&
                  storePlan !== "Shopify Plus" &&
                  storePlan !== "Development" && (
                    <>
                      <Banner title="Warning" status="critical">
                        <p>
                          Unfortunately, <strong>Shopify only permits</strong>{" "}
                          checkout customization for Plus merchants. &nbsp;
                          <Link url="https://www.shopify.com/plus/upgrade">
                            Upgrade Plan
                          </Link>
                        </p>
                      </Banner>
                      <div className="mb-[25px]"></div>
                    </>
                  )}
                {storePlan === "Developer Preview" &&
                  isNewCheckoutSupported &&
                  banner && (
                    <Banner
                      title=""
                      status="success"
                      onDismiss={hideBanner}
                    >
                      <p>
                        You have all features because you are using{" "}
                        <strong>Development preview store</strong>&nbsp; with
                        checkout extensibility.
                      </p>
                    </Banner>
                  )}
                {storePlan === "Shopify Plus" &&
                  isNewCheckoutSupported &&
                  appVersion === "demo" &&
                  banner && (
                    <Banner
                      title="Warning"
                      status="warning"
                      onDismiss={hideBanner}
                      action={{
                        content: "Activate full version",
                        onAction: () => {
                          setBillingModal(true);
                        },
                      }}
                    >
                      <p>
                        You have a demo version. Upgrade your app to get full
                        version
                      </p>
                    </Banner>
                  )}
                {storePlan === "Shopify Plus" &&
                  isNewCheckoutSupported &&
                  appVersion === "full" &&
                  banner && (
                    <Banner
                      title="Congratulations !"
                      status="success"
                      onDismiss={hideBanner}
                    >
                      <p>You have full version of application</p>
                    </Banner>
                  )}
                {storePlan === "Development" && banner && (
                  <>
                    <Banner
                      title="Warning"
                      status="critical"
                      onDismiss={hideBanner}
                    >
                      <p>
                        Your development store version is not compatible with
                        this application. You have to create a new{" "}
                        <Link url="https://shopify.dev/docs/apps/tools/development-stores#create-a-development-store-to-test-your-app">
                          development store
                        </Link>
                        &nbsp; with the{" "}
                        <Link url="https://shopify.dev/docs/api/release-notes/developer-previews#enable-a-developer-preview">
                          checkout extensibility preview enabled
                        </Link>
                        &nbsp;for testing app functionality or upgrade current
                        store to the Shopify Plus plan with checkout
                        extensibility.
                      </p>
                    </Banner>
                  </>
                )}
                {storePlan === "Developer Preview" &&
                  !isNewCheckoutSupported &&
                  banner && (
                    <>
                      <Banner
                        title="Warning"
                        status="critical"
                        onDismiss={hideBanner}
                      >
                        <p>
                          Your development store version is not compatible with
                          this application. You have to create a new{" "}
                          <Link url="https://shopify.dev/docs/apps/tools/development-stores#create-a-development-store-to-test-your-app">
                            development store
                          </Link>
                          &nbsp; with the{" "}
                          <Link url="https://shopify.dev/docs/api/release-notes/developer-previews#enable-a-developer-preview">
                            checkout extensibility preview enabled
                          </Link>
                          .
                        </p>
                      </Banner>
                      <div className="mb-[25px]"></div>
                    </>
                  )}
                {storePlan === "Shopify Plus" &&
                  !isNewCheckoutSupported &&
                  banner && (
                    <>
                      <Banner
                        title="Warning"
                        status="critical"
                        onDismiss={hideBanner}
                      >
                        <p>
                          Please, upgrade your store to Checkout extensibility.
                          &nbsp;
                          <Link url="https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility/checkout-upgrade">
                            Upgrade guide
                          </Link>
                        </p>
                      </Banner>
                      <div className="mb-[25px]"></div>
                    </>
                  )}
              </div>

              {!isNewCheckoutSupported && (
                <div className="max-w-[32%] pointer-events-none text-[#D0D0D0] w-full blured_select">
                  <p className="text-[#000000]">Choose checkout</p>
                  <Select
                    disabled={true}
                    options={mockCheckouts}
                    onChange={handleSelectChange}
                    value="defaultProfile"
                  />
                </div>
              )}
              {checkouts.length > 0 && (
                <>
                  {(storePlan === "Developer Preview" ||
                    storePlan === "Shopify Plus") &&
                    isNewCheckoutSupported && (
                      <div className="max-w-[32%] w-full">
                        <Select
                          disabled={loading}
                          label="Choose checkout"
                          options={checkouts}
                          onChange={handleSelectChange}
                          value={selected}
                        />
                      </div>
                    )}
                </>
              )}
              <Settings
                data={settings}
                loading={loading}
                setLoading={setLoading}
                configsAndMethods={configsAndMethods}
                storePlan={storePlan}
                appVersion={appVersion}
                isNewCheckoutSupported={isNewCheckoutSupported}
              />
            </Layout.Section>
          </Layout>
        </Page>
      ) : (
        <SkeletonCheckoutPage />
      )}
    </>
  );
}
