import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';

import { AddComponent } from './components/add/add.component';
import { SearchComponent } from './components/search/search.component';
import { DtabindComponent } from './components/dtabind/dtabind.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ViewchildComponent } from './components/viewchild/viewchild.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { QueryStringComponent } from './components/query-string/query-string.component';
import { FragmentComponent } from './components/fragment/fragment.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthguardService } from './authguard.service';
import{logic,resolve} from './authguard';
import { FormComponent } from './components/form/form.component';
import { AuthresolveComponent } from './components/authresolve/authresolve.component';
import { HttpreqComponent } from './components/firebase/httpreq/httpreq.component';

const routes: Routes = [
  {path:'',component:ViewchildComponent},
  //{path:'users',component:UsersComponent, canActivate: [()=>{return true;}]},
  //{path:'users',component:UsersComponent, canActivate: [AuthguardService]},
  {path:'users',component:UsersComponent, canActivate: [logic]},
  //{path:'form',component:FormComponent,canDeactivate:[AuthguardService]},
  //{path:'res',component:AuthresolveComponent,resolve:{Students:AuthguardService}},
  {path:'res',component:AuthresolveComponent,resolve:{Students:resolve}},
  {path:'form',component:FormComponent,canDeactivate:[(comp:FormComponent)=>{return comp.canExit()}]},
  {path:'add',component:AddComponent},
  {path:'search',component:SearchComponent},
  {path:'fire',component:HttpreqComponent},
  {path:'dtabind',component:DtabindComponent},
  {path:'users/ud/:id',component:UserDetailsComponent},
  {path:'users/sd',component:QueryStringComponent},
  {path:'frag',component:FragmentComponent},
  {path:'login',component:LoginComponent},
  {path:'frag',canActivateChild:[logic],children:[{path:'home',component:HomeComponent}]},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { 

   
}
