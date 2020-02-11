import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class NetworkErrorInterceptor implements HttpInterceptor {

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);

        let uxErrorMessage = 'An unknown error occurred!';

        if (error.error.message) {
          uxErrorMessage = error.error.message;
        }

        // TODO: Add a component modal dialog or a toaster that displays error.
        // TODO: Send log to DB

        return throwError(error);
      })
    );
  }

}
