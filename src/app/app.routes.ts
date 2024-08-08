import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './screens/todolist/todolist.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { SignupComponent } from './screens/signup/signup.component';
import { AuthGuard } from './auth.guard';
import { LIST_ROUTER } from './app.constant';
import { NotfoundComponent } from './screens/notfound/notfound.component';
import { ProductDetailResolver } from './resolvers/user.resolver';
import { ProductListComponent } from './screens/product-list/product-list.component';
import { ProductDetailComponent } from './screens/product-detail/product-detail.component';
import { PostComponent } from './screens/post/post.component';
import { PostDetailComponent } from './screens/post-detail/post-detail.component';
import { PostDetailResolver } from './resolvers/post.resolver';

export const routes: Routes = [
    {path: '', redirectTo: LIST_ROUTER.LOGIN,  pathMatch: 'full' },
    {
        path: LIST_ROUTER.LOGIN,
        component: LoginComponent,
    },
    {path: LIST_ROUTER.SIGN_UP, component: SignupComponent},
    {
        path: '',
        canActivate: [AuthGuard],
        children: [
            {   path: LIST_ROUTER.TODO_LIST, component: TodolistComponent },
            {   path: LIST_ROUTER.HOME, component: HomeComponent },
            {   path: LIST_ROUTER.PRODUCT_LIST, component: ProductListComponent},
            {   path: LIST_ROUTER.PRODUCT_DETAIL,
                resolve: {
                    detailProduct : ProductDetailResolver
                },
                component: ProductDetailComponent
            },
            {   path: LIST_ROUTER.POST, component: PostComponent},
            {   path: LIST_ROUTER.POST_DETAIL,
                resolve: {
                    detailPost : PostDetailResolver
                },
                component: PostDetailComponent
            },
        ]
    },
    {path: LIST_ROUTER.NOT_FOUND, component: NotfoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
