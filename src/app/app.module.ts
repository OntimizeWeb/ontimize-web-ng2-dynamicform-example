import { NgModule, Injector } from '@angular/core';

import {
  MaterialModule,
  MdIconRegistry
} from '@angular/material';

import {
  ONTIMIZE_MODULES,
  ontimizeProviders,
  ODialogComponent
} from 'ontimize-web-ng2/ontimize';

import { CONFIG } from './app.config';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { APP_DIRECTIVES } from './app.directives';
import { NavigationBarService, CustomOntimizeService } from './shared';

// import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
import { DynamicFormModule } from 'ontimize-web-ng2-dynamicform';

import {
  DynamicFormBuilderModule,
  ComponentSettingsDialogComponent
} from 'ontimize-web-ng2-dynamicform-builder';


// Standard providers...
let standardProviders = ontimizeProviders({
  'config': CONFIG
});

// Defining custom providers (if needed)...
let customProviders = [
  NavigationBarService,
  {
    provide: CustomOntimizeService,
    useFactory: (injector) => new CustomOntimizeService(injector),
    deps: [Injector]
  }
];

@NgModule({
  imports: [
    ONTIMIZE_MODULES,
    routing,
    // HighlightJsModule,
    MaterialModule.forRoot(),
    DynamicFormModule.forRoot(),
    DynamicFormBuilderModule
  ],
  declarations: [
    AppComponent,
    ...APP_DIRECTIVES
  ],
  entryComponents: [
    ODialogComponent,
    ComponentSettingsDialogComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    ...standardProviders,
    ...customProviders,
    MdIconRegistry
    // ,
    // HighlightJsService
  ]
})
export class AppModule { }

