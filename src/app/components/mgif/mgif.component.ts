import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/product';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-mgif',
  templateUrl: './mgif.component.html',
  styleUrls: ['./mgif.component.css']
})
export class MgifComponent implements OnInit {
checker=true;
//tester = "if";
//tester = "else";
//tester:string="if";
//tester:string="else";
tester;
text:any = "if";
test = "if";
data:product;

constructor(private service:ProductserviceService){}
ngOnInit(): void {
  this.service.getall().subscribe((x)=>{
     this.data=x[0];
     console.log(x[0]);
  })
}
}
