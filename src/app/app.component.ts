import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
subscriptions = ['Based', 'Advanced', 'Pro'];
selectedSubscription = 'Advanced';
@ViewChild('signupForm', {static: false}) sgnForm = NgForm;
  onSubmit() {
    // @ts-ignore
    console.log(this.sgnForm.value);
  }
}
