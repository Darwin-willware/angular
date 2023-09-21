import { inject } from "@angular/core"
import { AuthService } from "./auth.service"
import { Router } from "@angular/router";
import { StudentService } from "./services/student.service";

export const logic =() =>{
    const authservice:AuthService = inject(AuthService);
    const router:Router = inject(Router);
    if(authservice.isAuthenticated()){
        return true;
    }else{
        router.navigate(['/login']);
        return false;
    }

    
}
export const resolve =() => {
    const service = inject(StudentService);
    return service.getAllStudents();

}