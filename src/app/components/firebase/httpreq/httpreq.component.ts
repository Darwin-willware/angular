import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{map} from 'rxjs/operators';
import { product } from 'src/app/product';
@Component({
  selector: 'app-httpreq',
  templateUrl: './httpreq.component.html',
  styleUrls: ['./httpreq.component.css']
})
export class HttpreqComponent implements OnInit{
  display:any;
  isFetching:boolean =false;
constructor( private http:HttpClient){}
  

  ngOnInit(): void {
    this.fetchproducts();
  }
  submit(data:any){
    console.log(data);
    const headers = new HttpHeaders({'myheader':'angularhhtp'});
    this.http.post('https://angularhttp-3bbdc-default-rtdb.firebaseio.com/products.json',
    data,{headers:headers}
    )
    .subscribe((res)=>{console.log(res);});
  }
  fetchAll(){
    this.fetchproducts();
  }
  private fetchproducts(){
           this.isFetching = true;
    this.http.get<{[key:string]:product}>('https://angularhttp-3bbdc-default-rtdb.firebaseio.com/products.json')
    .pipe(map((res)=>{
      const products = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          products.push({...res[key],id:key})
        }
        
      }
      return products;
    }))
    .subscribe((x)=>{
      
      this.display = x;
      console.log(x);
      this.isFetching= false;
    })
  }
  onDelete(id:string){
    this.http.delete('https://angularhttp-3bbdc-default-rtdb.firebaseio.com/products/'+id+'.json')
    .subscribe();
  }
  deleteAll(){
    this.http.delete('https://angularhttp-3bbdc-default-rtdb.firebaseio.com/products.json').subscribe();
  }
}
