import { Component, OnInit } from '@angular/core';
import { CountryDetailed } from 'app/api/modules/countryDetailed';
import { ExternarlHTTPCallsService } from 'app/api/externarl-httpcalls.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  /**
   * Public variables -------------------------------------------------------
   */
  public selectedCountry: FormControl = new FormControl('', [Validators.required]);

  /**
   * Private methods ---------------------------------------------------------
   */
  private _countriesList: CountryDetailed[];

  /**
   * Getters and setters -------------------------------------------------
   */
  public get countriesList(): CountryDetailed[] { return this._countriesList; }
  public set countriesList(value: CountryDetailed[]) { this._countriesList = value; }

  /**
   * Constructors ------------------------------------------------------------
   */
  constructor(private _externarlHTTPCallsService: ExternarlHTTPCallsService) {
    this._initializeCountries();
  }

  ngOnInit(): void {}

  /**
   * Public methods ---------------------------------------------------------
   */
  public changeSelectedCountry(countryDetailed: CountryDetailed): void {
    this._externarlHTTPCallsService.setSelectedCountry(countryDetailed);
  }

  /**
   * Private methods --------------------------------------------------------
   */

  /**
   * Initialize the countries autocomplete and select the country related with the user IP
   *
   * @private
   * @memberof NavbarComponent
   */
  private async _initializeCountries(): Promise<void> {
    const resp = await this._externarlHTTPCallsService.getCountriesList().toPromise().catch(err => console.log(err));
    if(resp) {
      this._countriesList = resp;
      let userIpCountry: CountryDetailed = resp[0];
      const retCoutry = (await this._externarlHTTPCallsService.getFromNameFromIp()).toPromise().catch(err => console.log(err));
      if(retCoutry){
        this._countriesList.find((country: CountryDetailed) => );
      }
      this.selectedCountry.patchValue(userIpCountry['country-name']);
    }

  }

}
