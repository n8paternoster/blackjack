import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayingCardComponent } from './playing-card/playing-card.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayingCardComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
