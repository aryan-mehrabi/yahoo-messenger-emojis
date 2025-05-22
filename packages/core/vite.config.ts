import fs from "fs";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

function generateEntryPoints() {
  const indexFilePath = "./src/index.ts";
  const content = fs.readFileSync(indexFilePath, "utf-8");
  const entries: Record<string, string> = {
    index: resolve(__dirname, indexFilePath), // Add index.ts itself as an entry
  };
  const importRegex = /import\s+\{(.+?)\}\s+from\s+['"](.+?)['"];/g;

  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const [_, name, path] = match;

    if (path.includes("/")) {
      entries[name] = resolve(__dirname, "src", path);
    }
  }

  return entries;
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "yahoo-messenger-emojis/core",
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      input: generateEntryPoints(),
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [dts({ rollupTypes: true })],
});
