import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testcontentchildren',
  templateUrl: './testcontentchildren.component.html',
  styleUrls: ['./testcontentchildren.component.css']
})
export class TestcontentchildrenComponent {
  

  @Input() name:string = '';
}
