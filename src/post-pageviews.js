// We don't care about the body. Any POST to this endpoint will
// increment pageviews
export async function postPageviews(env, DB, artistID) {
    const { success } = await env.DB.prepare(
        "UPDATE Artists SET ArtistPageviews = ArtistPageviews + 1 WHERE ArtistID = ?"
    )
        .bind(artistID)
        .run()

    if (success) {
        return new Response({status: 200})
    } else {
        return new Response({status: 404})
    }
}