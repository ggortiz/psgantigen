import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { InputformComponent } from './inputform/inputform.component';
import { PrintformComponent } from './printform/printform.component';
import { PrintformposComponent } from './printformpos/printformpos.component';

const routes: Routes = [
  { path: '', component: EmployeeformComponent},
  { path: 'printpos/:name/:office', component: PrintformposComponent },
  // { path: 'input/:name/:office/:contact', component: InputformComponent},
  // { path: 'print/:name/:office/:contact/:age/:gender', component: PrintformComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
