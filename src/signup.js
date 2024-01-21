

import getStream from 'get-stream';

export async function postSignup(body, id) {
    var stream_string = await getStream(body);
    var request_body = JSON.parse(stream_string);
    var email_string = request_body.email;

    const { success } = await env.DB.prepare(
        "INSERT INTO Signups (artistID, signup) VALUES (?, ?)"
    )
        .bind(id, email_string) // This binds values to the question nmarks in the query.
        .run();

    if (success) {
        console.log("Signup stored success.");
        return new Response({ status: 200 })        
    }
    return new Response({ status: 404 })
    
}