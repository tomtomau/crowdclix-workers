import {getArtist} from "./get-artist";
import {postSignup} from "./signup";
import {getPageviews} from "./get-pageviews";
import {postPageviews} from "./post-pageviews";
import {getMessages} from "./get-messages";
import { postLighter } from "./lighter-on";

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

        const {pathname} = new URL(request.url);
        const method = request.method;
        const body = request.body;

        if (method === 'OPTIONS') {
            const corsPreflightHeaders = [
                ...headers,
                ['Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT'],
                ['Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers']
            ]
            return new Response(null, {status: 200, headers: corsPreflightHeaders});
        }

        if (pathname.startsWith('/artists')) {
            const id = pathname.split('/').pop()
            return getArtist(env, DB, headers, id);
        }

        if (pathname.startsWith('/pageviews') && method === "GET") {
            const id = pathname.split('/').pop()
            return getPageviews(env, DB, headers, id);
        }

        if (pathname.startsWith('/pageviews') && method === "POST") {
            const id = pathname.split('/').pop()
            return postPageviews(env, DB, id);
        }

        if (pathname.startsWith('/signup') && method === "POST") {
            const id = pathname.split('/').pop()
            //console.log(request);
            return postSignup(env, body, headers, id);
        }

        if (pathname.startsWith('/messages') && method === "GET") {
            const id = pathname.split('/').pop()
            return getMessages(env, DB, headers, id);
        }
        //fix this
        if (pathname.startsWith('/lighter')) {
          const id = pathname.split('/').pop()
          return postLighter(env, DB, headers, id);
      }
        return new Response("Error Not Found")
    }
};