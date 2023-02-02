import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { PrintempComponent } from './printemp/printemp.component';
import { PrintformposComponent } from './printformpos/printformpos.component';

const routes: Routes = [
  { path: '', component: EmployeeformComponent},
  { path: 'printpos/:name/:office/:qrcode', component: PrintformposComponent },
  { path: 'printemp/:name/:office', component: PrintempComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
