import { Router } from "@fortifico/framework/modules/Routing/Router";
import { view } from "@fortifico/framework/modules/Helpers";

export function web(router: Router): void
{
    router.get("/", "HomeController@index");
    router.get("/dates", "DateController@index");
    
    router.get('/about', (dates: Date) => {
        return view('about').with(dates);
    });
}
