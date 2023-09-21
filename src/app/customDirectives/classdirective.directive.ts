import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClassdirective]'
})
export class ClassdirectiveDirective {

  constructor(private el:ElementRef, private ren:Renderer2) { }
@Input() set display(value:Object){
  let entry = Object.entries(value);
  console.log(entry);
  for(let [classname,condition] of entry){
    // if(x[1]){
    //   this.ren.addClass(this.el.nativeElement,x[0]);
    // }
    if(condition){
        this.ren.addClass(this.el.nativeElement,classname);
    }
  }
}
}
