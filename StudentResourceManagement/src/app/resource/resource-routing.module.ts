import { ResourceSummaaryComponent } from './resource-summaary/resource-summaary.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddResourceComponent } from './add-resource/add-resource.component';

const routes: Routes = [
  {path:'add', component:AddResourceComponent },
  
  {path:'edit/:id', component:AddResourceComponent },
  {path:'', component:ResourceSummaaryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceRoutingModule { }
