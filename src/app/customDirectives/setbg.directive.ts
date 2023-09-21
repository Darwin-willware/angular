import { Directive, ElementRef, OnInit } from "@angular/core";
@Directive({
   selector:'[setbg]'
})
export class SetBackgroundDirective implements OnInit{
    private element!:ElementRef;
   constructor(elementref:ElementRef){
           this.element= elementref;
   }
   ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = '#CBE6C9';
   }
}