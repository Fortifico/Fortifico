import * as Controllers from "../app/Http/Controllers";
import { Application } from "@fortifico/framework/Application";
import { Router } from "@fortifico/framework/routing/Router";
import { web } from "../routes"

export function bootstrap(): Application
{
    let app = new Application();

    app.router.group([Controllers], (router: Router) => 
    {
        web(router);
    });


    return app;
}