import * as http from "http";
import { bootstrap } from "../bootstrap/app";
import { IncomingMessage, ServerResponse } from "http";

function requestHandler(serverRequest: IncomingMessage, serverResponse: ServerResponse): void
{
    
}

let app = bootstrap();
let server = http.createServer(requestHandler);
server.listen(8080);