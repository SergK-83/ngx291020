import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Inject} from '@angular/core';
import {BASE_URL} from './config';

export interface IProduct {
  '_id': string;
  'title': string;
  'img': string;
  'price': number;
  'author': string;
  'isFavorite': boolean;
}

// @Injectable({
//   providedIn: 'root'
// })

export class ProductsService {

  public constructor(
    // @Inject(HttpClient) private http: HttpClient
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string
  ) {
    console.log('Init service', http, Date.now());
  }

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<{data: IProduct[]}>(`${this.baseUrl}`)
      .pipe(
        // pluck('data')
        map((res: {data: IProduct[]}) => {
          return res.data;
        })
      );
  }
}
