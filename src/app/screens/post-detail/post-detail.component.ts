import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/apiUrl.environments';
import { APP_SOME_ID } from '../../core/token/route-parameters.token';
import { routeParamFactory } from '../../core/factories/activated-route.factory';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [],
  providers: [
    {
      provide: APP_SOME_ID,
      useFactory: routeParamFactory('id'),
      deps: [ActivatedRoute]
    },
  ],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent {
  detailPost: any = {}
  id: any
  imagePath: string = environment.imageUrl
  constructor(
    private activatedRoute: ActivatedRoute,
    @Inject(APP_SOME_ID) private readonly id$: Observable<string | null>
  ){}
  ngOnInit(){
    // this.id$.subscribe(id => {
    //   this.id = id
    // });
    this.activatedRoute.data.subscribe(({ detailPost }) => {
      console.log(detailPost);
      this.detailPost = detailPost[0]
    })
  }
}
