import { Injector } from '@angular/core';
import { OntimizeService, Util, ServiceResponse } from 'ontimize-web-ngx';
import { Observable, Subscriber } from 'rxjs';
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

    // const options = {
    //   headers: this.buildHeaders()
    // };
    const body = JSON.stringify({
      user: this.user,
      sessionid: this._sessionid,
      entity,
      av,
      sqltypes
    });

    return this.doRequest({
      method: 'POST',
      url: url,
      body: body,
      successCallback: this.parseCustomSuccessfulResponse,
      errorCallBack: this.parseCustomUnsuccessfulResponse
    });

    // let innerObserver: any;
    // const dataObservable = new Observable(observer => innerObserver = observer).pipe(share());

    // this.httpClient.post(url, body, options).subscribe(
    //   resp => this.responseParser.parseSuccessfulResponse(resp, innerObserver, this),
    //   error => this.responseParser.parseUnsuccessfulResponse(error, innerObserver, this),
    //   () => innerObserver.complete()
    // );

    // return dataObservable;
  }

  public updateDynamicFormVersion(kv: Object = {}, av: Object = {}, entity?: string, sqltypes?: Object): Observable<any> {
    const url = this._urlBase + '/updateDynamicFormVersion';

    entity = Util.isDefined(entity) ? entity : this.entity;
    kv = Util.isDefined(kv) ? kv : this.kv;
    av = Util.isDefined(av) ? av : this.av;
    sqltypes = Util.isDefined(sqltypes) ? sqltypes : this.sqltypes;

    // const options = {
    //   headers: this.buildHeaders()
    // };
    const body = JSON.stringify({
      user: this.user,
      sessionid: this._sessionid,
      entity,
      kv,
      av,
      sqltypes
    });

    return this.doRequest({
      method: 'POST',
      url: url,
      body: body,
      successCallback: this.parseCustomSuccessfulResponse,
      errorCallBack: this.parseCustomUnsuccessfulResponse
    });

    // let innerObserver: any;
    // const dataObservable = new Observable(observer => innerObserver = observer).pipe(share());

    // this.httpClient.post(url, body, options).subscribe(
    //   resp => this.responseParser.parseSuccessfulResponse(resp, innerObserver, this),
    //   error => this.responseParser.parseUnsuccessfulResponse(error, innerObserver, this),
    //   () => innerObserver.complete()
    // );

    // return dataObservable;
  }

  protected parseCustomSuccessfulResponse(resp: ServiceResponse, observer: Subscriber<ServiceResponse>) {
    this.responseParser.parseSuccessfulResponse(resp, observer, this);
  }

  protected parseCustomUnsuccessfulResponse(error: any, observer: Subscriber<ServiceResponse>) {
    this.responseParser.parseUnsuccessfulResponse(error, observer, this);
  }

}
