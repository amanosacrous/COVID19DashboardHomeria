import { Pipe, PipeTransform } from '@angular/core';
import { ProvinceStatus } from 'app/api/modules/provinceStatus';

/**
 * Pipe for filter the covid19 info table
 *
 * @export
 * @class FilterProvincesPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'filterProvinces'
})
export class FilterProvincesPipe implements PipeTransform {

  transform(provincesToFilter: ProvinceStatus[], filter: string): unknown {
    if (!provincesToFilter || !filter) {
      return provincesToFilter;
    }

    return provincesToFilter.filter((province: ProvinceStatus) => {
        if (province.province && province.province.toLowerCase().includes(filter.toLowerCase())) return true;
        else if (province.confirmed && province.confirmed.toString().includes(filter.toLowerCase())) return true;
        else if (province.deaths && province.deaths.toString().includes(filter.toLowerCase())) return true;
        else if (province.recovered && province.recovered.toString().includes(filter.toLowerCase())) return true;
        else return false;
    });
  }

}
