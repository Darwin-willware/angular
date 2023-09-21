import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/model/student';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  
  router:Router = inject(Router);
  selecteUser:any;
    users:user[] =
    [{"id":1,"name":"Marcia","age":4,"email":"marnold0@tuttocitta.it","gender":"Female","city":"Fengjiang"},
{"id":2,"name":"Worthington","age":84,"email":"warnault1@biblegateway.com","gender":"Male","city":"Sydney"},
{"id":3,"name":"Donnajean","age":84,"email":"dottosen2@statcounter.com","gender":"Female","city":"Carthage"},
{"id":4,"name":"Meier","age":10,"email":"mpenn3@si.edu","gender":"Male","city":"Brusque"},
{"id":5,"name":"Cece","age":7,"email":"cstollhofer4@google.com.br","gender":"Male","city":"Bagakay"},
{"id":6,"name":"Melanie","age":50,"email":"mdalesio5@cnn.com","gender":"Female","city":"Chardonnière"},
{"id":7,"name":"Marita","age":5,"email":"mfrend6@hugedomains.com","gender":"Female","city":"Santo Rosario"},
{"id":8,"name":"Spike","age":86,"email":"scranson7@rambler.ru","gender":"Male","city":"Fenghuangshan"},
{"id":9,"name":"Alyda","age":51,"email":"aklambt8@storify.com","gender":"Female","city":"Hultsfred"},
{"id":10,"name":"Tana","age":38,"email":"tlambot9@sciencedaily.com","gender":"Female","city":"Umbanyar"},
{"id":11,"name":"Rosabella","age":52,"email":"rbaudichona@zdnet.com","gender":"Female","city":"Toba"},
{"id":12,"name":"Elinore","age":83,"email":"etuppenyb@tumblr.com","gender":"Female","city":"Maredakalada"},
{"id":13,"name":"Killie","age":43,"email":"kbridgensc@blogtalkradio.com","gender":"Male","city":"Huaguo"},
{"id":14,"name":"Octavia","age":97,"email":"ohazaeld@google.cn","gender":"Female","city":"Linglu"},
{"id":15,"name":"Townsend","age":41,"email":"trainarde@netscape.com","gender":"Male","city":"Lac du Bonnet"},
{"id":16,"name":"Thorin","age":3,"email":"tguyf@odnoklassniki.ru","gender":"Male","city":"Bolondrón"},
{"id":17,"name":"Harmon","age":13,"email":"hairetong@ucoz.ru","gender":"Male","city":"Żurowa"},
{"id":18,"name":"Jessica","age":20,"email":"jpicoth@fema.gov","gender":"Female","city":"El Hamma"},
{"id":19,"name":"Florie","age":16,"email":"fbetheli@stumbleupon.com","gender":"Female","city":"Antíparos"},
{"id":20,"name":"Durant","age":27,"email":"ddeangelisj@github.com","gender":"Male","city":"Itumbiara"},
{"id":21,"name":"Ally","age":83,"email":"amatussevichk@mac.com","gender":"Female","city":"Jiangna"},
{"id":22,"name":"Meara","age":98,"email":"mstairmandl@blogtalkradio.com","gender":"Female","city":"Jinzhou"},
{"id":23,"name":"Aileen","age":71,"email":"asollettm@phpbb.com","gender":"Female","city":"Shimen"},
{"id":24,"name":"Millicent","age":87,"email":"meouzann@fc2.com","gender":"Genderqueer","city":"Tibro"},
{"id":25,"name":"Beckie","age":83,"email":"bpardoeo@nhs.uk","gender":"Female","city":"Taoyuan"},
{"id":26,"name":"Crin","age":18,"email":"cnuddp@flickr.com","gender":"Female","city":"Banepa"},
{"id":27,"name":"Decca","age":95,"email":"dbartusekq@vk.com","gender":"Male","city":"Aygeshat"},
{"id":28,"name":"Pyotr","age":51,"email":"pputtrellr@weebly.com","gender":"Male","city":"Ladushkin"}];


selectindividual(data:any){
  console.log(data);
}
routeto(value:string){
  //use it in html
  //[routerLink]="'/users/sd'"[queryParams]="{search:searchvar.value}"
  console.log(value);
   this.router.navigate(['/users/sd'],{queryParams:{search:value}})
}

    }
