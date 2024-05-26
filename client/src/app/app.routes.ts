import { Routes } from '@angular/router';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent }, //routing to the homepage
  { path: 'detail/:id', component: DetailpageComponent }, //routing to the detail page
  { path: '**', redirectTo: '/' }, //redirecting to the homepage
];
