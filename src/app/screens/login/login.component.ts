import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { DataFormatService } from '../../shared/data-format.service';
import { LIST_ROUTER } from '../../app.constant';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, TooltipModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('',{
      validators: [Validators.email, Validators.required]
    }),
    password: new FormControl('', {
      validators: [Validators.maxLength(6), Validators.required]
    })
  })
  isShowRequired = signal<boolean>(false)
  token = signal<string | null>(localStorage.getItem('jwt'))
  imagePath: string = 'assets/images/logo.svg'
  constructor(
    private user: UserService,
    private format: DataFormatService,
    private router: Router,
  ){}
  get EmailInvalid(){
    const control = this.form.controls
    return control.email.touched &&
           control.email.dirty &&
           control.email.invalid
  }
  get PasswordInvalid(){
    const control = this.form.controls
    return control.password.touched &&
           control.password.dirty &&
           control.password.invalid
  }
  ngOnInit(){
    if(this.token()){
      return this.router.navigate([`/${LIST_ROUTER.PRODUCT_LIST}`]);
    } 
    return this.router.navigate([`/${LIST_ROUTER.LOGIN}`]);;
  }

  handleUserLogin() {
    const formattedData = this.format.handleFormatDataLogin(
      this.form.value.email, 
      this.form.value.password
    );
    this.user.loginUser(formattedData).subscribe({
      next: data => {
        localStorage.setItem('jwt', data.jwt)
        if(data){
          this.router.navigate([`/${LIST_ROUTER.PRODUCT_LIST}`]);
        }
      },
      error: err => console.log(`Error ${err}`),
      complete: () => {
        window.location.reload();
        return this.router.navigate([`/${LIST_ROUTER.PRODUCT_LIST}`]);
      },
    });
  }
}
