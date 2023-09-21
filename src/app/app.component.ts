import { Component, OnInit, inject } from '@angular/core';
import { Router,Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular';

  showLoader:boolean =false;
    router:Router = inject(Router);
  ngOnInit(): void {
    this.router.events.subscribe((x:Event)=>{
          if(x instanceof NavigationStart){
            this.showLoader = true;
          } 
          if(x instanceof NavigationEnd || x instanceof NavigationCancel || x instanceof NavigationError){
            this.showLoader = false;
          }
    })
  }
}
