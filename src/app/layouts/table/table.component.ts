import { Component, Input, Output, EventEmitter, inject, signal } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { Books } from '../../app.type';
import { TITLE_TABLE_COLUMS, DATA_MAP_FIELDS } from '../../app.constant';
import { FormatDatePipe } from '../../pipes/formatDate.pipes';
import { TextTransformPipe } from '../../pipes/textTranform.pipes';
import { ServicesComponent } from '../../services/todo.service';
import { NotificationComponent } from '../../components/notification/notification.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MaterialModule,
    FormatDatePipe,
    TextTransformPipe,
    NotificationComponent
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  displayedColumns: string[] = [
    TITLE_TABLE_COLUMS.ID,
    TITLE_TABLE_COLUMS.BOOK_TITLE, 
    TITLE_TABLE_COLUMS.BORROWER, 
    TITLE_TABLE_COLUMS.STATUS, 
    TITLE_TABLE_COLUMS.BORROW_DATE,
    TITLE_TABLE_COLUMS.RETURN_DATE,
    TITLE_TABLE_COLUMS.FEATURE
    ];
  fieldsData: string[] = [
    DATA_MAP_FIELDS.ID,
    DATA_MAP_FIELDS.BOOK_TITLE,
    DATA_MAP_FIELDS.BORROWER,
    DATA_MAP_FIELDS.STATUS,
    DATA_MAP_FIELDS.BORROW_DATE,
    DATA_MAP_FIELDS.RETURN_DATE,
  ]
  private booksService = inject(ServicesComponent)
  columnsToDisplay: string[] = this.displayedColumns.slice();
  isShowMessage = signal<boolean>(false)
 @Input({required: true}) books!: any
 @Input({required: true}) isShowDialog!: boolean
 @Output() setStatus = new EventEmitter<boolean>()
  setStatusDialog() {
    return this.setStatus.emit(true)
  }
  handleGetDataIndex(){
    this.books();
    this.isShowDialog;
    let randomIndex = (Math.floor(Math.random() * 10) + 1);
    let  data =  this.books()[randomIndex]
    console.log(">>> check data", data)
  }
  handleUpdateBookId(data: Books, id: string){
    this.isShowMessage.set(true)
    this.booksService.updateBookId(data, id).subscribe({
      next: (data) => {
        console.log(">>> check is message", this.isShowMessage())
        this.isShowMessage.set(false)
        console.log('>>> check data update', data)
      },
      complete: () => {
        console.log('>>> Update data thành công !', this.isShowMessage())
      },
      error: (error) => {
        this.isShowMessage.set(false)
        console.log(`Error update book id ${id} is: ${error}`)
      }
    })
  }
  handleDeleteBookId(id: string){
    this.isShowMessage.set(true)
    this.booksService.deleteBookId(id).subscribe({
      next: (data) => {
        this.isShowMessage.set(false)
        console.log(">>> check data", data)
      },
      complete: () => {
        console.log(`Xóa book ${id} thành công`)
      },
      error: (error) => {
        this.isShowMessage.set(false)
        console.log(error)
      }
    })
  }
  handleUpdateDataBookId(id: string) {
    this.booksService.postBooks(id).subscribe({
      next: (data) => {
        console.log(">>> check data", data)
      },
      error: (error) => {
        console.log(`Error Post Book ${error }`)
      },
      complete: () => {
        console.log("Tao moi book thanh cong")
      }
    })

  }
}


