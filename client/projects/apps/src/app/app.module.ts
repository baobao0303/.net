import { AppContext } from '@infrastructure/base';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../../../app/src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: AppContext,
      useFactory: () => {
        const uri = environment.URI;
        var appContext = new AppContext();
        appContext.endPoint = uri;
        return appContext;
      },
    },
  ],
})
export class AppModule {}
