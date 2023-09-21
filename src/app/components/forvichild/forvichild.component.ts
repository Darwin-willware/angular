import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-forvichild',
  templateUrl: './forvichild.component.html',
  styleUrls: ['./forvichild.component.css']
})
export class ForvichildComponent implements OnInit,OnChanges,
DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
 @Input() value:string ="G7-GAMER";
 constructor(){
  console.log("hi from constructor");
  console.log(this.value);
 }
 ngOnInit(): void {
   console.log("ngon init get called");
   console.log(this.value);
 }
 ngOnChanges(changes: SimpleChanges): void {
   console.log("ngonchanges get called");
   console.log(this.value);
   console.log(changes);
 }
 ngDoCheck(): void {
   console.log("ng do check get called");
 }
 ngAfterContentInit(): void {
   console.log("ngaftercontent init called");
 }
 ngAfterContentChecked(): void {
  console.log("ngaftercontent check called");
 }
 ngAfterViewInit(): void {
   console.log("ng sfter view init get called");
 }
 ngAfterViewChecked(): void {
   console.log("ng after viewchecked has called");
 }
 ngOnDestroy(): void {
   console.log("ng on destroy get called")
 }

   hellofromchildofviewchild(){
    //console.log("this is to learn view child this component is a child component of a view child component ");
   }
}
