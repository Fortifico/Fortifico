import * as http from "http";
import { web } from "./routes";
import { Kernel } from "./app/Http/Kernel";
import * as Controllers from "./app/Http/Controllers";
import { IncomingMessage, ServerResponse } from "http";
import { Router } from "@fortifico/framework/modules/Routing/Router";
import { Application as App } from "@fortifico/framework/modules/Application";
import { ClassConstructor, ImportMap, Attributes } from "@fortifico/framework/modules/Interfaces/Types";


function requestHandler(request: IncomingMessage, serverResponse: ServerResponse)
{

    let kernel: Kernel | null = app.make<Kernel>("HttpKernel");
    if (kernel)
    {
        let response = kernel.handle(request)
        serverResponse.writeHead(200, { 'Content-Type': 'text/html' });
        serverResponse.end(response, 'utf-8');
    }

}

function bootstrap(): App
{
    let app = new App();

    let controllers: ImportMap = { ...Controllers };

    for(let controller in Controllers)
    {
        let func  = controllers[controller];
        if(func)
        {
            app.bind(controller, () => new func )
        }

    }

    //console.log(app);

    let attributes: Attributes = new Map();

    // IDK what this does.
    attributes.set("namespace", "App\\Http\\Controllers");

    app.router.group(attributes, web)

    app.bind("HttpKernel", () => { return new Kernel(app, app.router) })

    return app;
}

let app = bootstrap();
app.start();


let server = http.createServer(requestHandler);
server.listen(1230);



