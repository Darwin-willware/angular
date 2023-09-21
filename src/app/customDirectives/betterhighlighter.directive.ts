import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlighter]'
})
export class BetterhighlighterDirective {

  constructor(private el:ElementRef, private ren:Renderer2) { }

  @Input() dc:string = 'grey';
  @Input()btc:string = 'cyan';
@HostBinding('style.backgroundColor') dbg:string =this.dc;
// @HostBinding('style.backgroundColor') bbg:string = this.btc;
@HostBinding('border') border:string = 'black 3px solid';

@HostListener('mouseenter') onmouseOver(){
  this.dbg = this.dc;
  this.border = 'blue 4px solid';
}
@HostListener('mouseleave') onmouseleft(){
    this.dbg = this.btc;
}
}
