import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from "./layouts/header/header.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { MaterialModule } from "../material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, provideHttpClient, withInterceptors, withJsonpSupport } from '@angular/common/http';
import { ServicesComponent } from "./services/todo.service";
import { TableComponent } from "./layouts/table/table.component";
import { ModalComponent } from "./layouts/modal/modal.component";
import { authInterceptor } from "./interceptors/auth.interceptor";
import { TodolistComponent } from "./screens/todolist/todolist.component";
import { HomeComponent } from "./screens/home/home.component";


@NgModule({
    declarations: [
        AppComponent, 
        TodolistComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderComponent,
        FooterComponent,
        MaterialModule,
        TableComponent,
        BrowserAnimationsModule,
        HttpClientModule,
        ModalComponent
        ],
    providers: [
        ServicesComponent,
        // provideHttpClient(
        //     withInterceptors([authInterceptor]),
        //     withJsonpSupport()
        // )
    ],
    bootstrap: [AppComponent]
})

export class AppModule{}