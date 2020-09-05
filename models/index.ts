import db from "../config/config.ts";
import User from "./user.ts";

db.link([User]);

export { db, User };
