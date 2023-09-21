import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-query-string',
  templateUrl: './query-string.component.html',
  styleUrls: ['./query-string.component.css']
})
export class QueryStringComponent implements OnInit{
  activeRoute:ActivatedRoute =  inject(ActivatedRoute);
  searchvalue!:string;
  userService:UserService = inject(UserService);
  userdata:any;
  display:any;
  
  ngOnInit(): void {
   //this.searchvalue = this.activeRoute.snapshot.queryParams['search'];
   this.searchvalue =this.activeRoute.snapshot.queryParamMap.get('search') || '{}'; 
   console.log(this.searchvalue);
   
    if(this.searchvalue === undefined || this.searchvalue === ''){
      this.userService.getAll().subscribe((x)=>{
        this.display = x;
        console.log(this.display);
       })
        console.log("fromif");
        console.log(this.userdata)
   }
   else{
    this.userService.getAll().subscribe((x)=>{
      this.userdata= x;
      //this.userdata = x.filter(x => x.name.includes(this.searchvalue));
      console.log(this.userdata);
      this.display =this.userdata.filter((y:any) => y.name.includes(this.searchvalue.toLowerCase()));
     })
   }
  }

}
