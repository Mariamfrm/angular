import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']  // Corrigé de styleUrl à styleUrls
})
export class App {
  protected title = 'hello-world-angular';

  private unusedVariable = 42;  // ⚠️ variable inutilisée = Sonar va l’alerter
}
