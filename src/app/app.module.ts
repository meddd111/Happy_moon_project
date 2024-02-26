import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HappyPopupComponent } from './happy-popup/happy-popup.component';
import { SadPopupComponent } from './sad-popup/sad-popup.component';
import { CalmPopupComponent } from './calm-popup/calm-popup.component';
import { EnergeticPopupComponent } from './energetic-popup/energetic-popup.component';
import { ConfusedPopupComponent } from './confused-popup/confused-popup.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HappyPopupComponent,
    SadPopupComponent,
    CalmPopupComponent,
    EnergeticPopupComponent,
    ConfusedPopupComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
