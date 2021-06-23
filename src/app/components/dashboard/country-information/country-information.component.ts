import { Component, OnInit } from '@angular/core';
import { ExternarlHTTPCallsService } from 'app/api/externarl-httpcalls.service';
import { CountryDetailed } from 'app/api/modules/countryDetailed';
import { CovidStatus } from 'app/api/modules/covidStatus';

@Component({
  selector: 'app-country-information',
  templateUrl: './country-information.component.html',
  styleUrls: ['./country-information.component.scss']
})
export class CountryInformationComponent {

  /**
   * Private variables ---------------------------------------------------------
   */
  private _selectedCountry: CountryDetailed;

   /**
    * Getters and setters -------------------------------------------------
    */
  public get selectedCountry(): CountryDetailed { return this._selectedCountry; }
  public set selectedCountry(value: CountryDetailed) { this._selectedCountry = value; }


  /**
   * Constructors ------------------------------------------------------------
   */
  constructor(private _externarlHTTPCallsService: ExternarlHTTPCallsService) {
    this._externarlHTTPCallsService.getSelectedCountry().subscribe(
      (countryDetailed: CountryDetailed) => {
        this._selectedCountry = countryDetailed;
      }, (err: any ) => {
        console.log(err);
      }
    )
  }

}
