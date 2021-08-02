import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl: String = 'http://127.0.0.1:8000/api/';
  constructor(private http: HttpClient) { }

  getResources(){
    var url = this.apiUrl+'get-resources'
    return this.http.get(url);
  }

  createResource(body : any){
    var url  = this.apiUrl+'create-resource';
    return this.http.post(url, body);
  }

  updateResource(id: any, body : any){
    var url  = this.apiUrl+`update-resource/${id}`;
    return this.http.put(url, body);
  }

  deleteResource(id: any){
    var url  = this.apiUrl+`delete-resource/${id}`;
    return this.http.delete(url);
  }

  getSigngleResource(id:any){
    var url  = this.apiUrl+`edit-resource/${id}`;
    return this.http.get(url);
  } 

  getStudents(){
    var url = this.apiUrl+'get-students'
    return this.http.get(url);
  }

  createStudent(body : any){
    var url  = this.apiUrl+'create-student';
    return this.http.post(url, body);
  }

  getSigngleStudent(id:any){
    var url  = this.apiUrl+`edit-student/${id}`;
    return this.http.get(url);
  } 

  updateStudent(id: any, body : any){
    var url  = this.apiUrl+`update-student/${id}`;
    return this.http.put(url, body);
  }

  deleteStudent(id: any){
    var url  = this.apiUrl+`delete-student/${id}`;
    return this.http.delete(url);
  }

  getReourcesList(){
    var url =  this.apiUrl+'resources-list';
    return this.http.get(url);
  }
}
