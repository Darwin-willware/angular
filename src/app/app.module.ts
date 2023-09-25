import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http';
import{ FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './components/add/add.component';
import { PercentagePipe } from './pipes/percentage.pipe';
import { Filterpipe } from './pipes/filter.pipe';
import { DtabindComponent } from './components/dtabind/dtabind.component';
import { SearchComponent } from './components/search/search.component';
import { ToNumberPipe } from './pipes/toNumber.pipe';
import { UsersComponent } from './components/users/users.component';
import { ViewchildComponent } from './components/viewchild/viewchild.component';
import { ForvichildComponent } from './components/forvichild/forvichild.component';
import { ConchildComponent } from './components/conchild/conchild.component';
import { Conchild1Component } from './components/conchild1/conchild1.component';
import{SetBackgroundDirective} from './customDirectives/setbg.directive';
import { HighlightDirective } from './customDirectives/highlight.directive';
import { HoverDirective } from './customDirectives/hover.directive';
import { HostbindDirective } from './customDirectives/hostbind.directive';
import { BetterhighlighterDirective } from './customDirectives/betterhighlighter.directive';
import { ClassdirectiveDirective } from './customDirectives/classdirective.directive';
import { ConditionalcompComponent } from './components/conditionalcomp/conditionalcomp.component';
import { ConditionaldirectDirective } from './customDirectives/conditionaldirect.directive';
import { StyleDirective } from './customDirectives/style.directive';
import { NgifcopyDirective } from './customDirectives/ngifcopy.directive';
import { SvgComponent } from './svg/svg.component';
import { HierarchyService } from './services/servicehierarchy.service';
import { ViewchildrenlComponent } from './components/viewchildrenl/viewchildrenl.component';
import { ContentchildrenComponent } from './components/contentchildren/contentchildren.component';
import { TestcontentchildrenComponent } from './components/testcontentchildren/testcontentchildren.component';
import { HeaderComponent } from './components/header/header.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { QueryStringComponent } from './components/query-string/query-string.component';
import { FragmentComponent } from './components/fragment/fragment.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './components/form/form.component';
import { AuthresolveComponent } from './components/authresolve/authresolve.component';
import { HttpreqComponent } from './components/firebase/httpreq/httpreq.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { ReactiveOneComponent } from './components/form/reactive-one/reactive-one.component';
import { TempDrivenFormComponent } from './components/form/temp-driven-form/temp-driven-form.component';
  // let me create a unique token for this service class by using
  // InjectionToken class syntax: InjectionToken<servicetype>
  export const HIER_TOKEN = new InjectionToken<HierarchyService>('HIER_SERVICE');

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    PercentagePipe,
    Filterpipe,
    ToNumberPipe,
    DtabindComponent,
    SearchComponent,
    UsersComponent,
    ViewchildComponent,
    ForvichildComponent,
    ConchildComponent,
    Conchild1Component,
    SetBackgroundDirective,
    HighlightDirective,
    HoverDirective,
    HostbindDirective,
    BetterhighlighterDirective,
    ClassdirectiveDirective,
    ConditionalcompComponent,
    ConditionaldirectDirective,
    StyleDirective,
    NgifcopyDirective,
    SvgComponent,
    ViewchildrenlComponent,
    ContentchildrenComponent,
    TestcontentchildrenComponent,
    HeaderComponent,
    NotfoundComponent,
    UserDetailsComponent,
    QueryStringComponent,
    FragmentComponent,
    HomeComponent,
    LoginComponent,
    FormComponent,
    AuthresolveComponent,
    HttpreqComponent,
    RxjsComponent,
    ReactiveOneComponent,
    TempDrivenFormComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // providers: [ HierarchyService],
  //behind the scenes//
  //providers:[{provide:HierarchyService,useClass:HierarchyService}],
  //providing the provider as a string type //
  //whenever we are providing the injector of type string we need to //
  //use the@Inject decorator toget the injector token from the //
  //component where we want to inject  the dependency//
  //providers:[{provide:'HIER_SERVICE',useClass:HierarchyService}],
  //instead of using injector tokens with string keyword 
  //we can use injection tokens
  providers:[{provide:HIER_TOKEN,useClass:HierarchyService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
