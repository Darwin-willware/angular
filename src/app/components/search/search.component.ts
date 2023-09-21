import { Component,Input,EventEmitter, Output, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/model/student';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
    enteredsearchvalue:string = '';
    route: Router = inject(Router);
    student!:any;
    activeroute:ActivatedRoute = inject(ActivatedRoute);
@Output()
searchtextchanged:EventEmitter<string> = new EventEmitter<string>();
  @Input('total')all:number =0;
  @Input()free: number = 0;
  @Input()busy : number = 0;

  selectedradioButtonvalue: string = 'All';
  @Output()
  radioButtonChanged:EventEmitter<string> = new EventEmitter<string>();
  onChangebutton(){
    this.radioButtonChanged.emit(this.selectedradioButtonvalue);
    console.log(this.selectedradioButtonvalue);
  }
  onSearchTextChanged(){
    this.searchtextchanged.emit(this.enteredsearchvalue);
  }
  hiTempRef(data:HTMLInputElement){
    console.log(data.value+"=> from template reference");
  }

  
  getMeTo(){
    // this.route.navigateByUrl()
    // this.route.navigate(['add']);
    console.log("eroor")
    this.route.navigateByUrl('users');
  }
  ngOnInit(): void {
    // this.activeroute.data.subscribe((x)=>{
    //   this.student = x;
    // })
    console.log("from no where tto ng on init");
     //this.student = this.route.getCurrentNavigation()?.extras.state;
     this.student = history.state;
     console.log(this.student);
  }
}
