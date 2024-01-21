export async function getSignups(env, DB, headers, artistID) {
    // Grabs all signups for a given ArtistID and returns them ordered
    // oldest first
    const signups = await env.DB.prepare(
        "SELECT FanEmail FROM Signups WHERE ArtistID = ?"
    )
        .bind(artistID)
        .all();

    // Throw error if no messages
    if (signups === null) throw new Error('Not found');
    return Response.json(signups.results, {
        headers: headers
    });
}