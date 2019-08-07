import { Component, OnInit, OnDestroy } from '@angular/core';

import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  
  private firstObsSub: Subscription;

  constructor() { }
  
  ngOnInit() {
    
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if(count === 5){
          observer.complete();
        }
        if(count > 3) {
          observer.error(new Error('counter is great than 3'));          
        }
        count++;
      }, 1000)
    });

    
    this.firstObsSub = customIntervalObservable.subscribe(data => {
      console.log(data);
    }, error => {
      alert(error.message);
    }, () => {
      console.log('Completed!');
    });

    // this.firstObsSub = interval(1000).subscribe(count => {
    //   console.log(count);
    // });    
  }

  ngOnDestroy(): void {
    this.firstObsSub.unsubscribe();
  }

}
