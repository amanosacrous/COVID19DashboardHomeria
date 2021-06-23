import { Component, OnInit } from '@angular/core';
import { ExternarlHTTPCallsService } from 'app/api/externarl-httpcalls.service';
import { Chucknorris } from 'app/api/modules/chucknorris';

/**
 * Manage the view for get random chucknorris information and display it
 *
 * @export
 * @class ChuckNorrisInfoComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-chuck-norris-info',
  templateUrl: './chuck-norris-info.component.html',
  styleUrls: ['./chuck-norris-info.component.scss']
})

export class ChuckNorrisInfoComponent implements OnInit {

  /**
   * Private variables ---------------------------------------------------------
   */
  private _chucknorrisinfo: Chucknorris;

  /**
   * Getters and setters -------------------------------------------------
   */
  public get chucknorrisinfo(): Chucknorris { return this._chucknorrisinfo; }
  public set chucknorrisinfo(value: Chucknorris) { this._chucknorrisinfo = value; }

  /**
   * Constructors ------------------------------------------------------------
   */  
  constructor(private _externarlHTTPCallsService: ExternarlHTTPCallsService) {
    this._initializeChuicknorrisInfo();
  }

  ngOnInit(): void {}

  /**
   * Private methods --------------------------------------------------------
   */

  /**
   * Obtain about chucknorris random information
   *
   * @memberof ChuckNorrisInfoComponent
   */
  private async _initializeChuicknorrisInfo(): Promise<void> {
    const res = await this._externarlHTTPCallsService.getChucknorrisRandomInfo().toPromise().catch((err: any) => console.log(err) );
    if(res){
      this._chucknorrisinfo = res;
    }
  }

}
