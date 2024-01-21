export async function postLighter(env, DB, headers, id) {

    const {success} = await env.DB.prepare(
        "UPDATE Artists SET LighterOn = NOT LighterOn WHERE ArtistID = ?"
    )
        .bind(id)
        .run();

    if (success) {
        console.log("Lighter toggled!");
        return new Response(null, {status: 200, headers: headers});
    }

    return new Response(null, {status: 404, headers: headers});
}