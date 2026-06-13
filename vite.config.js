import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // The dot makes it work ANYWHERE, ignoring repo names completely
  base: "./",
  plugins: [react()],
});
