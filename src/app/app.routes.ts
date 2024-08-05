import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './screens/todolist/todolist.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { SignupComponent } from './screens/signup/signup.component';
import { authGuard } from './auth.guard';
import { LIST_ROUTER } from './app.constant';

export const routes: Routes = [
    {path: '', redirectTo: LIST_ROUTER.LOGIN,  pathMatch: 'full' },
    {path: LIST_ROUTER.LOGIN, component: LoginComponent},
    {path: LIST_ROUTER.SIGN_UP, component: SignupComponent},
    {
        path: '',
        canActivate: [authGuard],
        children: [
            { path: LIST_ROUTER.TODO_LIST, component: TodolistComponent },
            { path: LIST_ROUTER.HOME, component: HomeComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
