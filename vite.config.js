import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // This tells GitHub pages exactly where your files are
  base: "/memory_game_/",
  plugins: [react()],
});
