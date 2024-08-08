import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { environment } from '../../environments/apiUrl.environments';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  productDetail: any = []
  imagePath: string = environment.imageUrl
  id: any
  constructor(
    private activatedRoute: ActivatedRoute,
    private product : ProductService
  ){}
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });  
    this.activatedRoute.data.subscribe(({ detailProduct }) => {
      console.log(detailProduct[0], );
      this.productDetail = detailProduct[0]
    })
  }

}
