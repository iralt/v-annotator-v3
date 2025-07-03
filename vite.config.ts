import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig(({ command }) => {
  const alias = {
    // "@": resolve(__dirname, "src"),
  };

  if (command === "serve") {
    return {
      plugins: [vue()],
      resolve: {
        alias,
      },
      server: {
        port: 5177,
      },
    };
  } else {
    return {
      plugins: [vue()],
      resolve: {
        alias,
      },
      build: {
        lib: {
          entry: resolve(__dirname, "src/index.ts"),
          name: "VAnnotatorV3",
          fileName: "index",
          formats: ["es"],
        },
        rollupOptions: {
          external: ["vue", "vuetify"],
          output: {
            globals: {
              vue: "Vue",
              vuetify: "Vuetify",
            },
          },
        },
        outDir: "lib",
      },
    };
  }
});
