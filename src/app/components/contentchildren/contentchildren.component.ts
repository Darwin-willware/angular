import { Component,ContentChild,ContentChildren,ElementRef,QueryList } from '@angular/core';
import { TestcontentchildrenComponent } from '../testcontentchildren/testcontentchildren.component';

@Component({
  selector: 'app-contentchildren',
  templateUrl: './contentchildren.component.html',
  styleUrls: ['./contentchildren.component.css']
})
export class ContentchildrenComponent {
  @ContentChild('para') paraele!: ElementRef;

  @ContentChild(TestcontentchildrenComponent) testele!: TestcontentchildrenComponent;

  @ContentChildren('para') paraelements!:QueryList<ElementRef>;

  @ContentChildren(TestcontentchildrenComponent) testelemnts!: QueryList<TestcontentchildrenComponent>;

  styleparas(){
  //   console.log(this.paraele.nativeElement);
  //   console.log("away from for each");
  //   this.paraelements.forEach((x)=>{
  //     console.log(x.nativeElement);
  //   })
  console.log(this.testele.name);
  this.testelemnts.forEach((x)=>{
    console.log(x.name);
  })
  }
}
