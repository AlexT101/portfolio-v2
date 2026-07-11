import next from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [...next, prettier];

export default eslintConfig;
