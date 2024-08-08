import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  constructor(private activatedRoute: ActivatedRoute){}
  ngOnInit() {
    this.activatedRoute.data.subscribe(({ detailProduct }) => {
      console.log('>>> check data return', detailProduct);
    })
  }

}
