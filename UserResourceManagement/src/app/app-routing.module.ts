import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'student', loadChildren:()  => import('./student/student.module')
    .then(mode => mode.StudentModule)
  },
  {
   path:'resource', loadChildren:()  => import('./resource/resource.module')
   .then(mode => mode.ResourceModule)
 }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
