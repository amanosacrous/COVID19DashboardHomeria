import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { CountryDetailed } from 'app/api/modules/countryDetailed';
import { CovidStatus } from 'app/api/modules/covidStatus';
import { Chucknorris } from 'app/api/modules/chucknorris';
import { NumberInfo } from 'app/api/modules/numberInfo';

@Injectable({providedIn: 'root'})
export class ExternarlHTTPCallsService {

  /**
   * Private variables -----------------------------------------------------------------------------------------
   */
  private _ipAdress: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  private _selCountryDetailed: BehaviorSubject<CountryDetailed> = new BehaviorSubject<CountryDetailed>(null);

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
    this._selCountryDetailed.next(countryDetailed);
  }

  /**
   * Get an observable for subscrive to general country changes
   *
   * @return {*}  {Observable<CountryDetailed>}
   * @memberof ExternarlHTTPCallsService
   */
  public getSelectedCountry(): Observable<CountryDetailed> {
    return this._selCountryDetailed.asObservable();
  }

  public async getVountriInfoFromUserIp(): Promise<Observable<any>>{
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
    let queryParameters = new HttpParams();
    if (country) {
      queryParameters = queryParameters.set('country', <any>country);
    }
    return this._httpClient.request<CovidStatus>('get',`/api/v1/stats`, {
      params: queryParameters,
    });
  }

  /**
   * Return an observable to a chucknorris random info
   *
   * @return {*}  {Observable<Chucknorris>}
   * @memberof ExternarlHTTPCallsService
   */
  public getChucknorrisRandomInfo():Observable<Chucknorris>{
    return this._httpClient.request<Chucknorris>('get',`https://api.chucknorris.io/jokes/random`); 
  }

  /**
   * Request and return information about the number "number"
   * 
   * @param numberReq 
   * @returns 
   */
  public getInfoAboutNumber(numberReq: number): Observable<any> {
    return this._httpClient.get(`http://numbersapi.com/${encodeURIComponent(numberReq)}`, {
      responseType: 'text',
    }); 
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
