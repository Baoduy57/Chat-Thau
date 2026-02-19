import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // @ts-ignore
    await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);
    console.log("Kết nối với Database thành công!");
  } catch (error) {
    console.log("Lỗi khi kết nối với Database: " + error);
    process.exit(1);
  }
};
