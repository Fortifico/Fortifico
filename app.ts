import * as http from "http";
import { web } from "./routes";
import { Kernel } from "./app/Http/Kernel";
import * as Controllers from "./app/Http/Controllers";
import { IncomingMessage, ServerResponse } from "http";
import { Router } from "@fortifico/framework/modules/Routing/Router";
import { Application } from "@fortifico/framework/modules/Application";


function requestHandler(request: IncomingMessage, serverResponse: ServerResponse)
{
    let kernel: Kernel = app.make("HttpKernel");
    let response = kernel.handle(request)

    serverResponse.writeHead(200, { 'Content-Type': 'text/html' });
    serverResponse.end(response, 'utf-8');

}

function bootstrap(): Application
{
    let app = new Application();

    app.router.group([Controllers], web)

    app.bind("HttpKernel", () => { return new Kernel(app, app.router) })

    return app;
}

let app = bootstrap();
app.start();

let server = http.createServer(requestHandler);
server.listen(1230);

