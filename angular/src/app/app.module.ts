import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignedInComponent } from "./components/signed-in/signed-in.component";
import { PopupComponent } from './components/popup/popup.component';
@NgModule({
  declarations: [AppComponent, SignInComponent, SignedInComponent, PopupComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
