import { Component } from '@angular/core';
import { PostServices } from '../../services/post.service';
import { environment } from '../../environments/apiUrl.environments';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterModule, NgFor],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  listPost: any = []
  imagePath = environment.imageUrl
  constructor(private postService: PostServices){}
  ngOnInit(){
    this.postService.getAllPost().subscribe({
      next: data => {
        console.log(data.data);
        return this.listPost = data.data
      },
      error: err => console.log(err),
      complete: () => console.log(`Get all post success !`),
    })
  }


}
