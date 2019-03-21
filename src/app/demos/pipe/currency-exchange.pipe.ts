import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyExchange'
})
export class CurrencyExchangePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
