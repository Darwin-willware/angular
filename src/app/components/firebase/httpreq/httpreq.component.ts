import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import{map} from 'rxjs/operators';
import { product } from 'src/app/product';
import { ProductserviceService } from 'src/app/services/productservice.service';
@Component({
  selector: 'app-httpreq',
  templateUrl: './httpreq.component.html',
  styleUrls: ['./httpreq.component.css']
})
export class HttpreqComponent implements OnInit{
  display:any;
  editMode:boolean = false;
  isFetching:boolean =false;
  currentoneId:any;
  errorMessage:string = null;
  @ViewChild('addproduct') form!:NgForm;
constructor( private http:HttpClient,
         private service:ProductserviceService
  ){}
  

  ngOnInit(): void {
    this.fetchproducts();
    console.log("to check over from here");
    console.log(this.errorMessage);
  }
  submit(data:any){
    console.log(data);
    this.service.err.subscribe((x)=>{
      this.errorMessage = x;
      console.log(this.errorMessage);
    })
    if(!this.editMode){
      this.service.postit(data);
    }
    else{
      console.log(data);
      this.service.update( data,this.currentoneId);
      this.editMode = false;
    }
     
  }
  fetchAll(){
    this.fetchproducts();
    
  }
  private fetchproducts(){
           this.isFetching = true;
           this.service.getall().subscribe((x)=>{
            this.display =x;
            this.isFetching = false;
           },(err)=>{
            this.errorMessage = err.message;
            console.log(this.errorMessage);
            console.log("from error to you");
           })
  }
  onDelete(id:string){
       this.service.deletebyid(id);
  }
  deleteAll(){
   this.service.deleteAll();
  }
  onUpdate(id:any){
    this.currentoneId = id;
   let currentOne = this.display.find((x:any)=>{return x.id === id});
   console.log(currentOne);

   this.form.setValue({
    name:currentOne.name,
    price:currentOne.price,
    genre:currentOne.genre,
    lang:currentOne.lang,
    desc:currentOne.desc,
    img:currentOne.img

   });

   this.editMode = true;
  }
}
