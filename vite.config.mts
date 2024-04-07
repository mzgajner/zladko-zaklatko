import { defineConfig } from 'npm:vite@^5.2.8'
import vue from 'npm:@vitejs/plugin-vue@^5.0.4'

import 'npm:vue@^3.4.21'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})
