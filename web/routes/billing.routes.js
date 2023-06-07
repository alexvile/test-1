import { UserModel } from "../models/user.js";
import shopify from "../utils/shopify.js";

export const billingRoute = async (req, res) => {
  const session = res.locals.shopify.session;

  const shopHasPayment = await hasPayment(session);
  if (shopHasPayment) {
    res.status(200).send({
      hasPayment: true,
      confirmationUrl: "",
      error: "",
    });
    return;
  }
  try {
    const subscription = await createSubscription(session);
    res.status(200).send({
      hasPayment: false,
      confirmationUrl: subscription.confirmation_url,
      error: "",
    });
  } catch (error) {
    res
      .status(500)
      .send({ hasPayment: false, confirmationUrl: "", error: error.message });
  }
};

async function hasPayment({ shop }) {
  const userInfo = await UserModel.findOne({ shop });
  return userInfo ? userInfo.version === "full" : false;
}
async function createSubscription(session) {
  const host = process.env.HOST || process.env.APP_URL;

  const subscription = new shopify.api.rest.ApplicationCharge({
    session,
  });
  subscription.name = "Checkout UI Branding $79,90";
  subscription.price = 79.9;
  subscription.test = true;
  subscription.return_url = `${host}${shopify.config.auth.path}?shop=${session.shop}`;
  await subscription.save({
    update: true,
  });

  return subscription;
}
