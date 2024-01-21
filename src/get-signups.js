export async function getSignups(env, DB, headers, artistID) {
    // Grabs all signups for a given ArtistID and returns them ordered
    // oldest first
    const messages = await env.DB.prepare(
        "SELECT FanEmails FROM Signups WHERE ArtistID = ?"
    )
        .bind(artistID)
        .all();

    // Throw error if no messages
    if (messages === null) throw new Error('Not found');
    return Response.json(messages.results, {
        headers: headers
    });
}