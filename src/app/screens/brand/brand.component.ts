import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.scss'
})
export class BrandComponent {
  listBrand: any = []
  constructor(private brand: CategoryService){}
  ngOnInit(){
    return this.brand.getAllBrand().subscribe({
      next: data =>{
        console.log(data)
        this.listBrand = data.data
      },
      complete: () => console.log(`Get all brand success !`)
    })
  }

}
