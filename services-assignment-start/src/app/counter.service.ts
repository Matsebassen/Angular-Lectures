export class CounterService {
    toInactiveCounter: number = 0;
    toActiveCounter: number = 0;

    countActive(){
        this.toActiveCounter++;
        console.log(`${this.toActiveCounter} users have been set to active`)
    }

    countInactive(){
        this.toInactiveCounter++;
        console.log(`${this.toInactiveCounter} users have been set to inactive`)
    }
}