import getStream from 'get-stream';

export async function postSignup(env, body, headers, id) {
    var stream_string = await getStream(body);
    var request_body = JSON.parse(stream_string);
    var email_string = request_body.email;

    const {success} = await env.DB.prepare(
        //"INSERT INTO Signups (ArtistID, CustomerEmail) VALUES (?, ?)" //Test query
        "INSERT INTO Signups (ArtistID, FanEmail) VALUES (?, ?)" //Final query
    )
        .bind(id, email_string) // This binds values to the question nmarks in the query.
        .run();

    if (success) {
        console.log("Signup stored success.");
        return new Response(null, { headers: headers, status: 200 , headers});
    }

    return new Response(null, { headers: headers, status: 404 , headers});
}