import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { AppUser } from './app-user.model';
@Injectable({
  providedIn: 'root'
})
export class AppUserService {
  
  formData : AppUser = {
    Id : null,
    Cedula : null,
    Name : null,
    LastName : null,
    Email : null,
    Birthday : null,
    UserType : null,
    Color : null,
    Price : null,
    Gender : null,
    Comment : null
  };

  //Web API URL
  readonly rootUrl = 'http://localhost:61004/api';
  list : AppUser[];

  constructor(private http : HttpClient) { }

  //Talk to API services
  postAppUser() {
    //Post url from web API
    console.log(this.formData);
    return this.http.post(this.rootUrl+'/userController', this.formData);
  }

  updateAppUser() {
    //Post url from web API
    return this.http.put(this.rootUrl+'/userController/'+this.formData.Id, this.formData);
  }

  deleteAppUser(Id) {
    return this.http.delete(this.rootUrl+'/userController/'+Id);
  }

  //Get all records from API
  refreshList(){
    this.http.get(this.rootUrl+'/userController').toPromise()
    .then(res => this.list = res as AppUser[] );
  }

}
