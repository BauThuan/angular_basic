import { APP_SOME_ID } from './../../core/token/route-parameters.token';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/apiUrl.environments';
import { routeParamFactory } from '../../core/factories/activated-route.factory';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  providers: [
    {
      provide: APP_SOME_ID,
      useFactory: routeParamFactory('id'),
      deps: [ActivatedRoute],
    },
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  productDetail: any = []
  imagePath: string = environment.imageUrl
  id: any
  constructor(
    private activatedRoute: ActivatedRoute,
    @Inject(APP_SOME_ID) private readonly id$: Observable<string | null>
  ){}
  ngOnInit() {
    // this.id$.subscribe(id => {
    //   this.id = id
    // });
    this.activatedRoute.data.subscribe(({ detailProduct }) => {
      console.log(detailProduct[0], );
      this.productDetail = detailProduct[0]
    })
  }

}
