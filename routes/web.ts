import { Router } from "@fortifico/framework/modules/Routing/Router";
import { view } from "@fortifico/framework/modules/Helpers";
import { Application as App } from "@fortifico/framework/modules/Application";


export function web(router: Router)
{
    router.get("/", "HomeController@index");
    router.get("/dates", "DateController@index");
    router.get('/about', (dates: Date[]) => {
        return view('about').with(dates);
    });
}
