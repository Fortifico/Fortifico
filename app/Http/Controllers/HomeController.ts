import { view } from "@fortifico/framework/modules/Helpers"
import { Controller } from "@fortifico/framework/modules/Routing/Controller";


export class HomeController extends Controller
{

    constructor()
    {
        super()
    }
    
    public index()
    {
        return view("home").with([1, 2, 3, 4]);
    }
}
