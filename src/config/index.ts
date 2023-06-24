import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  db_string: process.env.DB_STRING,
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  default_pass: process.env.DEFAULT_USER_PASS,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
};
