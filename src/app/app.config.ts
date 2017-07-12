import { Config } from 'ontimize-web-ng2/ontimize';
// import { SERVICE_CONFIG } from './shared/app.services.config';

import { CustomOntimizeService } from './shared';

export const CONFIG: Config = {
  // The base path of the URL used by app services.
  // apiEndpoint: 'http://imatia211:8150/dynamic-web-form-wsrest',
  apiEndpoint: 'https://trial.imatia.com/demosontimize/dynamic-web-form-wsrest',
  uuid: 'com.ontimize.web.ng2.dynamicwebform',

  // Title of the app
  title: 'Dynamic web form',


  //  Language of the application.
  locale: 'en',


  // The service type used (Ontimize REST standart, Ontimize REST JEE or custom implementation)
  // in the whole application.
  serviceType: CustomOntimizeService,

  // Configuration parameters of application services.
  // servicesConfiguration: SERVICE_CONFIG
};
