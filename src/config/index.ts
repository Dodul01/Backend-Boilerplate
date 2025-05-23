import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.join((process.cwd(), ' .env'))});

 
export default {
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    bcrypt_salt_rounds:process.env.BCRYPT_SALT_ROUNDS,
    jwt_token: process.env.JWT_TOKEN,
    jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
    node_env: process.env.NODE_ENV
}