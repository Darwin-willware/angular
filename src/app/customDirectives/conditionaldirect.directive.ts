import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appConditionaldirect]'
})
export class ConditionaldirectDirective {

  constructor( private el:ElementRef, private ren :Renderer2) { }

  @Input() set appConditionaldirect(condition:boolean){
     if(condition){
      this.ren.addClass(this.el.nativeElement,'highlight');
     }
    

  }
}
