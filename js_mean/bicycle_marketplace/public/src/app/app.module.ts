import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { UserService } from './user.service';
import { PostService } from './post.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { ListingsComponent } from './listings/listings.component';
import { BicycleListingComponent } from './bicycle-listing/bicycle-listing.component';
import { FileSelectDirective } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegComponent,
    DashboardComponent,
    NavComponent,
    ListingsComponent,
    BicycleListingComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- Include module in our AppModules
    HttpModule // <-- Include module in our AppModules
  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
