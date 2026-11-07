import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, reuires: true },
    zernioProfileId: { type: String },
  },
  { timestamps: true },
);

export const User = mongoose.model("User", UserSchema);
