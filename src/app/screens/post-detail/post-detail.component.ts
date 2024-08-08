import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/apiUrl.environments';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent {
  detailPost: any = {}
  imagePath: string = environment.imageUrl
  constructor(private activatedRoute: ActivatedRoute){}
  ngOnInit(){
    this.activatedRoute.data.subscribe(({ detailPost }) => {
      console.log(detailPost);
      this.detailPost = detailPost[0]
    })
  }
}
