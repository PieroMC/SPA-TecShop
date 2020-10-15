import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// router
import { APP_ROUTING } from "./app.routes";


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { ContentComponent } from './components/shared/content/content.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MakesaleComponent } from './components/makesale/makesale.component';
import { ReportsaleComponent } from './components/reportsale/reportsale.component';

import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    MakesaleComponent,

    ReportsaleComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
