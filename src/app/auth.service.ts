import { Injectable, inject } from '@angular/core';

import { StudentService } from './services/student.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   isLogged: Boolean = false;
   userService:StudentService = inject(StudentService);
   userdata:any;
  constructor() { }
  login(username:string,password:string){
    console.log(username,password);
   let user = this.userService.students.find(
        (u)=> u.name === username && u.gender === password
        );
        console.log(user);
        console.log("user from auth")
       if(user === undefined){ this.isLogged= false}else{this.isLogged = true}
       return user;
   
  }
  logout(){
    this.isLogged = false;
  }
  isAuthenticated(){
    return this.isLogged;
  }
}
