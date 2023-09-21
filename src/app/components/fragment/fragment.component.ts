import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fragment',
  templateUrl: './fragment.component.html',
  styleUrls: ['./fragment.component.css']
})
export class FragmentComponent implements OnInit{

   activeRoute:ActivatedRoute = inject(ActivatedRoute);
  ngOnInit(): void {
        //this.activeRoute.fragment.subscribe((data)=>{
          //console.log(data);
            //this.switchtosection(data);
        //})
  }
  // switchtosection(section){
  //   document.getElementById(section)?.scrollIntoView({behavior:'smooth'});
  // }
}
