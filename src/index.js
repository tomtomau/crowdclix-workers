/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
const DB = "crowdclix-data";
const ArtistName = "Sonic Mirage"  

export default {
	async fetch(request, env, ctx) {
		const url = request.url
		const path = url.match(/^https?:\/\/[^\/]+\/(.*)$/)[1]
		if(path === 'artist') {
			const { results } = await env.DB.prepare(
				"SELECT * FROM Artists WHERE ArtistName = ?"
			  )
				.bind(ArtistName)
				.all();
			  return Response.json(results);
		}
		return new Response("Error where you came?")
	}
};