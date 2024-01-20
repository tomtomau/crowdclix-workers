import {getArtist} from "./get-artist";
/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
const hardcodedArtistName    = "Sonic Mirage"

export default {
    async fetch(request, env, ctx) {
        const {pathname} = new URL(request.url);
        if (pathname.startsWith('/artist')) {
			const id = pathname.split('/').pop()
            return getArtist(env, id);
		}	
		return new Response("Error Not Found")
    }
};