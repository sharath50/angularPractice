// to access the enable prod mode class to enable production mode in angular project
import { enableProdMode } from "@angular/core";

// this is used to target the browser
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

// importing root module to use to bootstrap the app
import { AppModule } from "./app/app.module";

// imported from environments folder to get access to the environment class
import { environment } from "./environments/environment";

// to enable the production mode by checking environment variable
if (environment.production) {
  enableProdMode();
}

// use platformBrowserDynamic to bootstrap the Root module that is AppModule for us
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
