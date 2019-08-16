import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform{
    
    transform(value: any, limit: number=15) {
        return value.substr(0, limit) + (value.length>limit ? '... ' : '');
    }

}