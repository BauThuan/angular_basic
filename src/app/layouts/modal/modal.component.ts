import { Component, Input, EventEmitter, Output, signal, inject, DestroyRef } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Books } from '../../constant';
import { ServicesComponent } from '../../services/user.service';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  form: FormGroup
  @Input({required: true}) isShowDialog!: boolean
  @Output() handleTransferStatus = new EventEmitter<boolean>()
  @Output() formBookData = new EventEmitter<Books>()
  private booksData = inject(ServicesComponent) 
  private distroyRef = inject(DestroyRef)


  constructor(private dataForm: FormBuilder){
    this.form = this.dataForm.group({
      title: ['', Validators.required],
      borrower: ['', [Validators.required, Validators.email]],
      status: ['', [Validators.required, Validators.email]],
    });
  }

  onClickHandleTransferStatus() {
    this.handleTransferStatus.emit(false)
    console.log(">>> chekc data", this.form.value)
  }
  onSubmit() {
    const {title, borrower, status} = this.form.value
    const books = {
      id: `${Math.random()}`,
      bookTitle: title,
      borrower: borrower,
      status:status,
    }
    this.booksData.postBooks(books)
    .subscribe(
      {
        next: (data) => {
        console.log('>>> checl daa', data)
        },
         error: (error) => {
          console.error('Error posting book:', error);
        },
        complete: () => {
          console.log("post hanhf cong")
         
        }
      }
    );
    this.form.reset()
    this.handleTransferStatus.emit(false)
  }
  onCancle(){
    this.form.reset()
    this.handleTransferStatus.emit(false)
  }

}
