import { Component, DestroyRef } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormatDatePipe } from '../../pipes/formatDate.pipes';
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [RouterModule, NgFor, FormatDatePipe],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  listOrder: any = []
  constructor(
    private orderService: OrderService,
    private destroyRef: DestroyRef
  ){}
  ngOnInit(){
    const subscription = this.orderService.getAllOrder().subscribe({
      next: data => {
        this.listOrder = data.data
        console.log(data.data)
      },
      complete: () => console.log(`Get list Order success !`)
    })
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }
  handleAddNewOrder(){
    const orderFake = {
      address: "HN",
      quantity: 2,
      cost: "10000",
      date: "2024-10-01",
      status: "new",
      idProduct: ["3"]
  }
    return this.orderService.postOrder(orderFake).subscribe({
      next: data => console.log(data),
      error: error => console.log(`Error ${error}`),
      complete: () => console.log(`Add order success !`)
    })
  }
}
