import {int, timestamp} from "drizzle-orm/mysql-core";

export const base = {
    id: int("id").primaryKey().autoincrement(),
    createdAt: timestamp("createdAt", {mode: "date", fsp: 0}).defaultNow(),
    updatedAt: timestamp("updatedAt", {mode: "date", fsp: 0}).defaultNow().onUpdateNow(),
    deletedAt: timestamp("deletedAt", {mode: "date", fsp: 0})
};
