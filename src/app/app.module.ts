import { BrowserModule } from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';

// Pipes ----------------------------------------------------
import { FilterCountriesPipe } from './pipes/filter-countries.pipe';

// Components ----------------------------------------------------
import { DashboardComponent } from 'app/components/dashboard/dashboard.component';
import { NavbarComponent } from 'app/components/navbar/navbar.component';
import { CountryInformationComponent } from 'app/components/dashboard/country-information/country-information.component';
import { ChuckNorrisInfoComponent } from 'app/components/dashboard/chuck-norris-info/chuck-norris-info.component';
import { NumbersCuriousFactComponent } from 'app/components/dashboard/numbers-curious-fact/numbers-curious-fact.component';

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
    MatInputModule,
    MatProgressSpinnerModule,
    MatTabsModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    FilterCountriesPipe,
    CountryInformationComponent,
    ChuckNorrisInfoComponent,
    NumbersCuriousFactComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
