import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [BrowserModule, HttpModule, JsonpModule],
  declarations: [ AppComponent ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
