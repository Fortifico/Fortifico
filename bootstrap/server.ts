import * as http from "http";
import { bootstrap } from "./app";
import { IncomingMessage, ServerResponse } from "http";

function requestHandler(serverRequest: IncomingMessage, serverResponse: ServerResponse): void
{
    
}

let app = bootstrap();
app.start();

let server = http.createServer(requestHandler);
server.listen(1230);
