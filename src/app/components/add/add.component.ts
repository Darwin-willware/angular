import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: '[app-add]',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  view:any[]|undefined;
  message:string|undefined;
  total:number=600;
  gendertype:string = 'all';
  
    constructor( private service:ApicallService,
      private studentservice:StudentService){}
    ngOnInit(): void {
      this.fromstudent();
    }
    toapi(data:any){
      console.log (data);
      this.service.addData(data).subscribe((x)=>{
        if(x){
           
           this.message= "Added SuccesFully"
        }
      })
      setTimeout(()=>{
        this.message= undefined;
      },4000)
    }

    fromapi(){
      this.service.getData().subscribe((x)=>{
        console.log(x.json());
        this.view = x;
      })
    }
    fromstudent(){
      console.log(this.gendertype);
     this.view = this.studentservice.filterbygender(this.gendertype);
    }
}
