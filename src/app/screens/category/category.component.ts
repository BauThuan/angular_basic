import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { environment } from '../../environments/apiUrl.environments';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterModule, NgFor],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  listCategory: any = []
  constructor(private category: CategoryService){}
  ngOnInit(){
    this.category.getAllCategory().subscribe({
      next: data => {
        console.log(">>> check data", data.data),
        this.listCategory = data.data
      },
      complete: () => console.log(`Get all category success !`),
    })
    this.category.getAllBrand().subscribe({
      next: data => console.log(data.data),
      complete: () => console.log(`Get all Brand success !`),
    })
  }
}
