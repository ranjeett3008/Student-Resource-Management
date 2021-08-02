import { StudentRoutingModule } from './student-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentSummaryComponent } from './student-summary/student-summary.component';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    AddStudentComponent,
    StudentSummaryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    StudentRoutingModule,
    NgxSpinnerModule
  ],
  exports: [
    AddStudentComponent,
    StudentSummaryComponent
  ]
})
export class StudentModule { }
