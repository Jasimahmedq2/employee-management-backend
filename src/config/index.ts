import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  db_string: process.env.DB_STRING,
  port: process.env.PORT,
};
