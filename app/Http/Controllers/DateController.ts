import { CheckDate } from "../Middleware/CheckDate";
import { View } from "@fortifico/framework/modules/View";
import { view } from "@fortifico/framework/modules/Helpers";
import { Controller } from "@fortifico/framework/modules/Routing/Controller";
import { Application as App} from "@fortifico/framework/modules/Application";

export class DateController extends Controller
{

    constructor()
    {
        super();
    }

    @App.Inject
    index(dates: Date): View
    {
        return view("dates").with(dates);
    }
    
}
