import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    @ViewChild('username') username!:ElementRef;
    @ViewChild('password') password!:ElementRef;
     activeroute:ActivatedRoute = inject(ActivatedRoute);
    authservice:AuthService = inject(AuthService);
    route:Router = inject(Router);
    ngOnInit(): void {
      this.activeroute.queryParamMap.subscribe((x)=>{
       const logout= Boolean(x.get('logout'))
       if(logout){
        this.authservice.logout();
        alert(`logged out.IsLogged = ${this.authservice.isLogged}`)
       }
      })
    }
    logintest(){
      const username = this.username.nativeElement.value;
      const password = this.password.nativeElement.value;
      const user = this.authservice.login(username,password);
      console.log(user);
      if(user === undefined){
        alert('wrong credentials');
      }
      else{
        alert(`welcome ${user.name}`);
        this.route.navigate(['/users'])
      }
    }
}
