import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailComponent } from './payment-details/payment-detail/payment-detail.component';
import { PaymentDetailListComponent } from './payment-details/payment-detail-list/payment-detail-list.component';
import { PaymentDetailService } from './shared/payment-detail.service';
import { ApplayoutComponent } from './applayout/applayout.component';
import { NavbarComponent } from './Applayout/navbar/navbar.component';
import { FooterComponent } from './Applayout/footer/footer.component';
import { AppUserComponent } from './app-user/app-user.component';
import { AppUserListComponent } from './app-user/app-user-list/app-user-list.component';
import { AppUserFormComponent } from './app-user/app-user-form/app-user-form.component';
import { UserLoginComponent } from './app-user/user-login/user-login.component';
import { AppTreeComponent } from './app-tree/app-tree.component';
import { AppTreeFormComponent } from './app-tree/app-tree-form/app-tree-form.component';
import { AppTreeListComponent } from './app-tree/app-tree-list/app-tree-list.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppMapComponent } from './app-home/app-map/app-map.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailComponent,
    PaymentDetailListComponent,
    ApplayoutComponent,
    NavbarComponent,
    FooterComponent,
    AppUserComponent,
    AppUserListComponent,
    AppUserFormComponent,
    UserLoginComponent,
    AppTreeComponent,
    AppTreeFormComponent,
    AppTreeListComponent,
    AppHomeComponent,
    AppMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyD46I-WyorPMJnIt4hUCuJjPivISW5XjXs'
    }),
    ToastrModule.forRoot()
  ],
  providers: [PaymentDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }