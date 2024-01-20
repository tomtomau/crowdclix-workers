export async function getPageviews(env, DB, headers, artistID) {
    const pageviews = await env.DB.prepare(
        "SELECT ArtistPageviews FROM Artists WHERE ArtistID = ?"
    )
        .bind(artistID)
        .first();

    // Throw error if no pageviews
    if (pageviews === null) throw new Error('Not found');
    return Response.json(pageviews, {
        headers: headers
    });
}