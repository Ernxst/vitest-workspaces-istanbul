# Vitest Workspaces

In a monorepo with a SvelteKit app, running coverage with `@vitest/coverage-istanbul` does not work. Works fine with `@vitest/coverage-v8` but I need istanbul (required by [`@cloudflare/vitest-pool/workers`](https://www.npmjs.com/package/@cloudflare/vitest-pool-workers))

## Reproduction

1. Clone repo
2. Install dependencies (`bun install`)
3. Run test script (`bun run test`) - everything passes
4. Run coverage script (`bun run coverage`) 

Tests pass but collecting coverage fails with the following error:

```shell
SyntaxError: /Users/ernest/Projects/Repros/vitest-workspaces-istanbul/packages/web/src/routes/+page.svelte: Support for the experimental syntax 'jsx' isn't currently enabled (1:1):

> 1 | <h1>Welcome to SvelteKit</h1>
    | ^
  2 | <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
  3 |

Add @babel/preset-react (https://github.com/babel/babel/tree/main/packages/babel-preset-react) to the 'presets' section of your Babel config to enable transformation.
If you want to leave it as-is, add @babel/plugin-syntax-jsx (https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-jsx) to the 'plugins' section to enable parsing.

If you already added the plugin for this syntax to your config, it's possible that your config isn't being loaded.
You can re-run Babel with the BABEL_SHOW_CONFIG_FOR environment variable to show the loaded configuration:
        npx cross-env BABEL_SHOW_CONFIG_FOR=/Users/ernest/Projects/Repros/vitest-workspaces-istanbul/packages/web/src/routes/+page.svelte <your build command>
See https://babeljs.io/docs/configuration#print-effective-configs for more info.

1  |  <h1>Welcome to SvelteKit</h1>
   |  ^
2  |  <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
3  |  
```
