import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrintformComponent } from './printform/printform.component';

const routes: Routes = [
  { path: 'print/:name/:office/:contact', component: PrintformComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
