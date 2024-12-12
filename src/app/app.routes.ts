import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];
