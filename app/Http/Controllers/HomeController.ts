import { view } from "@fortifico/framework/modules/Helpers"
import { Controller } from "@fortifico/framework/modules/Routing/Controller";
import { Inject } from "@fortifico/framework/modules/Container/Injection";


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
