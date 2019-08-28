import * as http from "http";
import { web } from "../routes";
import { IncomingMessage, ServerResponse } from "http";
import * as Controllers from "../app/Http/Controllers";
import { Router } from "@fortifico/framework/modules/Routing/Router";
import { Application } from "@fortifico/framework/modules/Application";

function requestHandler(request: IncomingMessage, response: ServerResponse)
{

}

function bootstrap(): Application
{
    let app = new Application();

    app.router.group([Controllers], (router: Router) => web)

    return app;
}

let app = bootstrap();
app.start();

let server = http.createServer(requestHandler);
server.listen(1230);

