import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http:HttpClient) { }
  addData(data:any){
    return this.http.post(`https://dummyjson.com/products/add`,data);
  }
  getData(){
    return this.http.get<any>(`https://dummyjson.com/products`);
  }
}
