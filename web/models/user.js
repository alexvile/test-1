import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    shop: { type: String, required: true, unique: true },
    version: {
      type: String,
      enum: ["demo", "full"],
      default: "demo",
    },
    checkoutApiSupported: { type: Boolean },
    name: { type: String },
    shopifyPlan: {
      type: String,
      default: "Developer Preview",
    },
  },
  { timestamps: true }
);

const UserModel = model("config", userSchema);

export { UserModel };