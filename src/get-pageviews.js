const DB = "crowdclix-data";

export async function getPageviews(env, artistID) {
    const {results} = await env.DB.prepare(
        "SELECT ArtistPageviews FROM Artists WHERE ArtistID = ?"
    )
        .bind(artistID)
        .all();

    // Return zero count if no pageviews
    if (results[0] == null) return Response.json({"ArtistPageviews":-1});
    return Response.json(results[0]);
}