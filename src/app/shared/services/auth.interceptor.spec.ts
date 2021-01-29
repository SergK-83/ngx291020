import {products} from '../../data';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {inject, TestBed} from '@angular/core/testing';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';
import {BASE_URL} from './config';
import {environment} from '../../../environments/environment';
import {ProductsService} from '../../content/backoffice/content/products/products.service';

const mockedProducts = products;

describe('Auth Interceptor', () => {
  let httpMocked: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        },
        {
          provide: BASE_URL,
          useValue: environment.baseUrl,
          // multi: true
        },
        ProductsService
      ]
    });
    httpMocked = TestBed.inject(HttpTestingController);

    it('should transform', inject([ProductsService, BASE_URL],
      (productsService: ProductsService, baseUrl: string) => {
        productsService.getProducts()
          .subscribe((products) => {
            expect(products).toEqual(mockedProducts);
          });

        const httpObj = httpMocked.expectOne({
          method: 'GET',
          url: `${baseUrl}/products`
        });

        httpObj.flush({data: mockedProducts});
      }));
  });


});
