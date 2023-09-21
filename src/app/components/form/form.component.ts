import { Component, OnInit } from '@angular/core';
import { IdeactivateComponent } from 'src/app/authguard.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit,IdeactivateComponent {
   email:string = '';
   pass:string = '';
   isSubmitted = false;
    ngOnInit(): void {
      
    }
    OnSubmit(){
      this.isSubmitted = true;
    }
    canExit(){
      if((this.email || this.pass ) && !this.isSubmitted)
      {
        return confirm('you have unsaved changes')
      }
      else{
        return true;
      }
    }
}
