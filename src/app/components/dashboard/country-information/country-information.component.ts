import { Component, OnDestroy } from '@angular/core';
import { ExternarlHTTPCallsService } from 'app/api/externarl-httpcalls.service';
import { CountryDetailed } from 'app/api/modules/countryDetailed';
import { Subscription } from 'rxjs';

/**
 * Show the country information view with the capital, language and currency
 *
 * @export
 * @class CountryInformationComponent
 * @implements {OnDestroy}
 */
@Component({
  selector: 'app-country-information',
  templateUrl: './country-information.component.html',
  styleUrls: ['./country-information.component.scss']
})
export class CountryInformationComponent implements OnDestroy{

  /**
   * Private variables ---------------------------------------------------------
   */
  private _selectedCountry: CountryDetailed;
  private _selectedCountrySubscription: Subscription;

  /**
   * Getters and setters -------------------------------------------------
   */
  public get selectedCountry(): CountryDetailed { return this._selectedCountry; }
  public set selectedCountry(value: CountryDetailed) { this._selectedCountry = value; }

  /**
   * Constructors ------------------------------------------------------------
   */
  constructor(private _externarlHTTPCallsService: ExternarlHTTPCallsService) {
    this._selectedCountrySubscription = this._externarlHTTPCallsService.getSelectedCountry().subscribe(
      (countryDetailed: CountryDetailed) => {
        this._selectedCountry = countryDetailed;
      }, (err: any ) => {
        console.log(err);
      }
    )
  }

  ngOnDestroy() {
    if (this._selectedCountrySubscription) {
      this._selectedCountrySubscription.unsubscribe();
    }
  }

}
