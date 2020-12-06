import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Inject} from '@angular/core';
import {BASE_URL} from './config';
import {filter, map} from 'rxjs/operators';

export class AuthInterceptor implements HttpInterceptor {

  public constructor(
    @Inject(BASE_URL) private baseUrl: string
  ) {

  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const jsonReq = req.clone({
      url: `${this.baseUrl}${req.url}`
    });

    return next.handle(jsonReq)
      .pipe(
        filter<any>((event: HttpEvent<any>) => event instanceof HttpResponse),
        map((res: HttpResponse<any>) => {
          return res.clone({body: res.body?.data});
        })
      );
  }
}
