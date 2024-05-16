import { z } from "nestjs-zod/z";

export const envSchema = z.object({
  NODE_ENV: z.enum(["local", "staging", "production"]).default("local"),
  SERVER_PORT: z.number().optional().default(3000),
  DB_NAME: z.string(),
  DB_HOST: z.string(),
  DB_PORT: z.coerce.number(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
});

export type Env = z.infer<typeof envSchema>;
