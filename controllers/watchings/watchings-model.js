import mongoose from "mongoose";
import watchingsSchema from "./watchings-schema.js";

const watchingsModel = mongoose.model('WatchingsModel', watchingsSchema)

export default watchingsModel