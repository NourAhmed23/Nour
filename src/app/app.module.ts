import { HttpClientModule }    from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HemaComponent } from './components/hema/hema.component';
import { EventsComponent } from './components/events/events.component';
import { CeventsComponent } from './components/cevents/cevents.component';
import { MyFormsComponent } from './components/my-forms/my-forms.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { DataServiceService } from './services/data-service.service';
import { FavoriteComponent } from './favorite-components/favorite/favorite.component';
import { SummaryPipe } from './summary.pipe';
import { CpanelComponent } from './cpanels/cpanel/cpanel.component';
import { InputFormatDirective } from './input-format.directive';
import { LoginComponent } from './login/login/login.component';
import { CustomFormsModule,CustomValidators } from 'ng2-validation';
import { DirectivComponent } from './components/directiv/directiv.component';
import { CustmdirctivsComponent } from './custmdirctivs/custmdirctivs.component';
import { PostService } from './service/post.service'
import { from } from 'rxjs';
//import { HttpModule } from '@angular/http'

// import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    HemaComponent,
    EventsComponent,
    CeventsComponent,
    MyFormsComponent,
    MyComponentComponent,
    FavoriteComponent,
    SummaryPipe,
    CpanelComponent,
    InputFormatDirective,
    LoginComponent,
    DirectivComponent,
    CustmdirctivsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
    HttpClientModule
    //CustomValidators

  ],
  providers: [DataServiceService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
