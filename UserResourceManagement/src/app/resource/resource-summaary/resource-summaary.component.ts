// import { HttpService } from './../../http.service';
import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../http.service';
import { Router ,ActivatedRoute} from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-resource-summaary',
  templateUrl: './resource-summaary.component.html',
  styleUrls: ['./resource-summaary.component.css']
})
export class ResourceSummaaryComponent implements OnInit {

  constructor(private router:Router, private HttpService:HttpService, private spinner:NgxSpinnerService) { }
  data: any;
  ngOnInit(): void {
    this.spinner.show();
    this.HttpService.getResources().subscribe(res => {
      this.spinner.hide();
      console.log(res);
      this.data = Object.values(res)[0]
    });
  }

  deleteResource(id:any)
  {
    this.spinner.show();
    this.HttpService.deleteResource(id).subscribe(res => {
      this.router.navigateByUrl('');
      this.ngOnInit();
      this.spinner.hide();
    });
  }

  editResource(id:any){
    this.router.navigateByUrl('/resource/edit/'+id);
  }

  addResourceForm(){
    this.router.navigateByUrl('/resource/add');
  }
  
}
