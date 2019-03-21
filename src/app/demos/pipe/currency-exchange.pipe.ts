import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyExchange'
})
export class CurrencyExchangePipe implements PipeTransform {

  currenyRate:Map<string,number> = new Map<string,number>([['CNY', 6.79],['JPY',112.42]]);

  transform(value: any, currencyCode: string ): any {
    return value * this.currenyRate.get(currencyCode);
  }

}
