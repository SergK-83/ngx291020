import {products} from '../../data';
import {HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

const productsList = products;

describe('Auth Interceptor', () => {
  let httmMocked: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
  });
});
