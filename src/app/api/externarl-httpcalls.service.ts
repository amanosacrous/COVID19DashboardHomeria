import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { CountryDetailed } from './countryDetailed';

@Injectable({providedIn: 'root'})
export class ExternarlHTTPCallsService {

  /**
   * Private variables ----------------------------------
   */
  private _ipAdress: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  /**
   * Constructors ----------------------------------
   */
  constructor(private _httpClient: HttpClient) {
    this._httpClient.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
      this._ipAdress.next(res.ip);
    });
  }

  /**
   * Return an Observable to the user ipAdress
   *
   * @return {*}  {Observable<string>}
   * @memberof ExternarlHTTPCallsService
   */
  public getUserObservable(): Observable<string> {
    return this._ipAdress.asObservable();
  }

  /**
   * Request and return an observable of the covid 19 stats for the country "country"
   *
   * @param {string} country
   * @return {*}  {Observable<any>}
   * @memberof ExternarlHTTPCallsService
   */
  public getCovid19Stats(country: string): Observable<any> {
    if (country === null || country === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getAffectation.');
    }
    return this._httpClient.request<any>('get',`https://covid19-api.weedmark.systems/api/v1/stats/${encodeURIComponent(country)}`);
  }

    //Pre: --
  //Post: S'ha retornat un Observable amb la llista d'informacio general de paisos (ubicat a assets/countriesGeneralInf.json)
  public getCountriesList(): Observable<CountryDetailed[]> {
    return this._httpClient.get<any>('assets/countriesGeneralInf.json');
  }
}
