const DB = "crowdclix-data";

export async function getArtist(env, artistID) {
    const {results} = await env.DB.prepare(
        "SELECT ArtistPageviews FROM Artists WHERE ArtistID = ?"
    )
        .bind(artistID)
        .all();

    return Response.json(results);
}