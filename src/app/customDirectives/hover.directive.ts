import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor( private el:ElementRef, private ren:Renderer2) { }
   @HostListener('mouseenter') onmouseHover(){
      this.ren.setStyle(this.el.nativeElement,'margin','30px 30px');
      this.ren.setStyle(this.el.nativeElement,'padding','5px 10px');
      this.ren.setStyle(this.el.nativeElement,'transition','0.5s');
    }
    @HostListener('mouseleave') onmouseOut(){
      this.ren.setStyle(this.el.nativeElement,'margin','0px 0px');
      this.ren.setStyle(this.el.nativeElement,'padding','0px 0px');
      this.ren.setStyle(this.el.nativeElement,'transition','0.5s');
    }
}
