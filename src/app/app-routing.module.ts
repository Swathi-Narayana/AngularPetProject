import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditstudentsComponent } from './editstudents/editstudents.component';
const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
