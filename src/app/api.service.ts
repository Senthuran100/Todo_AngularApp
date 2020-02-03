import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }
  public getData(){
    return this.httpClient.get(`http://www.mocky.io/v2/5e37ca203100005a00d37c15`);
  }
}
