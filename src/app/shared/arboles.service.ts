import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArbolesService {

  baseUrl : string;

  constructor(public httpClient : HttpClient) { 
    this.baseUrl = "http://localhost:61004/api/TreesController";
  }

  getAll() : Promise<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl).toPromise();
  }
}
