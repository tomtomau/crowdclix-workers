

import getStream from 'get-stream';

export async function postSignup(body) {
    var stream_string = await getStream(body);
    var request_body = JSON.parse(stream_string);
    var email_string = request_body.email;
    return Response.json(null);
    // convert readable stream to string 
}