import { CheckDate } from "../Middleware/CheckDate";
import { View } from "@fortifico/framework/modules/View";
import { view } from "@fortifico/framework/modules/Helpers";
import { Controller } from "@fortifico/framework/modules/Routing/Controller";

export class DateController extends Controller
{

    constructor()
    {
        // this.middleware(CheckDate);
        super();

    }

    index(dates: Date): View
    {
        return view("dates").with(dates);
    }
    
}
