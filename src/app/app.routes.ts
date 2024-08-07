import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './pages/contacts/about/about.component';
import { ServicesComponent } from './pages/contacts/services/services.component';
import { ContactComponent } from './pages/contacts/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
];
