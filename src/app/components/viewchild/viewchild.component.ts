import { Component, ElementRef, ViewChild } from '@angular/core';
import{ForvichildComponent} from '../forvichild/forvichild.component';
@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent {
 
  @ViewChild('dobinput') dOB!: ElementRef;
  @ViewChild('ageinput') age!: ElementRef; 
  @ViewChild(ForvichildComponent,{static:true}) forvivhicomp!:ForvichildComponent;
  calculateAge(){
    let birthyear = new Date(this.dOB.nativeElement.value).getFullYear();
    console.log(this.dOB.nativeElement.value);
    let currentyear = new Date().getFullYear();
    let age = currentyear - birthyear;
    console.log(age);
  }
  inputtext!:string;
  onclick(data:HTMLInputElement){
    this.inputtext = data.value;
  }
  checkout(){
    
  }
  destroy:boolean=true;
  destroyit(){
       this.destroy = false;
  }
}
