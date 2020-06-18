import { Config } from 'ontimize-web-ngx';

import { environment } from '../environments/environment';
import { MENU_CONFIG } from './shared/app.menu.config';
import { CustomOntimizeService } from './shared/custom-ontimize.service';

// import { SERVICE_CONFIG } from './shared/app.services.config';
export const CONFIG: Config = {
  // The base path of the URL used by app services.
  apiEndpoint: environment.apiEndpoint,
  uuid: 'com.ontimize.web.ngx.dynamicwebform',

  // Title of the app
  title: 'Dynamic web form',

  //  Language of the application.
  locale: 'en',

  // The service type used (Ontimize REST standart, Ontimize REST JEE or custom implementation)
  // in the whole application.
  serviceType: CustomOntimizeService,

  // Configuration parameters of application services.
  // servicesConfiguration: SERVICE_CONFIG

  appMenuConfiguration: MENU_CONFIG,

  applicationLocales: ['es', 'en']
};
