import { Controller } from "@fortifico/framework/routing/Controller";
import { Application as App } from "@fortifico/framework/Application";

@App.Class
export class HomeController extends Controller
{

    constructor()
    {
        super()
    }
    
    @App.Method
    public index(): string
    {
        return "Hello";
    }
}
