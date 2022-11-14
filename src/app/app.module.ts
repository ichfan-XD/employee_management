import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store'
import { numberOfRecordChanger,pageActiveChanger, sortingKeyChanger, keyWord1Changer, keyWordBy1Changer, keyWord2Changer, keyWordBy2Changer } from './store.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({
      pageActive : pageActiveChanger,
      numberOfRecord : numberOfRecordChanger,
      sortingKey : sortingKeyChanger,
      keyWord1 : keyWord1Changer,
      keyWordBy1 : keyWordBy1Changer,
      keyWord2 : keyWord2Changer,
      keyWordBy2 : keyWordBy2Changer,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
