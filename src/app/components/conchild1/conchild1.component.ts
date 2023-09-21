import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-conchild1',
  templateUrl: './conchild1.component.html',
  styleUrls: ['./conchild1.component.css']
})
export class Conchild1Component implements AfterContentInit{
  ngAfterContentInit(): void {
    this.paragraph.nativeElement.textContent = "HI TO PUSH TO HTML";
    console.log(this.paragraph.nativeElement.textContent);
  }
  @ContentChild('para')paragraph!:ElementRef;
  
}
