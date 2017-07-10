import { MainComponent } from './+main';
import { LOGIN_DIRECTIVES } from './+login';
import { DYNAMICFORMS_DIRECTIVES } from './+main/+dynamicforms';
import { DATA_DIRECTIVES } from './+main/+data';
import { SHARED_DIRECTIVES } from './shared';


// All directives of the application
export const APP_DIRECTIVES: any = [
  LOGIN_DIRECTIVES,
  MainComponent,
  DYNAMICFORMS_DIRECTIVES,
  DATA_DIRECTIVES,
  SHARED_DIRECTIVES
];
