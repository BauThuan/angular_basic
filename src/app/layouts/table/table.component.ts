import { Component, Input, EventEmitter } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { Books } from '../../constant';
import { TITLE_TABLE_COLUMS, DATA_MAP_FIELDS } from '../../type';
import { FormatDatePipe } from '../../pipes/formatDate.pipes';
import { TextTransformPipe } from '../../pipes/textTranform.pipes';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MaterialModule, FormatDatePipe, TextTransformPipe],
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
     TITLE_TABLE_COLUMS.RETURN_DATE
    ];
  fieldsData: string[] = [
    DATA_MAP_FIELDS.ID,
    DATA_MAP_FIELDS.BOOK_TITLE,
    DATA_MAP_FIELDS.BORROWER,
    DATA_MAP_FIELDS.STATUS,
    DATA_MAP_FIELDS.BORROW_DATE,
    DATA_MAP_FIELDS.RETURN_DATE
  ]
  columnsToDisplay: string[] = this.displayedColumns.slice();
 @Input({required: true}) books!: any
 @Input() isShowDialog!: boolean
  setStatus = new EventEmitter<boolean>()

  setStatusDialog() {
    console.log(">>> check data", this.isShowDialog)
    this.setStatus.emit(true)
  }

}


