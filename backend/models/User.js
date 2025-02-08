import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    phone: { type: String, required: true },
    status: { type: String, enum: ["Active", "Inactive"], required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
