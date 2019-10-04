import {Client} from '@heroiclabs/nakama-js';

var client = new Client("defaultkey", "127.0.0.1", 7350);
client.ssl = false;

async function init() {
    const email = "hello@example.com";
    const password = "somesupersecretpassword";
    const session = await client.authenticateEmail({
      email: email,
      password: password
    });
    // Store session for quick reconnects.
    localStorage.nakamaAuthToken = session.token;
    console.info("Authenticated successfully. User id:", session.user_id);
}

init()