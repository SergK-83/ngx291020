import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

interface IRate {
  value: number;
  currency: string;
}

@Directive({
  selector: '[appExchangeRates]'
})
export class ExchangeRatesDirective implements OnInit{

  @Input('appExchangeRatesFrom')
  public rates = [] as IRate[];

  @Input('appExchangeRatesAutoplay')
  public mode!: 'on' | 'off';

  public context: any = null;

  constructor(
    private tpl: TemplateRef<any>,
    private vcr: ViewContainerRef,
  ) { }

  public ngOnInit(): void {
    this.context = {
      $implicit: this.rates[0]
    }
    this.vcr.createEmbeddedView(this.tpl, this.context);
  }

}
