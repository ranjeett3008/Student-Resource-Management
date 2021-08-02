import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import {HttpService} from '../../http.service';

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.css']
})
export class AddResourceComponent implements OnInit {

  id:any;
  isError:any = false;
  isSuccessMsg = false;
  resourcesList:any;
  constructor(private HttpService:HttpService, private activeRoute: ActivatedRoute, private router:Router) {
    
        this.activeRoute.params.subscribe( params => 
        {
            if(params.id)
            {
                this.id = params.id;
                // Edits resource
                this.editResource(params.id);
            }
        });
   }

  ngOnInit(): void {
   
  }

  resourceForm = new FormGroup({
    name: new FormControl(''),
    content: new FormControl(''),
    expiry: new FormControl(''),
   
  });

  /**
   * Adds resource
   */
  addResource(){
    if(this.id){
      // If id exits then update reource
      this.updateResource(this.id);
    }
    else{
      // Create resource
      this.HttpService.createResource(this.resourceForm.value)
      .subscribe(res => {
        this.router.navigateByUrl('');
      });
    }
  
  }

  /**
   * Updates resource
   * @param id 
   */
  updateResource(id:any){
    this.HttpService.updateResource(id, this.resourceForm.value).subscribe(res => {
      this.isSuccessMsg = true;
      this.router.navigateByUrl('/');
    });
  }

  /**
   * Edits resource
   * @param id 
   */
  editResource(id:any){
    console.log('Edit resource api call');
    this.HttpService.getSigngleResource(id).subscribe(res => {
      
      delete Object.values(res)[0].id;
      delete Object.values(res)[0].created_at;
      delete Object.values(res)[0].updated_at;
      this.resourceForm.setValue(Object.values(res)[0]);
    }); 
  }
}
