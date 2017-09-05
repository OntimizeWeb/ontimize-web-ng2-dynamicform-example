import { NgModule, Injector } from '@angular/core';
import { MaterialModule } from '@angular/material';

import {
  APP_CONFIG,
  ONTIMIZE_PROVIDERS,
  ONTIMIZE_MODULES
} from 'ontimize-web-ng2';

import { TranslateModule } from '@ngx-translate/core';

import { CONFIG } from './app.config';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main/main.module';
import { LoginModule } from './login/login.module';
import { NavigationBarService } from './shared/navigation-bar.service';
import { CustomOntimizeService } from './shared/custom-ontimize.service';

import { DynamicFormModule } from 'ontimize-web-ng2-dynamicform';

import {
  DynamicFormBuilderModule,
  ComponentSettingsDialogComponent
} from 'ontimize-web-ng2-dynamicform-builder';

export function getCustomOntimizeServiceProvider(injector) {
  return new CustomOntimizeService(injector);
}

// Defining custom providers (if needed)...
let customProviders = [
  NavigationBarService,
  {
    provide: CustomOntimizeService,
    useFactory: getCustomOntimizeServiceProvider,
    deps: [Injector]
  }
];

@NgModule({
  imports: [
    ONTIMIZE_MODULES,
    MaterialModule,
    DynamicFormModule,
    DynamicFormBuilderModule,
    TranslateModule,
    LoginModule,
    MainModule,
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
