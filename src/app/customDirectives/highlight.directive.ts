import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor( private element:ElementRef, private renderer:Renderer2) { }
  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','grey');
    this.renderer.addClass(this.element.nativeElement,'rendcss');
    this.renderer.setAttribute(this.element.nativeElement,'title','this is example for renderer');
  }

}
