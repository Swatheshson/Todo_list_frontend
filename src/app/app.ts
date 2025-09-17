import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Taskcomp } from './task/taskcomp';

@Component({
  selector: 'app-root',
  imports: [Taskcomp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('toto-git');
}
