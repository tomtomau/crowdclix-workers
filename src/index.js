import {getArtist} from "./get-artist";
import {postSignup} from "./signup";

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
        const method = request.method;
        const body = request.body;

        if (pathname === '/artist') {
            return getArtist(env, hardcodedArtistName);
        }
        if (pathname === '/signup' && method === "POST") {
            console.log(request);

            return postSignup(body);
        }

        return new Response("Error where you came?")
    }
};