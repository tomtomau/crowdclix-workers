export interface Env {
  // If you set another name in wrangler.toml as the value for 'binding',
  // replace "DB" with the variable name you defined.
  DB: "crowdclix-data";
}

export default {
  async fetch(request: Request, env: Env) {
    const { pathname } = new URL(request.url);

    if (pathname === "/api/artists") {
      // If you did not use `DB` as your binding name, change it here
      const { results } = await env.DB.prepare(
        "SELECT * FROM Artists WHERE ArtistName = ?"
      )
        .bind("Sonic Mirage")
        .all();
      return Response.json(results);
    }

    return new Response(
      "Call /api/artists to see our artists!"
    );
  },
};
