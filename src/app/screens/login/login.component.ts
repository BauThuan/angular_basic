import { Component, inject, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf,                                                                  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private userService = inject(UserService)
  private router: Router | any
  form = new FormGroup({
    email: new FormControl('',{
      validators: [Validators.email, Validators.required]
    }),
    password: new FormControl('', {
      validators: [Validators.maxLength(6), Validators.required]
    })
  })
  isShowRequired = signal<boolean>(false)
  fakeData = {
    "identifier": "thuan56789@gmail.com",
    "password": "password"
    }

   ngOnInit(){
    this.userService.loginUser(this.fakeData).subscribe({
    next:(data) => {
      localStorage.setItem('jwt', data.jwt)
      this.router.navigate(['/heroes']);
    },
    error: (error) =>  console.log(`Error ${error}`),
    complete: () => console.log('Login Success !')
  })
  }
  onSubmit(){
    console.log(">>> cekc data", this.form.value.email);
    console.log(">>> cekc data", this.form.value.password);
    console.log(">>> cekc data", this.form.controls.email);
    this.form.reset()
  }
}
