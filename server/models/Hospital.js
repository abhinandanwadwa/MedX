import mongoose, { Schema } from "mongoose";

const HospitalSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("hospital", HospitalSchema);