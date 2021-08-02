import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { ResourceSummaaryComponent } from './resource-summaary/resource-summaary.component';
import { ResourceRoutingModule } from './resource-routing.module';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    AddResourceComponent,
    ResourceSummaaryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ResourceRoutingModule,
    NgxSpinnerModule
  ],
  
})
export class ResourceModule { }
