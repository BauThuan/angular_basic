import { Component, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { NgFor } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { environment } from '../../environments/apiUrl.environments';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  listProducts: any | null | undefined = []
  imagePath = environment.imageUrl
  constructor(
    private product: ProductService,
    private router: Router
  ){}
  ngOnInit(){
    this.product.getListProduct().subscribe({
      next: data =>  {
        this.listProducts = data.data
      },
      error: (err) => console.log(`Error ${err}`),
      complete: () => console.log(`Get list product success !`) 
    })
  }
  handleGetProductBySlug(){
    const slugFake = "laptop-gaming-asus-tuf-gaming-f15-fx-507-zu-4-lp-520-w"
    this.product.getProductBySlug(slugFake).subscribe({
      next: data => console.log(">>>> check data", data),
      error: (error) => console.log(`Error ${error}`),
      complete: () =>  console.log('Get product by slug success !')
     })
  }
  handleGetProductByCategory(){
    const categoryFake = 'laptop-gaming'
    this.product.getProductByCategory(categoryFake).subscribe({
      next: data => console.log('get product by category',data),
      error: error => console.log(`Error ${error}`),
      complete: () => console.log('Get product by Category success !')
    })
  }
  handleSearchProductByName(){
    const nameFake= ''
    this.product.searchProductByName(nameFake).subscribe({
      next: data => console.log('get product by name', data),
      error: error => console.log(`Error ${error}`),
      complete: () => console.log('get product by name success !')
    })
  }
  handleSearchProductByBrand(){
    const brandFake = ''
    this.product.searchProductByBrand(brandFake).subscribe({
      next: data => console.log('get product by brand', data),
      error: error => console.log(`Error ${error}`),
      complete: () => console.log('get prodcut by brand success !')
    })
  }
  handleNavigateProductDetail(id: number){
      this.router.navigate([`product-detail/${id}`])
  }
}
