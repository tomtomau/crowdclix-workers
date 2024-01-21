export async function getMessages(env, DB, headers, artistID) {
    // Grabs all messages for a given ArtistID and returns them ordered
    // oldest first
    const messages = await env.DB.prepare(
        "SELECT MessageContents FROM Messages WHERE ArtistID = ? ORDER BY MessageTimestamp ASC"
    )
        .bind(artistID)
        .all();

    // Throw error if no messages
    if (messages === null) throw new Error('Not found');
    return Response.json(messages.results, {
        headers: headers
    });
}