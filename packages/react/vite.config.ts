import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

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
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "yahoo-messenger/react",
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "react-dom/client"],
      input: generateEntryPoints(),
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react(), dts({ rollupTypes: true }), libInjectCss()],
});
