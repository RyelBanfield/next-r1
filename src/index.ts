#! /usr/bin/env node

import { execSync } from "child_process";
import fs from "fs";

// Function to execute commands
const exec = (command: string) => {
  console.log(`Executing: ${command}`);
  execSync(command, { stdio: "inherit" });
};

// Install required packages
const packages = [
  "eslint-plugin-simple-import-sort",
  "prettier",
  "prettier-plugin-tailwindcss",
];

exec(`npm i -D ${packages.join(" ")}`);

// Create .eslintrc.json
const eslintrc = {
  extends: "next/core-web-vitals",
  plugins: ["simple-import-sort"],
  rules: {
    "no-unused-vars": "warn",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
};

fs.writeFileSync(".eslintrc.json", JSON.stringify(eslintrc, null, 2));

// Create .prettierrc
const prettierrc = {
  plugins: ["prettier-plugin-tailwindcss"],
};

fs.writeFileSync(".prettierrc", JSON.stringify(prettierrc, null, 2));

console.log("ESLint and Prettier configuration completed!");
