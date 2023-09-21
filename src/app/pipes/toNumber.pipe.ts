import{Pipe,PipeTransform} from '@angular/core';


@Pipe({
    name: 'toNumber'
})
export class ToNumberPipe implements PipeTransform {
    transform(value: any) {
        console.log(value);
        let retNumber = parseInt(value);
        console.log(retNumber);
        return isNaN(retNumber) ? 0 : retNumber;
    }
}