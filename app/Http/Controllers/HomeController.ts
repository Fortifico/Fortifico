import { view } from "@fortifico/framework/helpers"
import { Controller } from "@fortifico/framework/routing/Controller";
import { Inject } from "@fortifico/framework/container/Injection";


export class HomeController extends Controller
{

    constructor()
    {
        super()
    }
    
    @Inject
    public index(date: Date)
    {
        return view("home");
    }
}
