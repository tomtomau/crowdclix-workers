import getStream from 'get-stream';

export async function postmessages(env, body, id) {
    var stream_string = await getStream(body);
    var requestBody = JSON.parse(stream_string);
    var messageString = requestBody.message;

    const artist = await env.DB.prepare(
        "SELECT * FROM Artists WHERE ArtistID = ?"
    )
        .bind(id)
        .first();

        if (artist === null) {
            throw new Error('Not found');
        }

    


}