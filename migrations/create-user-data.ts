import { db, User } from "../models/index.ts";

await db.sync({ drop: true });

await User.create([
  {
    username: "user1",
    password: "pass1",
  },
  {
    username: "user2",
    password: "pass2",
  },
  {
    username: "user3",
    password: "pass3",
  },
]);
