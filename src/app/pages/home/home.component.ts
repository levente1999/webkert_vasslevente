import { Component } from '@angular/core';

export interface Jarmu {
  id:number,
  nev: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
