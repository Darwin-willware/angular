import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgifcopy]'
})
export class NgifcopyDirective {

  constructor(private template:TemplateRef<any>,
    private viewcontainer:ViewContainerRef) { }

    @Input() set appNgifcopy(condition:boolean){
      if(condition){
        this.viewcontainer.createEmbeddedView(this.template);
      }else{
        this.viewcontainer.clear();
      }
    }

}
