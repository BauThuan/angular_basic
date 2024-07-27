import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [MaterialModule, NgIf],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
  @Input({required: true}) isShowMessage!: boolean
  constructor(private _snackBar: MatSnackBar) {}
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
