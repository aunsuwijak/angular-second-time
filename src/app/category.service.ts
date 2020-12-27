import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get('https://api.publicapis.org/categories');
  }
}
