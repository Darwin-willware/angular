import { Component, OnInit } from '@angular/core';
import {from,of} from 'rxjs';
import {map,filter} from 'rxjs/operators';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit{
array1 = [1,2,3,6,7,9];
array2 = ['A','B','c','d','E'];
myObservable = from(this.array1).pipe(map((val)=>{
  return val*5;
}),
filter((val)=>{
  return val >=30;
}));
mapobs = this.myObservable.pipe(map((val)=>{
  return val*5;
}),
filter((val)=>{
  return val >=30;
}))
filtobs = this.mapobs.pipe(filter((val)=>{
  return val >=30;
}))
ngOnInit(): void {
  this.myObservable.subscribe(
    (val)=>{console.log(val);},
  (err)=>{alert(err.message);},
  ()=>{alert('observable emission completed')})
}
}
