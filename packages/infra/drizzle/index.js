"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const neon_http_1 = require("drizzle-orm/neon-http");
const serverless_1 = require("@neondatabase/serverless");
serverless_1.neonConfig.fetchConnectionCache = true;
if (!process.env.NEON_DATABASE_URL) {
    throw new Error("database url not found");
}
const sql = (0, serverless_1.neon)(process.env.NEON_DATABASE_URL);
//supabase
if (!process.env.SUPA_DATABASE_URL) {
    console.log('no database URL');
}
//const supa_client = postgres(process.env.SUPA_DATABASE_URL as string, { max: 1, prepare: false });
const neon_client = (0, serverless_1.neon)(process.env.NEON_DATABASE_URL || "");
//export const db = drizzle_supa(supa_client,{schema});
exports.db = (0, neon_http_1.drizzle)(neon_client, { schema });
