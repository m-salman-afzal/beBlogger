import {mysqlTable, varchar} from "drizzle-orm/mysql-core";

import {base} from "./base.model";

export const user = mysqlTable("users", {
    ...base,
    userId: varchar("userId", {length: 256}).notNull().unique(),
    name: varchar("name", {length: 256}).notNull(),
    email: varchar("email", {length: 256}),
    password: varchar("password", {length: 256}),
    type: varchar("type", {length: 256})
});
