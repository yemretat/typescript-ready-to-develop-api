import dotenv from "dotenv";
//Environment Variables
dotenv.config({ path: "./config/env/config.env" });

export const port = process.env.PORT || "5000";
export const environment = process.env.NODE_ENV || "development";
