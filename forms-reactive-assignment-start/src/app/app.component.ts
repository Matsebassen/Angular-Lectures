import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  projectForm: FormGroup;
  projectStatues = ['Stable', 'Critical', 'Finished'];
  
  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projName': new FormControl(null, [Validators.required], this.checkProjectName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projStatus': new FormControl(this.projectStatues[0])
    });    
  }

  onSubmit(){
    console.log(this.projectForm);
  }

  checkProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'Test'){
          resolve({'invalidName': true})
        } else{
          resolve(null);
        }
      }, 2000);
    });
    
    return promise;    
  }
  
}


