import { NgModule }      from '@angular/core';

import {
  ONTIMIZE_MODULES,
  ONTIMIZE_DIRECTIVES,
  ontimizeProviders,
  ODialogComponent
} from 'ontimize-web-ng2/ontimize';

import { CONFIG } from './app.config';
import { AppComponent }  from './app.component';
import { routing } from './app.routes';
import { APP_DIRECTIVES } from './app.directives';
import { NavigationBarService } from './shared/navigation-bar.service';

import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

// import { FormioModule } from 'ng2-formio';

import { DynamicFormModule } from 'ontimize-web-ng2-dynamicform';

// Standard providers...
let standardProviders = ontimizeProviders({
  'config': CONFIG
});
// Defining custom providers (if needed)...
let customProviders = [
    NavigationBarService
];

@NgModule({
  /*, FormioModule.forRoot()*/
  imports: [ ONTIMIZE_MODULES, routing, HighlightJsModule, DynamicFormModule.forRoot()],
  declarations: [
    AppComponent,
    ONTIMIZE_DIRECTIVES,
    ...APP_DIRECTIVES
  ],
  entryComponents: [
    ODialogComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
    ...standardProviders,
    HighlightJsService,
    ...customProviders
  ]
})
export class AppModule { }

