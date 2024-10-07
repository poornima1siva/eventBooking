import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
export const routes: Routes = [{path:'', redirectTo:"/form",pathMatch:"full"},
    {path:'form', component:FormComponent},
    {path:'home', component:HomeComponent},
    {path:'events', component:EventsComponent}

]