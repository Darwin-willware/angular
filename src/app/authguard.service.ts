import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { FormComponent } from './components/form/form.component';
import { Student } from './model/student';
import { StudentService } from './services/student.service';
  
  export interface IdeactivateComponent{
    canExit: () => boolean | Observable<boolean> | Promise<boolean>;
  }

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate,CanActivateChild,
CanDeactivate<IdeactivateComponent>,Resolve<Student[]> {

  constructor( private authservice:AuthService,
              private serv:StudentService,
               private router:Router
    ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> 
  {
    if(this.authservice.isAuthenticated()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
    

  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
   boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> 
   {
    return this.canActivate(childRoute,state);
  }
  canDeactivate(component:IdeactivateComponent,currentRoute:ActivatedRouteSnapshot,
    currentState:RouterStateSnapshot,nextState:RouterStateSnapshot)
  {
     return component.canExit();
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
   Student[] | Observable<Student[]> | Promise<Student[]> {
    // let studlist:Student[]=[];
    // this.serv.getAllStudents().subscribe((students:any)=>{
    //      studlist = students;
    // });
    // return studlist;
    return this.serv.getAllStudents();
  }
}
