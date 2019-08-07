import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSub = 'subAdvanced';

  onSubmit(form: NgForm) {
    console.log(`E-mail: ${form.value.email}`);
    console.log(`Subscription: ${form.value.subscription}`);
    console.log(`Password: ${form.value.password}`);
    console.log(form);
  }

}
