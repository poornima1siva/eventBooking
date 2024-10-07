import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { RouterLink } from '@angular/router';
import { EventsComponent } from '../events/events.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormComponent,RouterLink,EventsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
