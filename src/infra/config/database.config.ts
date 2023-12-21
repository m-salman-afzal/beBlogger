import {createEnv} from "@t3-oss/env-core";
import {z} from "zod";

const coerceBoolean = z
    .string()
    .refine((s) => s === "true" || s === "false")
    .transform((s) => s === "true");

export const databaseConfig = createEnv({
    runtimeEnv: process.env,
    emptyStringAsUndefined: true,

    server: {
        DB_NAME: z.string(),
        DB_USERNAME: z.string(),
        DB_PASSWORD: z.string(),
        DB_HOST: z.string(),
        DB_PORT: z.coerce.number(),
        DB_SYNCHRONIZE: coerceBoolean,
        DB_LOGGING: coerceBoolean
    }
});
