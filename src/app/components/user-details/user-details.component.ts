import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit,OnDestroy{
    selectedOne:any;
    id!:any;
    userService:UserService = inject(UserService);
    activeRoute:ActivatedRoute = inject(ActivatedRoute);
    paramMapObs:any;
ngOnInit(): void {
    //this.id = this.activeRoute.snapshot.params['id'];
    //this.id = this.activeRoute.snapshot.paramMap.get('id') ;
    // this.activeRoute.params.subscribe((data)=>{
    //   this.id = data['id'];
    //   this.userService.getById(this.id).subscribe((x)=>{
    //     console.log(x);
    //     this.selectedOne = x;
    //   })
    // })
     this.paramMapObs =this.activeRoute.paramMap.subscribe((data)=>{
      this.id = data.get('id');
      this.userService.getById(this.id).subscribe((x)=>{
        console.log(x);
        this.selectedOne = x;
      })
    })
    console.log(this.id);
    
}
ngOnDestroy(): void {
  this.paramMapObs.unsubscribe();
} 
}
