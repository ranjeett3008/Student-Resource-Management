import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../http.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-student-summary',
  templateUrl: './student-summary.component.html',
  styleUrls: ['./student-summary.component.css']
})


export class StudentSummaryComponent implements OnInit {

  constructor(private HttpService:HttpService, private router:Router, private spinner:NgxSpinnerService) { }

  data:any;
  ngOnInit(): void {
    this.spinner.show();
    this.HttpService.getStudents().subscribe(res => {
      this.spinner.hide();
      this.data = Object.values(res)[0]
    });
  }

  /**
   * Edits student
   * @param id 
   */
  editStudent(id:any){
      this.router.navigateByUrl('student/edit/'+id);
  }

  /**
   * Deletes student
   * @param id 
   */
  deleteStudent(id:any){
    this.spinner.show();
    this.HttpService.deleteStudent(id).subscribe(res => {
      this.ngOnInit();
    });
  }

  addStudentForm(){
    this.router.navigateByUrl('student/add');
  }
}
