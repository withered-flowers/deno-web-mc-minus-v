import { Database } from '../mod.ts';
import { config } from "../mod.ts";

const { DB_HOST, DB_NAME, DB_USER, DB_PASS } = config();

const db = new Database('postgres', {
  host: DB_HOST || 'localhost',
  database: DB_NAME || 'development',
  username: DB_USER || 'postgres',
  password: DB_PASS || 'postgres'
});

export default db;