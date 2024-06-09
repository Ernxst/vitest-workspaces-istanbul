import { defineWorkersProject } from "@cloudflare/vitest-pool-workers/config"

export default defineWorkersProject({
  test: {
    name: 'api',
    poolOptions: {
			workers: {
				main: "./src/worker.ts",
        singleWorker: true,
        wrangler: {
          configPath:'./wrangler.toml'
        },
			},
		},
  }
})
