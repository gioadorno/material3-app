import {Routes} from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {ProfileComponent} from './profile/profile.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
  },
];
