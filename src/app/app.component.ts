import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  //standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'product-app';
}
