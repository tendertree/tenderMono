"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mySchemaUsers = exports.kimSchema = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.kimSchema = (0, pg_core_1.pgSchema)("KimSchema");
exports.mySchemaUsers = mySchema.table('users', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.text)('name'),
});
