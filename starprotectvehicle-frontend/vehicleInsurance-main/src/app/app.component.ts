import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UnderwriterViewAllComponent } from './components/underwriterComponent/underwriter-view-all/underwriter-view-all.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, HomeComponent, UnderwriterViewAllComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first';
}
