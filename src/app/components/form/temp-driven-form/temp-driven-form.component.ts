import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp-driven-form',
  templateUrl: './temp-driven-form.component.html',
  styleUrls: ['./temp-driven-form.component.css']
})
export class TempDrivenFormComponent {
name:string;
email:string;
address:string;
gen:string;
country:string;


defaultC:string = 'India';
gender =[
  {id:'1',value:'Male'},
  {id:'2',value:'Female'},
  {id:'3',value:'Other'}
]
@ViewChild('addproduct') data:NgForm;

  onSubmit(){
    console.log(this.data.value);
    this.name = this.data.value.personalData.name;
    this.email = this.data.value.personalData.email;
    this.address = this.data.value.personalData.address;
    this.gen = this.data.value.gender;
    this.country = this.data.value.country;
    console.log(this.gen,this.country,this.address);
    this.data.reset();
  
  }
  setDefvalue(){
    // this.data.value.personalData.name = 'john';
    // this.data.value.personalData.email = 'johnwick@gmail.com';
    // this.data.value.personalData.address = '3/125,your street';
    // this.data.setValue({
    //    country:'',
    //    gender:'',
    //    hobbies:'',
    //    personalData:{
    //     name:'john',
    //     email:'johnwick@gmail.com',
    //     address:'3/125,your Street'
    //    }
    // })
  //   this.data.form.patchValue({
      
  //     personalData:{
  //      name:'john',
  //      email:'johnwick@gmail.com',
  //      address:'3/125,your Street'
  //     }
  //  })
  }
}
