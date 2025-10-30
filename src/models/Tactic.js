import mongoose from "mongoose";


// Define the Tactic Player schema.
const tacticSchema = new mongoose.Schema({
  name: { type: String, required: true },
  units: [String],
  winRate: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Tactic", tacticSchema);
