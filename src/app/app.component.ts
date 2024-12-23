import {Component, signal} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

const densityClasses = ['default', 'comfortable', 'compact', 'dense'];

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    RouterModule,
    MatIconModule,
    MatRadioModule,
    ReactiveFormsModule,
  ],
  providers: [Document],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  densityForm = new FormControl<number>(0);
  title = signal<string>('Test App');
  navItems = signal<Array<any>>([
    {
      title: 'Home',
      route: '',
      icon: 'home',
    },
    {
      title: 'Products',
      route: '/products',
      icon: 'inventory',
    },
    {
      title: 'Profile',
      route: 'profile',
      icon: 'person',
    },
    {
      title: 'To Do',
      route: 'shopping-list',
      icon: 'shopping',
    },
  ]);
  densities = signal<Array<any>>([
    {
      title: 'Default',
      value: 0,
    },
    {
      title: 'Comfortable',
      value: -1,
    },
    {
      title: 'Compact',
      value: -2,
    },
    {
      title: 'Dense',
      value: -3,
    },
  ]);

  constructor() {
    this.densityForm.valueChanges.subscribe((v) => {
      document.documentElement.classList.remove(...densityClasses);
      switch (v) {
        case 1:
          document.documentElement.classList.toggle('retirement');
          break;
        case -1:
          document.documentElement.classList.toggle('comfortable');
          break;
        case -2:
          document.documentElement.classList.toggle('compact');
          break;
        case -3:
          document.documentElement.classList.toggle('dense');
          break;
        default:
          document.documentElement.classList.toggle('default');
          break;
      }
    });
  }
}
