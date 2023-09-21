import { Component, Inject, OnInit, inject } from '@angular/core';
import { HIER_TOKEN } from 'src/app/app.module';
import { HierarchyService } from 'src/app/services/servicehierarchy.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-conchild',
  templateUrl: './conchild.component.html',
  styleUrls: ['./conchild.component.css']
})
export class ConchildComponent implements OnInit{

  userlist!:any;
  getoneuser!:any;
  check:boolean = false;
// we have to tell the angular that what we want to inject(what token we want to inject)
// for that we have to use @inject decorator
  constructor(@Inject(HIER_TOKEN) private service:HierarchyService){}
  // a method to call an service from a component
  // without using constructor by inject method 
  usservice = inject(UserService);
      ngOnInit(): void {
        this.service.getbyme();
         this.usservice.getAll().subscribe((result)=>{
          console.log(result.toString()+"from subscribe method")
          this.userlist = result;
          console.log(this.userlist);
         });
        console.log(this.userlist);
      } 
      getasingleuser(data:any){
        this.usservice.getById(data).subscribe((x)=>{
          this.getoneuser = x;
          console.log(this.getoneuser);
        });
      }

     checker:boolean = false;
     cases:string = 'case4';
     ngifngtemplate(){
      this.checker = true;
     }
}
