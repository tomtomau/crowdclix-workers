import getStream from 'get-stream';

export async function postmessages(env, body, id) {
    var stream_string = await getStream(body);
    var requestBody = JSON.parse(stream_string);
    var messageString = requestBody.message;

    const artist = await env.DB.prepare(    // for verifying the artist id
        "SELECT * FROM Artists WHERE ArtistID = ?"
    )
        .bind(id)
        .first();

        if (artist === null) {
            throw new Error('Not found');
        } 

    const { success } = await env.DB.prepare(
        //"INSERT INTO Signups (ArtistID, CustomerEmail) VALUES (?, ?)" //Test query
        "INSERT INTO Messages (ArtistID, MessageContents) VALUES (?, ?)" //Final query
    )
        .bind(id, messageString) // This binds values to the question nmarks in the query.
        .run();

    if (success) {
        console.log("message got stored.");
        return new Response(null, { status: 200 })        
    }
    return new Response(null, { status: 404 })
}