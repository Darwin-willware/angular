import { HttpClient ,HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../product';
import{map} from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  err = new Subject<string>();
  

  constructor( private http:HttpClient) { }


  postit(data:product){
    const headers = new HttpHeaders({'myheader':'angularhhtp'});
    this.http.post('https://angularhttp-3bbdc-default-rtdb.firebaseio.com/products.json',
    data,{headers:headers}
    )
    .subscribe((res)=>{console.log(res);},
    (err)=>{
      this.err.next(err.message);
    });
  }
  getall(){
    const header = new HttpHeaders()
    .set('content-type','application/json')
    .set('Access-Control-Allow-Origin','****')

    const params = new HttpParams().set('print','pretty').set('pageNum',1)
    return this.http.get<{[key:string]:product}>
    ('https://angularhttp-3bbdc-default-rtdb.firebaseio.com/products.json',
    {'headers':header,params:params})
    .pipe(map((res)=>{
      const products = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          products.push({...res[key],id:key})
        }
        
      }
      return products;
    }))
    
  }
  deletebyid(id:any){
    let header = new HttpHeaders();
    header = header.append('myHeader1','value1');
    header = header.append('myHeader2','Value2');
    this.http.delete(
      'https://angularhttp-3bbdc-default-rtdb.firebaseio.com/products/'+id+'.json',
      {'headers':header}
      )
    .subscribe();

  }
  deleteAll(){
    this.http.delete('https://angularhttp-3bbdc-default-rtdb.firebaseio.com/products.json').subscribe();
  }
   getById(id:any){
    this.http.get<product>('https://angularhttp-3bbdc-default-rtdb.firebaseio.com/products.json');
   }
  update(data:product,id:any){
    this.http.put('https://angularhttp-3bbdc-default-rtdb.firebaseio.com/products/'+id+'.json',
    data).subscribe();
  }
}
