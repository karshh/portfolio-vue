import{defineConfig}from'vitest/config';export default defineConfig({test:{include:['app/**/*.spec.ts','server/**/*.spec.ts'],environment:'node'}})
