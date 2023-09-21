import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private el:ElementRef,private ren:Renderer2) { }

  @Input() set appStyle(value:Object){
    let y = Object.entries(value);
        for(let [property,value] of y ){
          this.ren.setStyle(this.el.nativeElement,property,value);
        }
  }

}
