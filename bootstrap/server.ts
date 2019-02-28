import * as http from "http";
import { bootstrap } from "./app";
import { IncomingMessage, ServerResponse } from "http";

function requestHandler(serverRequest: IncomingMessage, serverResponse: ServerResponse): void
{
    app;
}

let app = bootstrap();
let server = http.createServer(requestHandler);
server.listen(8080);