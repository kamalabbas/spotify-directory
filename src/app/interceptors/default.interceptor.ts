import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  private handelError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401 || err.status === 403) {
      sessionStorage.removeItem('userInfo');
      this.router.navigateByUrl(`/login`);
    }
    return throwError(() => new Error(''));
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let localStorageUserInfo = sessionStorage.getItem('userInfo');

    if(localStorageUserInfo != null ) {
      const userInfo: User =  JSON.parse(localStorageUserInfo);

      if (userInfo != null) {
        request = request.clone({
          headers: request.headers
            .set(
              'Authorization',
              `${userInfo.token_type} ${userInfo.access_token}`
            )
            .set('Accept', 'application/json'),
        });
      }
    }

    return next.handle(request).pipe(catchError((res) => this.handelError(res)));
  }
}
