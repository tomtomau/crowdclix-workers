import { getArtist } from "./get-artist";
import { postSignup } from "./signup";
import { getPageviews } from "./get-pageviews";


/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
const hardcodedArtistName = "Sonic Mirage"
const DB = "crowdclix-data";


export default {
  async fetch(request, env, ctx) {
    const headers = [
      ['Access-Control-Allow-Origin', '*']
    ];

    const { pathname } = new URL(request.url);
    const method = request.method;
    const body = request.body;

    if (pathname.startsWith('/artists')) {
      const id = pathname.split('/').pop()
      return getArtist(env, DB, headers, id);
    }

    if (pathname.startsWith('/pageviews')) {
      const id = pathname.split('/').pop()
      return getPageviews(env, DB, headers, id);
    }
    if (pathname === '/signup' && method === "POST") {
      console.log(request);

      return postSignup(body, id);
    }
    return new Response("Error Not Found")
  }
};