import { Component, inject, DestroyRef, signal } from '@angular/core';
import { ServicesComponent } from './services/user.service';
import { Books } from './constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
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
