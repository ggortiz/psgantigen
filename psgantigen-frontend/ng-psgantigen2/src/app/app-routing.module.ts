import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { PrintempComponent } from './printemp/printemp.component';
import { PrintformposComponent } from './printformpos/printformpos.component';
import { PrintvmsreportComponent } from './printvmsreport/printvmsreport.component';

const routes: Routes = [
  { path: '', component: EmployeeformComponent},
  { path: 'printpos', component: PrintformposComponent },
  { path: 'printemp/:name/:office', component: PrintempComponent },
  { path: 'printvmsreport', component: PrintvmsreportComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
