import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ExternarlHTTPCallsService } from 'app/api/externarl-httpcalls.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */

  constructor(private _externarlHTTPCallsService: ExternarlHTTPCallsService) {
    this._getCovid19Stats();
  }

  private _getCovid19Stats(): void {
    //this._externarlHTTPCallsService.getCovid19Stats().toPromise();
  }
}
