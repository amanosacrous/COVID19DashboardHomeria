import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ExternarlHTTPCallsService } from 'app/api/externarl-httpcalls.service';

/**
 * Class for obtain crious information about numbers entered by the user
 *
 * @export
 * @class NumbersCuriousFactComponent
 */
@Component({
  selector: 'app-numbers-curious-fact',
  templateUrl: './numbers-curious-fact.component.html',
  styleUrls: ['./numbers-curious-fact.component.scss']
})
export class NumbersCuriousFactComponent {

  /**
   * Private variables ---------------------------------------------------------
   */
  public numberInfo: string;
  public selectedNumber: FormControl = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
 
  /**
  * Constructors ------------------------------------------------------------
  */  
  constructor(private _externarlHTTPCallsService: ExternarlHTTPCallsService) {
    this.getNumberInformation();
  }
 
  /**
  * Public methods --------------------------------------------------------
  */
 
  /**
  * Request for curious information of the number entered in the form
  *
  * @memberof ChuckNorrisInfoComponent
  */
  public async getNumberInformation(): Promise<void> {
    if(this.selectedNumber.valid){
      this.numberInfo = null;
      this._externarlHTTPCallsService.getInfoAboutNumber(this.selectedNumber.value).subscribe(
        (text: string) => {
          this.numberInfo = text;
        }, (err: any) => {
          this.numberInfo = undefined;
          console.log(err);
        }
      );
    }
  }
}
