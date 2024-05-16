#!/usr/bin/env deno run --version 1.43.3

export default () => new Response(`
- Deno v${Deno.version.deno} 
- Location is ${window.location?.href}!
`);