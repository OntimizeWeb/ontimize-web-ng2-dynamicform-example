import { Injector } from '@angular/core';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

import {
  OntimizeService
  // ,
  // LoginService,
  // SERVICE_CONFIG
} from 'ontimize-web-ngx';

export class CustomOntimizeService extends OntimizeService {

  constructor(protected injector: Injector) {
    super(injector);
  }

  public insertDynamicForm(av: Object = {}, entity?: string, sqltypes?: Object): Observable<any> {
    entity = (this.isNullOrUndef(entity)) ? this.entity : entity;

    av = (this.isNullOrUndef(av)) ? this.av : av;
    sqltypes = (this.isNullOrUndef(sqltypes)) ? this.sqltypes : sqltypes;

    var url = this._urlBase + '/insertDynamicForm';

    var headers: Headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json;charset=UTF-8');

    var params = JSON.stringify({
      user: this._user,
      sessionid: this._sessionid,
      entity: entity,
      av: av,
      sqltypes: sqltypes
    });

    var self = this;
    let innerObserver: any;
    let dataObservable = new Observable(observer =>
      innerObserver = observer).share();

    this.http
      .post(url, params, { headers: headers })
      .map(response => response.json())
      .subscribe(resp => {
        if (resp.code === 3) {
          self.redirectLogin(true);
        } else if (resp.code === 1) {
          innerObserver.error(resp.message);
        } else if (resp.code === 0) {
          innerObserver.next(resp);
        } else {
          // Unknow state -> error
          innerObserver.error('Service unavailable');
        }
      }, error => innerObserver.error(error),
      () => innerObserver.complete());

    return dataObservable;
  }

  public updateDynamicFormVersion(kv: Object = {}, av: Object = {},
    entity?: string, sqltypes?: Object): Observable<any> {

    entity = (this.isNullOrUndef(entity)) ? this.entity : entity;

    kv = (this.isNullOrUndef(kv)) ? this.kv : kv;
    av = (this.isNullOrUndef(av)) ? this.av : av;
    sqltypes = (this.isNullOrUndef(sqltypes)) ? this.sqltypes : sqltypes;

    var url = this._urlBase + '/updateDynamicFormVersion';

    var headers: Headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json;charset=UTF-8');

    var params = JSON.stringify({
      user: this._user,
      sessionid: this._sessionid,
      entity: entity,
      kv: kv,
      av: av,
      sqltypes: sqltypes
    });

    var self = this;
    let innerObserver: any;
    let dataObservable = new Observable(observer =>
      innerObserver = observer).share();

    this.http
      .post(url, params, { headers: headers })
      .map(response => response.json())
      .subscribe(resp => {
        if (resp.code === 3) {
          self.redirectLogin(true);
        } else if (resp.code === 1) {
          innerObserver.error(resp.message);
        } else if (resp.code === 0) {
          innerObserver.next(resp);
        } else {
          // Unknow state -> error
          innerObserver.error('Service unavailable');
        }
      }, error => innerObserver.error(error),
      () => innerObserver.complete());

    return dataObservable;
  }

  // public getDefaultServiceConfiguration(serviceName?: string): Object {

  //   let loginService = this.injector.get(LoginService);
  //   let configuration = this.injector.get(SERVICE_CONFIG);

  //   let servConfig = {};
  //   if (serviceName && configuration.hasOwnProperty(serviceName)) {
  //     servConfig = configuration[serviceName];
  //   }
  //   servConfig['session'] = loginService.getSessionInfo();
  //   return servConfig;
  // }

  // public configureService(config: any): void {
  //   this._urlBase = './assets/dummy-data';
  //   this._sessionid = config.session ? config.session.id : -1;
  //   this._user = config.session ? config.session.user : '';

  //   if (config.entity !== undefined) {
  //     this.entity = config.entity;
  //   }
  // }

  // public startsession(user: string, password: string): Observable<any> {
  //   console.log('startsession');
  //   return undefined;
  // }

  // public endsession(user: string, sessionId: number): Observable<any> {
  //   console.log('endsession');
  //   return undefined;
  // }

  // public hassession(user: string, sessionId: number): Observable<any> {
  //   console.log('hassession');
  //   return undefined;
  // }

  // public query(kv?: Object, av?: Array<string>, entity?: string,
  //   sqltypes?: Object): Observable<any> {
  //   entity = (this.isNullOrUndef(entity)) ? this.entity : entity;

  //   var url = this._urlBase;
  //   if (entity === 'ECustomers') {
  //     url += '/ecustomers.json';
  //   }

  //   var headers: Headers = new Headers();
  //   headers.append('Access-Control-Allow-Origin', '*');
  //   headers.append('Content-Type', 'application/json;charset=UTF-8');

  //   var self = this;
  //   let innerObserver: any;
  //   let dataObservable = new Observable(observer =>
  //     innerObserver = observer).share();

  //   this.http
  //     .get(url, { headers: headers })
  //     .map(response => response.json())
  //     .subscribe(resp => {
  //       if (resp && resp.code === 3) {
  //         self.redirectLogin(true);
  //       } else if (resp.code === 1) {
  //         innerObserver.error(resp.message);
  //       } else if (resp.code === 0) {
  //         innerObserver.next(resp);
  //       } else {
  //         // Unknow state -> error
  //         innerObserver.error('Service unavailable');
  //       }
  //     }, error => innerObserver.error(error),
  //     () => innerObserver.complete());

  //   return dataObservable;
  // }

  // public advancedQuery(kv?: Object, av?: Array<string>, entity?: string, sqltypes?: Object,
  //   offset?: number, pagesize?: number, orderby?: Array<Object>): Observable<any> {
  //   return undefined;
  // }

  // public insert(av: Object = {}, entity?: string, sqltypes?: Object): Observable<any> {
  //   return undefined;
  // }

  // public update(kv: Object = {}, av: Object = {}, entity?: string,
  //   sqltypes?: Object): Observable<any> {
  //   return undefined;
  // }

  // public delete(kv: Object = {}, entity?: string, sqltypes?: Object): Observable<any> {
  //   return undefined;
  // }

}
