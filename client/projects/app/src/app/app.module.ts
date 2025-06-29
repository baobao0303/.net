import { AppContext } from '@infrastructure/base';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { VIEW_COMMAND_MAPPER_REGISTRY } from '@view/base';

@NgModule({
  declarations: [AppComponent],
  imports: [MatProgressSpinnerModule, BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: AppContext,
      useFactory: () => {
        const uri = environment.URI;
        var appContext = new AppContext();
        appContext.endPoint = uri;
        console.log('AppContext initialized with URI:', uri);
        return appContext;
      },
    },
    // TO Do: need build command mapper registry
    { provide: VIEW_COMMAND_MAPPER_REGISTRY, useValue: {} },
  ],
})
export class AppModule {}
