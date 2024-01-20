const DB = "crowdclix-data";

export async function getArtist(env, ArtistID) {
    const artist = await env.DB.prepare(
        "SELECT * FROM Artists WHERE ArtistID = ?"
    )
        .bind(ArtistID)
        .first();

        if (artist === null) {
            throw new Error('Not found');
        }

    return Response.json(artist);
    
}

