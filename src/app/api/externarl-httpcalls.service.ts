import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { CountryDetailed } from './modules/countryDetailed';
import { CovidStatus } from './modules/covidStatus';

@Injectable({providedIn: 'root'})
export class ExternarlHTTPCallsService {

  /**
   * Private variables -----------------------------------------------------------------------------------------
   */
  private _ipAdress: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  private _countryDetailed: BehaviorSubject<CountryDetailed> = new BehaviorSubject<CountryDetailed>(null);

  /**
   * Constructors ----------------------------------------------------------------------------------------------
   */
  constructor(private _httpClient: HttpClient) {
    this._httpClient.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
      this._ipAdress.next(res.ip);
    });
  }

  /**
   * Public methods ---------------------------------------------------------------------------------------------
   */

  /**
   * Set observable country
   *
   * @param {CountryDetailed} countryDetailed
   * @memberof ExternarlHTTPCallsService
   */
  public setSelectedCountry(countryDetailed: CountryDetailed) {
    this._countryDetailed.next(countryDetailed);
  }

  /**
   * Get an observable for subscrive to general country changes
   *
   * @return {*}  {Observable<CountryDetailed>}
   * @memberof ExternarlHTTPCallsService
   */
  public getSelectedCountry(): Observable<CountryDetailed> {
    return this._countryDetailed.asObservable();
  }

  public async getFromNameFromIp(): Promise<Observable<any>>{
    const res = await this._httpClient.get("http://api.ipify.org/?format=json").toPromise().catch((err: any) => console.log(err));
    if(res){
      return this._httpClient.request<any>('get',`https://freegeoip.app/json/${encodeURIComponent(res['ip'])}`); 
    }

  }

  /**
   * Request and return an observable of the covid 19 stats for the country "country"
   *
   * @param {string} country
   * @return {*}  {Observable<CovidStatus>}
   * @memberof ExternarlHTTPCallsService
   */
  public getCovid19Stats(country: string): Observable<CovidStatus> {
    if (country === null || country === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getAffectation.');
    }
    return this._httpClient.request<CovidStatus>('get',`https://covid19-api.weedmark.systems/api/v1/stats/${encodeURIComponent(country)}`);
  }

  /**
   * Return an observable to countries list
   *
   * @return {*}  {Observable<CountryDetailed[]>}
   * @memberof ExternarlHTTPCallsService
   */
  public getCountriesList(): Observable<CountryDetailed[]> {
    return this._httpClient.get<any>('assets/country-codes.json');
  }

  /**
   * Private methods ---------------------------------------------------------------------------------------------
   */

  /**
   * Return an Observable to the user ipAdress
   *
   * @return {*}  {Observable<string>}
   * @memberof ExternarlHTTPCallsService
   */
  private _getUserObservable(): Observable<string> {
    return this._ipAdress.asObservable();
  }
}
