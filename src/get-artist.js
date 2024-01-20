const DB = "crowdclix-data";


export async function getArtist(env, headers, artistID) {
    const artist = await env.DB.prepare(
        "SELECT * FROM Artists WHERE ArtistID = ?"
    )
        .bind(artistID)
        .first();

        if (artist === null) {
            throw new Error('Not found');
        }

        return Response.json(artist, {
            headers: headers
        });
    
}

