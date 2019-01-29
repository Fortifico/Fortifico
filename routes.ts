import { Router } from "@fortifico/framework/routing/Router";

export function web(router: Router): void
{
    router.get("/", "HomeController@index");
}