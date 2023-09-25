import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-one',
  templateUrl: './reactive-one.component.html',
  styleUrls: ['./reactive-one.component.css']
})
export class ReactiveOneComponent implements OnInit {
//for setValue need to specify all form controls whether it is
// going to change or not
// but for patchValue need to specify only the formcontrol values
// which are going to change
  Reactiveform: FormGroup;
  checker:unknown;
//valuechanges is an event raised by the angular forms 
//whenever the value of the formcontrol,formgroup,formarray changes
//this event is going to return an observable

//form status pending to either inavlid or valid
  ngOnInit(): void {
       this.Reactiveform = new FormGroup({
        personaldata:new FormGroup({

          fname:new FormControl(null,[Validators.required,this.noSpaceAllowed]),
        email:new FormControl(null,[Validators.required,Validators.email ],this.emailNotAllowed),
        address:new FormControl(null)
        })
        ,
        country:new FormControl(null),
        gender:new FormControl(null),
        hobbies:new FormControl(null),
        skills:new FormArray([
          new FormControl(null,Validators.required),
          
        ])
       });

       //valuechanges event
      //  this.Reactiveform.get('personaldata.fname').valueChanges.subscribe((x)=>{
      //   console.log(x);
      //  })
      //  this.Reactiveform.valueChanges.subscribe((x)=>{
      //   console.log(x);
      //  })

      // status changes event
      this.Reactiveform.statusChanges.subscribe((x)=>{
        console.log(x);
        this.checker = x;
      })
      setTimeout(()=>{
        this.Reactiveform.setValue({
          personaldata:{
            fname:'',
            email:'',
            address:'XLR8'
          },
          country:'',
          gender:'',
          hobbies:'',
          skills:[]
        })
      },3000)
      setTimeout(()=>{
        this.Reactiveform.patchValue({
          personaldata:{
            fname:'darwin',}
          })
      },3000)
      
  }
  onSubmit(){
    console.log(this.Reactiveform);
    this.Reactiveform.reset({
      personaldata:{
        fname:'',
        email:'',
        address:''
      },
      country:'India',
       gender:'male',
       hobbies:'Sports',
       skills:[]

  });
  }
  addButton(){
      (<FormArray>this.Reactiveform.get('skills')).push(new FormControl(null,Validators.required))
  }
  //code own custom validator method
  noSpaceAllowed(control:FormControl){
    if(control.value != null && 
      control.value.indexOf(' ') !=-1){
        return{noSpaceAllowed:true} 
      }
      return null;
  }

  //angular doesnt provide any async validator bydefault.
  //we use async validator when we need to send http request to the server
  //to check if the data is valid.
  // ng-pending to ng-invalid or ng-valid is async validator
  //creating a custom async validator
  emailNotAllowed(control:FormControl):Promise<any> | Observable<any>{
      
    const response = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value === 'return@gmail.com'){
          resolve({emailNotAllowed:true})
        }
        else{
          resolve(null);
        }
      },5000)
    })
     return response;

  }
}
