const DB = "crowdclix-data";

export async function getArtist(env, headers, artistName) {
    const {results} = await env.DB.prepare(
        "SELECT * FROM Artists WHERE ArtistName = ?"
    )
        .bind(artistName)
        .all();

    return Response.json(results, {
        headers: headers
    });
}