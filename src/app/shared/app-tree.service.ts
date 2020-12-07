import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { AppTree } from './app-tree.model';
@Injectable({
  providedIn: 'root'
})
export class AppTreeService {
  
  formData : AppTree = {
    Id : null,
    Especie : null,
    Nombre : null,
    Descripcion : null,
    Foto : null,
    Latitud : null,
    Longitud : null  
  };

  //Web API URL
  readonly rootUrl = 'http://localhost:61004/api';
  list : AppTree[];

  constructor(private http : HttpClient) { }

  //Talk to API services
  postAppTree() {
    //Post url from web API
    console.log(this.formData);
    return this.http.post(this.rootUrl+'/TreesController', this.formData);
  }

  updateAppTree() {
    //Post url from web API
    return this.http.put(this.rootUrl+'/TreesController/'+this.formData.Id, this.formData);
  }

  deleteAppTree(Id) {
    return this.http.delete(this.rootUrl+'/TreesController/'+Id);
  }

  //Get all records from API
  refreshList(){
    this.http.get(this.rootUrl+'/TreesController').toPromise()
    .then(res => this.list = res as AppTree[] );
  }
}