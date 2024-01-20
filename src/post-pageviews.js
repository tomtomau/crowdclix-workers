// We don't care about the body. Any POST to this endpoint will
// increment pageviews
export async function postPageviews(env, DB, artistID) {
    const pageviews = await env.DB.prepare(
        "SELECT ArtistPageviews FROM Artists WHERE ArtistID = ?"
    )
        .bind(artistID)
        .first()

    // Throw error if no pageviews
    if (pageviews === null) throw new Error('Not found');

    // Otherwise...
    const { success } = await env.DB.prepare(
        "UPDATE Artists SET ArtistPageviews = ArtistPageviews + 1 WHERE ArtistID = ?"
    )
        .bind(artistID)
        .run()

    if (success) {
        return new Response({status: 200})
    } else {
        return new Response({status: 500})
    }
}