import { Component, OnInit } from '@angular/core';
import { ExternarlHTTPCallsService } from 'app/api/externarl-httpcalls.service';
import { CountryDetailed } from 'app/api/modules/countryDetailed';
import { CovidStatus } from 'app/api/modules/covidStatus';

@Component({
  selector: 'app-covid19-information',
  templateUrl: './covid19-information.component.html',
  styleUrls: ['./covid19-information.component.scss']
})
export class Covid19InformationComponent {

  /**
   * Private variables ---------------------------------------------------------
   */
  private _selectedCountry: CountryDetailed;
  private _covidStatus: CovidStatus;

 
  /**
   * Getters and setters -------------------------------------------------
   */
  public get covidStatus(): CovidStatus { return this._covidStatus; }
  public set covidStatus(value: CovidStatus) { this._covidStatus = value; }
 
 
    /**
    * Constructors ------------------------------------------------------------
    */
    constructor(private _externarlHTTPCallsService: ExternarlHTTPCallsService) {
      this._externarlHTTPCallsService.getSelectedCountry().subscribe(
        (countryDetailed: CountryDetailed) => {
          this._selectedCountry = countryDetailed;
          this._covidStatus = null;
          if(this._selectedCountry){
            this._getCovid19Stats();
          }
        }, (err: any ) => {
          console.log(err);
        }
      )
    }
 
  /**
  * Private methods --------------------------------------------------------
  */
 
  /**
  * Obtain the covid-19 information of to the selected country
  *
  * @private
  * @memberof DashboardComponent
  */
  private async _getCovid19Stats(): Promise<void> {
    try {
      this._covidStatus = await this._externarlHTTPCallsService.getCovid19Stats(this._selectedCountry['country-name']).toPromise();
    } catch (err) {
      console.log(err);
    }
  }

}
