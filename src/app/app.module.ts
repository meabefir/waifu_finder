import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SfwComponent } from './sfw/sfw.component';
import { NsfwComponent } from './nsfw/nsfw.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SfwComponent,
    NsfwComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
