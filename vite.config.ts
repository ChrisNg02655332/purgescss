// import path from "path"
// import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// // https://vitejs.dev/config/
// export default defineConfig({
//   build: {
//     lib: {
//       entry: path.resolve(__dirname, "src/main.ts"),
//       name: "purgescss",
//     },
//   },
//   plugins: [react()],
// })

import { defineConfig } from "vite"
import path from "path"

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "purgescss",
    },
  },
  plugins: [react()],
})
