import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators  } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import {HttpService} from '../../http.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private HttpService:HttpService, private router:Router, private activeRoute:ActivatedRoute) {
    this.activeRoute.params.subscribe( params => 
      {
          if(params.id)
          {
              this.id = params.id;
              this.editStudent(params.id);
          }
      });
   }
  id:any;
  resourcesList:any;
  ngOnInit(): void {
    this.HttpService.getResources().subscribe(res => {
      console.log( Object.values(res)[0]);
      this.resourcesList = Object.values(res)[0];
    });
  }

  studentForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    resource: new FormControl('')
  });

  /**
   * Adds student
   */
  addStudent(){
    console.log(this.studentForm.value);
    if(this.id){
      this.updateStudent(this.id);
    }
    else{
      this.HttpService.createStudent(this.studentForm.value).subscribe(res => {
        this.router.navigateByUrl('student/summary');
      });
    }
    
  }

  editStudent(id:any){
    console.log('Edit resource api call');
    this.HttpService.getSigngleStudent(id).subscribe(res => {
      console.log(res)
      delete Object.values(res)[0].id;
      delete Object.values(res)[0].created_at;
      delete Object.values(res)[0].updated_at;
      delete Object.values(res)[0].resources;
      this.studentForm.setValue(Object.values(res)[0]);
      // this.isSuccessMsg = false;
    }); 
  }


  /**
   * Updates student
   * @param id 
   */
  updateStudent(id:any){
    this.HttpService.updateStudent(id, this.studentForm.value).subscribe(res => {
      console.log('result updated');
      this.router.navigateByUrl('student/summary');
    });
  }
}
