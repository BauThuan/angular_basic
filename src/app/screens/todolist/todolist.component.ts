import { Component, DestroyRef, inject, signal } from '@angular/core';
import { ServicesComponent } from '../../services/todo.service';
import { Books } from '../../app.type';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss'
})
export class TodolistComponent {
  private booksData = inject(ServicesComponent) 
  private distroyRef = inject(DestroyRef)
  isShowDialog = signal<boolean>(false)
  listBooks = signal<Books[]>([])
  ngOnInit() {
    const response = this.booksData.getBooksList()
    .subscribe(
      {
        next: (data) => {
          return this.listBooks.set(data)
        },
        complete: () => {
          console.log(">>> checl data")
         
        }
      }
    );
    this.distroyRef.onDestroy(() => {
      response.unsubscribe()
    })
  }
  setStatusDialog(status: boolean | any) {
    return this.isShowDialog.set(status) 
  }
  setTransferStatus(status: boolean | any) {
    return this.isShowDialog.set(status) 
  }
   
}
