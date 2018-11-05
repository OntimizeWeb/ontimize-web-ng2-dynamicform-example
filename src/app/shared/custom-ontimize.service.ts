import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

import { OntimizeService } from 'ontimize-web-ngx';

export class CustomOntimizeService extends OntimizeService {

  constructor(protected injector: Injector) {
    super(injector);
  }

  public insertDynamicForm(av: Object = {}, entity?: string, sqltypes?: Object): Observable<any> {
    entity = (this.isNullOrUndef(entity)) ? this.entity : entity;

    av = (this.isNullOrUndef(av)) ? this.av : av;
    sqltypes = (this.isNullOrUndef(sqltypes)) ? this.sqltypes : sqltypes;

    var url = this._urlBase + '/insertDynamicForm';

    const options = {
      headers: this.buildHeaders()
    };
    var body = JSON.stringify({
      user: this._user,
      sessionid: this._sessionid,
      entity: entity,
      av: av,
      sqltypes: sqltypes
    });
    const self = this;
    let innerObserver: any;
    const dataObservable = new Observable(observer => innerObserver = observer).pipe(share());

    this.httpClient.post(url, body, options).subscribe(resp => {
      self.responseParser.parseSuccessfulResponse(resp, innerObserver, this);
    }, error => {
      self.responseParser.parseUnsuccessfulResponse(error, innerObserver, this);
    },
      () => innerObserver.complete());
    return dataObservable;
  }

  public updateDynamicFormVersion(kv: Object = {}, av: Object = {},
    entity?: string, sqltypes?: Object): Observable<any> {

    entity = (this.isNullOrUndef(entity)) ? this.entity : entity;

    kv = (this.isNullOrUndef(kv)) ? this.kv : kv;
    av = (this.isNullOrUndef(av)) ? this.av : av;
    sqltypes = (this.isNullOrUndef(sqltypes)) ? this.sqltypes : sqltypes;

    const url = this._urlBase + '/updateDynamicFormVersion';

    const options = {
      headers: this.buildHeaders()
    };

    const body = JSON.stringify({
      user: this._user,
      sessionid: this._sessionid,
      entity: entity,
      kv: kv,
      av: av,
      sqltypes: sqltypes
    });

    const self = this;
    let innerObserver: any;
    const dataObservable = new Observable(observer => innerObserver = observer).pipe(share());

    this.httpClient.post(url, body, options).subscribe(resp => {
      self.responseParser.parseSuccessfulResponse(resp, innerObserver, this);
    }, error => {
      self.responseParser.parseUnsuccessfulResponse(error, innerObserver, this);
    },
      () => innerObserver.complete());

    return dataObservable;
  }

}
