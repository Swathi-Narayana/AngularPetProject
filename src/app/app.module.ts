import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetallstudentsComponent } from './getallstudents/getallstudents.component';
import { HttpClientModule } from '@angular/common/http';
import { AddstudentsComponent } from './addstudents/addstudents.component';
import { ModelPopUpService } from './services/model-pop-up.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DeletestudentsComponent } from './deletestudents/deletestudents.component';
import { EditstudentsComponent } from './editstudents/editstudents.component';

@NgModule({
  declarations: [
    AppComponent,
    GetallstudentsComponent,
    AddstudentsComponent,
    DeletestudentsComponent,
    EditstudentsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ModelPopUpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
