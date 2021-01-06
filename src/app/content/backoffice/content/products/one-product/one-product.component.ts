import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {pluck} from 'rxjs/operators';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit {

  public product$ = this.activatedRoute.data.pipe(pluck('product'));

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot);

    // this.activatedRoute.queryParams.subscribe((q) => {
    //   console.log(q); // выведем query параметры из строки запроса
    // });
    // this.activatedRoute.params.subscribe((params) => {
    //   console.log(params.id);
    // });
    // this.activatedRoute.paramMap.subscribe((paramMap) => {
    //   console.log(paramMap.get('id'));
    // });
  }

}
