import { Component, effect, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  title = input.required<string>();
  menuItems = signal<Array<string>>(['Home', 'Products', 'Profile']);
  darkMode = signal<boolean>(false);

  setDarkMode = effect(() =>
    document.documentElement.classList.toggle('dark', this.darkMode()),
  );
}
