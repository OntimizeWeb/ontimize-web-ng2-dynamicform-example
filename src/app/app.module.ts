import { NgModule, Injector } from '@angular/core';

import { APP_CONFIG, ONTIMIZE_PROVIDERS, ONTIMIZE_MODULES } from 'ontimize-web-ngx';

import { TranslateModule } from '@ngx-translate/core';

import { CONFIG } from './app.config';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main/main.module';
import { LoginModule } from './login/login.module';
import { CustomOntimizeService } from './shared/custom-ontimize.service';

import { ComponentSettingsDialogComponent } from 'ontimize-web-ngx-dynamicform-builder';

export function getCustomOntimizeServiceProvider(injector) {
  return new CustomOntimizeService(injector);
}

// Defining custom providers (if needed)...
let customProviders = [
  {
    provide: CustomOntimizeService,
    useFactory: getCustomOntimizeServiceProvider,
    deps: [Injector]
  }
];

@NgModule({
  imports: [
    ONTIMIZE_MODULES,
    MainModule,
    LoginModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  entryComponents: [
    ComponentSettingsDialogComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: APP_CONFIG, useValue: CONFIG },
    ...ONTIMIZE_PROVIDERS,
    ...customProviders
  ]
})
export class AppModule { }
