
import shopify from "../utils/shopify.js";
import {
  FILE_CREATE,
  GET_CHECKOUT_LIST,
  GET_CHECKOUT_SETTINGS,
  SET_CHECKOUT_SETTINGS,
  STAGED_UPLOADS_CREATE,
  GET_SHOP_INFO,
  GET_IMAGES,
  GET_IMAGE_BY_ID,
} from "../queries/checkout.queries.js";



export class CheckoutService {
   static getClient(res) {
    const session = res.locals.shopify.session;
    const client = new shopify.api.clients.Graphql({ session });
    return client;
  }

  static async getShopInfo(res) {
    const client = CheckoutService.getClient(res);

    const { body } = await client.query({
      data: GET_SHOP_INFO,
    });
    return body.data.shop;
  }

  static async getCheckoutList(res) {
    const client = CheckoutService.getClient(res);

    const { body } = await client.query({
      data: GET_CHECKOUT_LIST,
    });

    return body.data.checkoutProfiles.nodes;
  }

  static async getCheckoutSettings(res, checkoutProfileId) {
    const client = CheckoutService.getClient(res);

    const { body } = await client.query({
      data: {
        query: GET_CHECKOUT_SETTINGS,
        variables: {
          checkoutProfileId,
        },
      },
    });

    return body;
  }

  static async setCheckoutSettings(
    res,
    checkoutProfileId,
    incomingData,
    version,
    plan
  ) {
    console.log("Version and Plan", version, plan);
    let data = incomingData;
    if (version === "demo" && plan === "Shopify Plus") {
      console.log("demo version :((");
      data = {
        customizations: {
          merchandiseThumbnail: {
            border: incomingData.customizations.merchandiseThumbnail.border,
            cornerRadius:
              incomingData.customizations.merchandiseThumbnail.cornerRadius,
          },
          primaryButton: {
            background: incomingData.customizations.primaryButton.background,
            blockPadding:
              incomingData.customizations.primaryButton.blockPadding,
            border: incomingData.customizations.primaryButton.border,
            cornerRadius:
              incomingData.customizations.primaryButton.cornerRadius,
            inlinePadding:
              incomingData.customizations.primaryButton.inlinePadding,
            typography: {
              font: incomingData.customizations.primaryButton.typography.font,
              kerning:
                incomingData.customizations.primaryButton.typography.kerning,
              letterCase:
                incomingData.customizations.primaryButton.typography.letterCase,
              size: incomingData.customizations.primaryButton.typography.size,
              weight:
                incomingData.customizations.primaryButton.typography.weight,
            },
          },
        },
      };
    }
    const client = CheckoutService.getClient(res);
    const { body } = await client.query({
      data: {
        query: SET_CHECKOUT_SETTINGS,
        variables: {
          checkoutProfileId,
          checkoutBrandingInput: data,
        },
      },
    });
    // console.log("response for setCheckoutSettings mutation", body);
    return body;
  }

  static async stagedUploadsCreate(res, fileAttributes) {
    const client = CheckoutService.getClient(res);
    const data = await client.query({
      data: {
        query: STAGED_UPLOADS_CREATE,
        variables: {
          input: [
            {
              resource: "IMAGE",
              filename: fileAttributes.name,
              mimeType: fileAttributes.type,
              fileSize: fileAttributes.size,
              httpMethod: "POST",
            },
          ],
        },
      },
    });

    return data.body;
  }

  static async fileCreate(res, tmpFileAttributes) {
    const client = CheckoutService.getClient(res);
    const data = await client.query({
      data: {
        query: FILE_CREATE,
        variables: {
          files: [
            {
              alt: tmpFileAttributes.alt,
              contentType: tmpFileAttributes.contentType,
              originalSource: tmpFileAttributes.originalSource,
            },
          ],
        },
      },
    });
    // console.log(data);
    return data.body;
  }

  static async getImages(res, cursorId) {
    const client = CheckoutService.getClient(res);
    const { body } = await client.query({
      data: {
        query: GET_IMAGES,
        variables: {
          numImages: 20,
          cursor: cursorId,
        },
      },
    });
    return body;
  }

  static async getImageById(res, id) {
    console.log("incoming Id to get image by id query", id);
    const client = CheckoutService.getClient(res);
    const data = await client.query({
      data: {
        query: GET_IMAGE_BY_ID,
        variables: {
          id,
        },
      },
    });
    console.log("Get image by ID; backend response", data);
    return data.body;
  }
}
