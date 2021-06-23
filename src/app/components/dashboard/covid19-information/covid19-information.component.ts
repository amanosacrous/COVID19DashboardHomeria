import { Component, OnDestroy } from '@angular/core';
import { ExternarlHTTPCallsService } from 'app/api/externarl-httpcalls.service';
import { CountryDetailed } from 'app/api/modules/countryDetailed';
import { CovidStatus } from 'app/api/modules/covidStatus';
import { ProvinceStatus } from 'app/api/modules/provinceStatus';
import { Subscription } from 'rxjs';

/**
 * Controller the covid 19 table information of the selected country 
 *
 * @export
 * @class Covid19InformationComponent
 */
@Component({
  selector: 'app-covid19-information',
  templateUrl: './covid19-information.component.html',
  styleUrls: ['./covid19-information.component.scss']
})
export class Covid19InformationComponent implements OnDestroy {

  /** 
   * Public variables
   */
  public v_s_provinceFilter: string;

  /**
   * Private variables ---------------------------------------------------------
   */
  private _selectedCountry: CountryDetailed;
  private _selectedCountrySubscription: Subscription;
  
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
    this._selectedCountrySubscription = this._externarlHTTPCallsService.getSelectedCountry().subscribe(
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
 
  ngOnDestroy() {
    if (this._selectedCountrySubscription) {
      this._selectedCountrySubscription.unsubscribe();
    }
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
      this._covidStatus.data.covid19Stats = this._covidStatus.data.covid19Stats.filter((provinceStatus: ProvinceStatus) => provinceStatus.province!=="Unknown")
    } catch (err) {
      console.log(err);
    }
  }

}
