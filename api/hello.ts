export default (request: Request) => {
	return new Response(`Hello, from Deno v${Deno.version.deno}!`);
};