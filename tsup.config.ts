import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./index.ts"],
  format: "esm",
  target: "esnext",
  dts: true,
  // splitting: true, // REVIEW
  // sourcemap: true,
  clean: true,
  treeshake: true,
});
