import { AddStudentComponent } from './add-student/add-student.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentSummaryComponent } from './student-summary/student-summary.component';

const routes: Routes = [
  {path:'add', component:AddStudentComponent },
  {path:'summary', component:StudentSummaryComponent },
  
  {path:'edit/:id', component:AddStudentComponent },
  // {path:'', component:ResourceSummaaryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
