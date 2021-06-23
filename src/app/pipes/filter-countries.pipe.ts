import { Pipe, PipeTransform } from '@angular/core';
import { CountryDetailed } from 'app/api/modules/countryDetailed';

/**
 * Filter "CountryDetailed" list for the country navbar selector
 *
 * @export
 * @class FilterCountriesPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'filterCountries'
})
export class FilterCountriesPipe implements PipeTransform {

  transform(countriesToFilter: CountryDetailed[], filter: string): unknown {
    if (!countriesToFilter || !filter) {
      return countriesToFilter;
    }

    return countriesToFilter.filter((country: CountryDetailed) => {
        if (country['country-name'].toLowerCase().includes(filter.toLowerCase())) return true;
        else return false;
    });
  }

}
