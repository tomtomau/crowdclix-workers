export async function getArtist(env, DB, headers, artistID) {
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

