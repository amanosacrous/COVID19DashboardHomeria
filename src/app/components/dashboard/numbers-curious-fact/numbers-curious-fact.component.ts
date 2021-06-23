import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ExternarlHTTPCallsService } from 'app/api/externarl-httpcalls.service';

@Component({
  selector: 'app-numbers-curious-fact',
  templateUrl: './numbers-curious-fact.component.html',
  styleUrls: ['./numbers-curious-fact.component.scss']
})
export class NumbersCuriousFactComponent implements OnInit {

  /**
   * Private variables ---------------------------------------------------------
   */
   public numberInfo: string;
   public selectedNumber: FormControl = new FormControl('', [Validators.pattern("^[0-9]*$")]);
 
   /**
    * Constructors ------------------------------------------------------------
    */  
   constructor(private _externarlHTTPCallsService: ExternarlHTTPCallsService) {
     this.getNumberInformation();
   }
 
   ngOnInit(): void {}
 
   /**
    * Public methods --------------------------------------------------------
    */
 
   /**
    * Obtain about chucknorris random information
    *
    * @memberof ChuckNorrisInfoComponent
    */
   public async getNumberInformation(): Promise<void> {
    this._externarlHTTPCallsService.getInfoAboutNumber(30).subscribe(
      (text: string) => {
        this.numberInfo = text;
      }, (err: any) => {
        console.log(err);
      }
    )

   }
}
