import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dtabind',
  templateUrl: './dtabind.component.html',
  styleUrls: ['./dtabind.component.css']
})
export class DtabindComponent {
  tds :Number =0.0;
  takehome:number =0;
slogan:string="hi iam learing data binding";
display:boolean = false;
searchvalue:string ='';
products = [{
  "id": 1,
  "first_name": "Jeanette",
  "last_name": "Penddreth",
  "email": "jpenddreth0@census.gov",
  "gender": "Female",
  "ip_address": "26.58.193.2",
  "status" : "free"
}, {
  "id": 2,
  "first_name": "Giavani",
  "last_name": "Frediani",
  "email": "gfrediani1@senate.gov",
  "gender": "Male",
  "ip_address": "229.179.4.212",
  "status" : "onwork"
}, {
  "id": 3,
  "first_name": "Noell",
  "last_name": "Bea",
  "email": "nbea2@imageshack.us",
  "gender": "Female",
  "ip_address": "180.66.162.255",
  "status" : "free"
}, {
  "id": 4,
  "first_name": "Willard",
  "last_name": "Valek",
  "email": "wvalek3@vk.com",
  "gender": "Male",
  "ip_address": "67.76.188.26",
  "status" : "onwork"
}, {
  "id": 5,
  "first_name": "Will",
  "last_name": "Valek",
  "email": "walek3@vk.com",
  "gender": "Male",
  "ip_address": "67.76.188.26",
  "status" : "onwork"
}, {
  "id": 6,
  "first_name": "lard",
  "last_name": "alek",
  "email": "alek3@vk.com",
  "gender": "Female",
  "ip_address": "67.76.188.26",
  "status" : "free"
}, {
  "id": 7,
  "first_name": "lard",
  "last_name": "alek",
  "email": "alek3@vk.com",
  "gender": "Female",
  "ip_address": "67.76.188.26",
  "status" : "onwork"
}, {
  "id": 8,
  "first_name": "lard",
  "last_name": "alek",
  "email": "alek3@vk.com",
  "gender": "Female",
  "ip_address": "67.76.188.26",
  "status" : "free"
}];
getdata(){
  return this.slogan;
}
getTotal(){
  return this.products.length;
}
getTotalFree(){
  return this.products.filter(product=>product.status === "free").length;
 
}
getTotalOnWork(){
  return this.products.filter((x)=>x.status === 'onwork').length;
}
searchval(event:Event){
     this.searchvalue =  ((<HTMLInputElement>event.target).value);
     console.log((<HTMLInputElement>event.target).value);
}
closeit(){
     this.display = true;
}
getval(event:Event){
  this.takehome = Number((<HTMLInputElement>event.target).value);

}
calculateCtc(){
  let ctc:Number = 0;

       ctc =  (100*this.takehome)/90;
       this.tds = ctc;
       console.log("ctc is"+ "  "+ this.tds);
       
}
countradiobutton:string = 'All';
onChangebutton(data:string){
      this.countradiobutton = data;
      console.log(this.countradiobutton+"=> from parent");
}
getsearchvalue:string = '';
onsearchValuechange(data:string){
  this.getsearchvalue = data;
  console.log(this.getsearchvalue+"=> from parent");
}
}
