import { Component, inject, DestroyRef, signal } from '@angular/core';
import { ServicesComponent } from './services/user.service';
import { Books } from './app.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  private booksData = inject(ServicesComponent) 
  private distroyRef = inject(DestroyRef)
  listBooks = signal<Books[]>([])
   ngOnInit() {
    const response = this.booksData.getBooksList()
    .subscribe(
      {
        next: (data) => {
          return this.listBooks.set(data)
        },
        complete: () => {
         
        }
      }
    );
    this.distroyRef.onDestroy(() => {
      response.unsubscribe()
    })
  }
   
}
