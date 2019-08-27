import { web } from "../routes";
import * as Controllers from "../app/Http/Controllers";
import { Router } from "@fortifico/framework/modules/Routing/Router";
import { Application } from "@fortifico/framework/modules/Application";



export function bootstrap(): Application
{
    let app = new Application();

    app.router.group([Controllers], (router: Router) => web)

    return app;
}