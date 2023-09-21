import { Component, ContentChild, ContentChildren, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-viewchildrenl',
  templateUrl: './viewchildrenl.component.html',
  styleUrls: ['./viewchildrenl.component.css']
})
export class ViewchildrenlComponent {
data:string = '';
@ViewChildren('inputEl') inputeles!:  QueryList<ElementRef>;


  show(){
    let tempdata = ''
     this.inputeles.forEach((x)=>{
 tempdata += x.nativeElement.value + ' '
      console.log(x.nativeElement.value);
     })
     this.data = tempdata.trim();
     console.log(this.data);
  }
  
}
