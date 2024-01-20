const DB = "crowdclix-data";

export async function getArtist(env, ArtistID) {
    const {results} = await env.DB.prepare(
        "SELECT * FROM Artists WHERE ArtistID = ?"
    )
        .bind(ArtistID)
        .all();

    return Response.json(results);
}