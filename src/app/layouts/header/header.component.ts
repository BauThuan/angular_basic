import { Component, signal } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  token = signal<string | undefined>(localStorage.getItem('jwt') || undefined) 
  
 
}
