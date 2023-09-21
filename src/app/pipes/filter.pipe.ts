import{Pipe,PipeTransform} from'@angular/core';

@Pipe({
    name:'filter'
})
export class Filterpipe implements PipeTransform{
    transform(list:any,filterby:string) {
        if(filterby.toLowerCase() === 'all' || filterby ==='' || list.length ===0){
            return list;
        }else{
           return  list.filter((std:any)=>{
              return  std.gender.toLowerCase() === filterby.toLowerCase();
            })
        }
    }
}