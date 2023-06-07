import { Router } from "express";

import { CheckoutService } from "../services/checkout.service.js";
import { UserModel } from "../models/user.js";
import onError from "../helpers/error.handler.js";
import shopify from "../utils/shopify.js";

const checkoutRouter = Router();

checkoutRouter.get("/shop-info", async (req, res) => {
  const shop = res.locals.shopify.session.shop;
  const session = res.locals.shopify.session;

  async function getShopData(session, shop, res) {
    const { data: subscriptions } =
      await shopify.api.rest.ApplicationCharge.all({
        session,
      });

    const activeSubscription = subscriptions.find(
      (subscription) => subscription.status === "active"
    );

    const subscriptionConfig = {
      version: activeSubscription ? "full" : "demo",
    };

    const shopInfo = await CheckoutService.getShopInfo(res);

    const shopifyPlan =
      shopInfo.plan.displayName === "Shopify Plus" || shopInfo.plan.shopifyPlus
        ? "Shopify Plus"
        : shopInfo.plan.displayName;

    const userInfo = await UserModel.findOneAndUpdate(
      { shop },
      {
        checkoutApiSupported: shopInfo.checkoutApiSupported,
        name: shopInfo.name,
        subscriptionConfig,
        shopifyPlan,
      },
      { new: true, upsert: true }
    );

    return { userInfo, shopInfo, subscriptions };
  }
  try {
    const { userInfo, shopInfo, subscriptions } = await getShopData(
      session,
      shop,
      res
    );
    res.status(200).send({ userInfo, subscriptions, shopInfo });
  } catch (error) {
    onError(error, res);
  }
});

checkoutRouter.get("/images", async (req, res) => {
  // console.log(req.query);
  const { cursor } = req.query;
  let cursorId = cursor;
  if (cursor === "null") {
    cursorId = null;
  }
  try {
    const resp = await CheckoutService.getImages(res, cursorId);
    res.status(200).send({ resp });
  } catch (error) {
    onError(error, res);
  }
});

checkoutRouter.get("/image/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const imageGid = `gid://shopify/MediaImage/${id}`;
    const imageResp = await CheckoutService.getImageById(res, imageGid);
    res.status(200).send(imageResp);
  } catch (error) {
    onError(error, res);
  }
});

checkoutRouter.get("/checkouts", async (req, res) => {
  try {
    const checkouts = await CheckoutService.getCheckoutList(res);
    res.status(200).send({ checkouts });
  } catch (error) {
    onError(error, res);
  }
});

checkoutRouter.get("/checkout-settings/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const checkoutProfileId = `gid://shopify/CheckoutProfile/${id}`;
    const settings = await CheckoutService.getCheckoutSettings(
      res,
      checkoutProfileId
    );
    res.status(200).send({ settings });
  } catch (error) {
    onError(error, res);
  }
});

checkoutRouter.put("/checkout-settings/:id", async (req, res) => {
  try {
    const shop = res.locals.shopify.session.shop;

    const { id } = req.params;
    const checkoutProfileId = `gid://shopify/CheckoutProfile/${id}`;

    const { version, plan } = await UserModel.findOne({ shop });

    const updatedSettings = await CheckoutService.setCheckoutSettings(
      res,
      checkoutProfileId,
      req.body,
      version,
      plan
    );
    res.status(200).send({ updatedSettings });
  } catch (error) {
    onError(error, res);
  }
});

checkoutRouter.post("/staged-upload", async (req, res) => {
  try {
    // console.log("request!!!!!!!!!", req.body);
    const response = await CheckoutService.stagedUploadsCreate(res, req.body);
    res.status(200).send({ response });
  } catch (error) {
    onError(error, res);
  }
});

checkoutRouter.post("/img-upload", async (req, res) => {
  try {
    const response = await CheckoutService.fileCreate(res, req.body);
    res.status(200).send({ response });
  } catch (error) {
    console.log("err", error);
    onError(error, res);
  }
});

export { checkoutRouter };
