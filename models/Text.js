import mongoose, { model, Schema, models } from "mongoose"

const TextSchema = new Schema(
  {
    text: { type: String },
  },
  {
    timestamps: true,
  }
)

export const Text = models.Text || model("Text", TextSchema)
