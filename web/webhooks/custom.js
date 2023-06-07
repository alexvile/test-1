import { DeliveryMethod } from "@shopify/shopify-api";
import { UserModel } from "../models/user.js";
/**
 * @type {{[key: string]: import("@shopify/shopify-api").WebhookHandler}}
 */
const customWebhookHandlers = {
  APP_PURCHASES_ONE_TIME_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks",
    callback: async (topic, shop, body, webhookId) => {
      const payload = JSON.parse(body);
      console.log("webhook app_purchase");
      console.log(payload);

      if (payload.app_purchase_one_time.status === "ACTIVE") {
        console.log(
          "webhook APP_PURCHASES_ONE_TIME_UPDATE. Your app status is full"
        );
        await UserModel.findOneAndUpdate({ shop }, { version: "full" });
      }
    },
  },

  APP_UNINSTALLED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks",
    callback: async (topic, shop, body, webhookId) => {
      console.log("app unnistalled");
      const payload = JSON.parse(body);
      console.log('app unnistalled !!!!!!!!!!!!', payload);
    },
  },
};
export default customWebhookHandlers;
