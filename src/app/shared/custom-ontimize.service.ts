import { Injector } from '@angular/core';
import { OntimizeService, Util } from 'ontimize-web-ngx';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

export class CustomOntimizeService extends OntimizeService {

  constructor(protected injector: Injector) {
    super(injector);
  }

  public insertDynamicForm(av: Object = {}, entity?: string, sqltypes?: Object): Observable<any> {
    const url = this._urlBase + '/insertDynamicForm';

    entity = Util.isDefined(entity) ? entity : this.entity;
    av = Util.isDefined(av) ? av : this.av;
    sqltypes = Util.isDefined(sqltypes) ? sqltypes : this.sqltypes;

    const options = {
      headers: this.buildHeaders()
    };
    const body = JSON.stringify({
      user: this._user,
      sessionid: this._sessionid,
      entity,
      av,
      sqltypes
    });

    let innerObserver: any;
    const dataObservable = new Observable(observer => innerObserver = observer).pipe(share());

    this.httpClient.post(url, body, options).subscribe(
      resp => this.responseParser.parseSuccessfulResponse(resp, innerObserver, this),
      error => this.responseParser.parseUnsuccessfulResponse(error, innerObserver, this),
      () => innerObserver.complete()
    );

    return dataObservable;
  }

  public updateDynamicFormVersion(kv: Object = {}, av: Object = {}, entity?: string, sqltypes?: Object): Observable<any> {
    const url = this._urlBase + '/updateDynamicFormVersion';

    entity = Util.isDefined(entity) ? entity : this.entity;
    kv = Util.isDefined(kv) ? kv : this.kv;
    av = Util.isDefined(av) ? av : this.av;
    sqltypes = Util.isDefined(sqltypes) ? sqltypes : this.sqltypes;

    const options = {
      headers: this.buildHeaders()
    };
    const body = JSON.stringify({
      user: this._user,
      sessionid: this._sessionid,
      entity,
      kv,
      av,
      sqltypes
    });

    let innerObserver: any;
    const dataObservable = new Observable(observer => innerObserver = observer).pipe(share());

    this.httpClient.post(url, body, options).subscribe(
      resp => this.responseParser.parseSuccessfulResponse(resp, innerObserver, this),
      error => this.responseParser.parseUnsuccessfulResponse(error, innerObserver, this),
      () => innerObserver.complete()
    );

    return dataObservable;
  }

}
