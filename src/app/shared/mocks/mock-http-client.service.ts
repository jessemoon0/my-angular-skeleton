import { Observable, of, throwError } from 'rxjs';

export class MockHttpClientService {
  public lastRoute: string;
  public lastBody: any;
  public hasError = false;
  public error: any;
  public items: any;
  public lastHttpVerb = '';
  public lastOptions: any = null;
  public response: any;

  public post(route: string, body: any, options?: any): Observable<any> {
    this.lastHttpVerb = 'POST';
    this.lastRoute = route;
    this.lastBody = body;
    this.lastOptions = options;

    if (this.hasError) {
      return throwError(this.error);
    }

    const returnedItem = this.response ? this.response : body;

    return of(returnedItem);
  }

  public delete(route: string, options?: any): Observable<any> {
    this.lastHttpVerb = 'DELETE';
    this.lastRoute = route;
    this.lastOptions = options;

    if (this.hasError) {
      throw new Error();
    }

    return of({});
  }

  public put(route: string, body: any, options?: any): Observable<any> {
    this.lastHttpVerb = 'PUT';
    this.lastRoute = route;
    this.lastBody = body;
    this.lastOptions = options;

    if (this.hasError || !!this.error) {
      return throwError(this.error || new Error('PUT error'));
    }

    return of(this.response ? this.response : { body });
  }

  public patch(route: string, body: any, options?: any): Observable<any> {
    this.lastHttpVerb = 'PATCH';
    this.lastRoute = route;
    this.lastBody = body;
    this.lastOptions = options;

    if (this.hasError || !!this.error) {
      return throwError(this.error || new Error('PATCH error'));
    }

    return of(this.response ? this.response : { body });
  }

  public get(route: string, body: any, options?: any): Observable<any> {
    this.lastHttpVerb = 'GET';
    this.lastRoute = route;
    this.lastOptions = options;

    if (this.hasError) {
      return throwError(this.error);
    }

    return of(this.items);
  }
}
