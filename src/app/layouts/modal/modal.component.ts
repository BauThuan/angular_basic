import { Component, Input, EventEmitter } from '@angular/core';
import { MaterialModule } from '../../../material.module';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input({required: true}) isShowDialog!: boolean

  handleTransferStatus = new EventEmitter<boolean>()

  onClickHandleTransferStatus() {
    this.handleTransferStatus.emit(false)
  }

}
