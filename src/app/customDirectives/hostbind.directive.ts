import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostbind]'
})
export class HostbindDirective {

  constructor(private el :ElementRef,private ren:Renderer2) { }
  
  @HostBinding('style.backgroundColor') bg:string ='black';
  @HostBinding('style.border') border:string ='none';

  @HostListener('mouseenter') onMouseOver(){
    this.bg = 'grey';
    this.border = 'pink 2px solid';
  }
  @HostListener('mouseleave') onMouseOut(){
    this.bg = 'transparent';
    this.border = 'none';
  }
}
