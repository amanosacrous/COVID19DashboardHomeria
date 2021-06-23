import { BrowserModule } from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


// Components ----------------------------------------------------
import { DashboardComponent } from 'app/components/dashboard/dashboard.component';
import { NavbarComponent } from 'app/components/navbar/navbar.component';

// Pipes ----------------------------------------------------
import { FilterCountriesPipe } from './pipes/filter-countries.pipe';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    FilterCountriesPipe,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
