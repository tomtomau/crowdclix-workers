const DB = "crowdclix-data";

export async function getPageviews(env, artistID) {
    const pageviews = await env.DB.prepare(
        "SELECT ArtistPageviews FROM Artists WHERE ArtistID = ?"
    )
        .bind(artistID)
        .first();

    // Return zero count if no pageviews
    if (pageviews === null) throw new Error('Not found');
    return Response.json(pageviews);
}