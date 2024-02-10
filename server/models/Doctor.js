import mongoose, { Schema } from "mongoose";

const DoctorSchema = new Schema(
  {
    name: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    hospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("doctor", DoctorSchema);